
import { useState, useEffect } from 'react';
import { drmStreamingService, StreamingContent, PlaybackSession } from '../services/drmStreaming';

export const useDRMStreaming = () => {
  const [content, setContent] = useState<StreamingContent[]>([]);
  const [currentSession, setCurrentSession] = useState<PlaybackSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRecommendedContent = async (
    userId: string,
    culturalContext: string,
    preferences: string[]
  ) => {
    setLoading(true);
    setError(null);
    try {
      const recommendedContent = await drmStreamingService.getRecommendedContent(
        userId,
        culturalContext,
        preferences
      );
      setContent(recommendedContent);
    } catch (err) {
      setError('Failed to load recommended content');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const startPlayback = async (
    contentId: string,
    userId: string,
    deviceInfo: any
  ) => {
    setLoading(true);
    setError(null);
    try {
      const session = await drmStreamingService.initializePlayback(
        contentId,
        userId,
        deviceInfo
      );
      setCurrentSession(session);
      return session;
    } catch (err) {
      setError('Failed to start playback');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const downloadContent = async (
    contentId: string,
    userId: string,
    quality: string = 'medium'
  ) => {
    setLoading(true);
    setError(null);
    try {
      const downloadInfo = await drmStreamingService.downloadForOffline(
        contentId,
        userId,
        quality
      );
      return downloadInfo;
    } catch (err) {
      setError('Failed to start download');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const trackEvent = async (event: string, data: any) => {
    if (currentSession) {
      await drmStreamingService.trackPlaybackEvent(
        `session_${currentSession.contentId}_${currentSession.startTime.getTime()}`,
        event,
        data
      );
    }
  };

  return {
    content,
    currentSession,
    loading,
    error,
    loadRecommendedContent,
    startPlayback,
    downloadContent,
    trackEvent,
  };
};
