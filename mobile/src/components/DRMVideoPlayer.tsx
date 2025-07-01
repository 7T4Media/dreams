
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import Video from 'react-native-video';
import { Ionicons } from '@expo/vector-icons';
import { StreamingContent, DRMConfig } from '../services/drmStreaming';

interface DRMVideoPlayerProps {
  content: StreamingContent;
  onPlaybackEvent?: (event: string, data: any) => void;
}

export const DRMVideoPlayer: React.FC<DRMVideoPlayerProps> = ({ 
  content, 
  onPlaybackEvent 
}) => {
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    // Auto-hide controls after 3 seconds
    const timer = setTimeout(() => {
      if (!paused) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [paused, showControls]);

  const handleLoad = (data: any) => {
    setDuration(data.duration);
    setLoading(false);
    onPlaybackEvent?.('load', { duration: data.duration });
  };

  const handleProgress = (data: any) => {
    setCurrentTime(data.currentTime);
    onPlaybackEvent?.('progress', { currentTime: data.currentTime, duration });
  };

  const handleError = (error: any) => {
    console.error('Video playback error:', error);
    setError('Failed to play video. Please check your connection.');
    setLoading(false);
    onPlaybackEvent?.('error', error);
  };

  const handleEnd = () => {
    setPaused(true);
    setCurrentTime(0);
    onPlaybackEvent?.('end', { duration, watchTime: currentTime });
  };

  const togglePlayPause = () => {
    const newPaused = !paused;
    setPaused(newPaused);
    setShowControls(true);
    onPlaybackEvent?.(newPaused ? 'pause' : 'play', { currentTime });
  };

  const seek = (time: number) => {
    videoRef.current?.seek(time);
    setCurrentTime(time);
    onPlaybackEvent?.('seek', { seekTime: time });
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDRMConfig = (): any => {
    if (!content.drmConfig) return undefined;

    const { type, licenseServer, certificateUrl, headers } = content.drmConfig;

    // Configure DRM based on platform and type
    if (Platform.OS === 'ios' && type === 'fairplay') {
      return {
        type: 'fairplay',
        licenseServer,
        certificateUrl,
        headers,
      };
    } else if (Platform.OS === 'android' && type === 'widevine') {
      return {
        type: 'widevine',
        licenseServer,
        headers,
      };
    } else if (type === 'playready') {
      return {
        type: 'playready',
        licenseServer,
        headers,
      };
    }

    return undefined;
  };

  const handleVideoPress = () => {
    setShowControls(!showControls);
  };

  if (error) {
    return (
      <View >
        <Ionicons name="alert-circle" size={48} color="#EF4444" />
        <Text >{error}</Text>
        <TouchableOpacity 
          
          onPress={() => {
            setError(null);
            setLoading(true);
          }}
        >
          <Text >Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View >
      <TouchableOpacity 
        
        onPress={handleVideoPress}
        activeOpacity={1}
      >
        <Video
          ref={videoRef}
          source={{ 
            uri: content.streamUrl,
            headers: content.drmConfig?.headers,
          }}
          drm={getDRMConfig()}
          
          paused={paused}
          onLoad={handleLoad}
          onProgress={handleProgress}
          onError={handleError}
          onEnd={handleEnd}
          onLoadStart={() => setLoading(true)}
          resizeMode="contain"
          progressUpdateInterval={1000}
        />

        {loading && (
          <View >
            <Ionicons name="refresh" size={32} color="#FFFFFF" />
            <Text >Loading...</Text>
          </View>
        )}

        {showControls && (
          <View >
            <TouchableOpacity 
              
              onPress={togglePlayPause}
            >
              <Ionicons 
                name={paused ? "play" : "pause"} 
                size={48} 
                color="#FFFFFF" 
              />
            </TouchableOpacity>

            <View >
              <Text >
                {formatTime(currentTime)} / {formatTime(duration)}
              </Text>
              
              <View >
                <View >
                  <View 
                    style={[
                      styles.progressFill, 
                      { width: `${(currentTime / duration) * 100}%` }
                    ]} 
                  />
                </View>
              </View>

              <TouchableOpacity 
                
                onPress={() => {
                  // Handle fullscreen toggle
                  onPlaybackEvent?.('fullscreen', { currentTime });
                }}
              >
                <Ionicons name="expand" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>

      <View >
        <Text >{content.title}</Text>
        <Text >{content.artist}</Text>
        <Text >{content.description}</Text>
        <View >
          {content.genre.map((genre, index) => (
            <View key={index} >
              <Text >{genre}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  videoContainer: {
    position: 'relative',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 16,
  },
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 40,
    padding: 16,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 12,
    minWidth: 80,
  },
  progressContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 2,
  },
  fullscreenButton: {
    padding: 8,
  },
  contentInfo: {
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  artist: {
    color: '#8B5CF6',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreTag: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 4,
  },
  genreText: {
    color: '#8B5CF6',
    fontSize: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#000',
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
  },
  retryButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
