import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const features = [
  {
    icon: <Ionicons name="videocam" size={28} color="#8B5CF6" />,
    emoji: '🎥',
    title: 'HD Video Sync',
    description: 'Crystal-clear video with ultra-low latency synchronization for seamless real-time collaboration',
  },
  {
    icon: <Ionicons name="mic" size={28} color="#8B5CF6" />,
    emoji: '🎙️',
    title: 'Multi-Track Recording',
    description: 'Record individual tracks simultaneously with professional-grade audio quality and mixing',
  },
  {
    icon: <Ionicons name="share" 2 size={28}   />,
    emoji: '📱',
    title: 'Screen Sharing',
    description: 'Share DAW sessions, sheet music, and collaborate on arrangements in real-time',
  },
  {
    icon: <Ionicons name="time" size={28} color="#8B5CF6" />,
    emoji: '⏱️',
    title: 'Session Recording',
    description: 'Automatically record and save collaboration sessions for later review and editing',
  },
];

const stats = [
  {
    icon: <Ionicons name="globe" size={24} color="#8B5CF6" />,
    value: '120+',
    label: 'Countries Connected',
  },
  {
    icon: <Ionicons name="people" size={24} color="#8B5CF6" />,
    value: '50K+',
    label: 'Active Sessions/Month',
  },
  {
    icon: <Zap size={24}  />,
    value: '<50ms',
    label: 'Average Latency',
  },
  {
    icon: <Headphones size={24}  />,
    value: '99.9%',
    label: 'Audio Quality',
  },
];

export const VideoCollaboration: React.FC = () => {
  return (
    <View id="videocollaboration" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Video Collaboration Studio"
            subtitle="Professional-grade remote collaboration tools for musicians worldwide"
          />
        </ScrollAnimator>

        <View >
          {features.map((feature, index) => (
            <ScrollAnimator key={feature.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard >
                <View >{feature.emoji}</View>
                <View >
                  {feature.icon}
                  <Text >{feature.title}</Text>
                </View>
                <Text >{feature.description}</Text>
                <View ></View>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </View>

        <ScrollAnimator animation="fade-up">
          <View >
            <Text >Platform Performance</Text>
            <View >
              {stats.map((stat, index) => (
                <View key={stat.label} >
                  <View >
                    {stat.icon}
                  </View>
                  <View >
                    {stat.value}
                  </View>
                  <View >{stat.label}</View>
                </View>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        <View >
          <ScrollAnimator animation="fade-right">
            <View>
              <Text >How It Works</Text>
              <View >
                <View >
                  <View >
                    1
                  </View>
                  <View>
                    <Text >Create or Join Session</Text>
                    <Text >Start a new collaboration or join an existing session with musicians worldwide</Text>
                  </View>
                </View>
                <View >
                  <View >
                    2
                  </View>
                  <View>
                    <Text >Set Up Your Instruments</Text>
                    <Text >Connect your audio interface and instruments for professional recording quality</Text>
                  </View>
                </View>
                <View >
                  <View >
                    3
                  </View>
                  <View>
                    <Text >Collaborate in Real-Time</Text>
                    <Text >Play together with synchronized audio and video, share screens, and record your session</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-left">
            <View >
              <Text >Start Collaborating</Text>
              <Text >
                Join thousands of musicians creating music together across continents. 
                No downloads required - everything runs in your browser.
              </Text>
              
              <View >
                <View >
                  <View ></View>
                  <Text>Browser-based, no software installation</Text>
                </View>
                <View >
                  <View ></View>
                  <Text>Professional audio quality (48kHz/24-bit)</Text>
                </View>
                <View >
                  <View ></View>
                  <Text>Automatic session backup and recovery</Text>
                </View>
                <View >
                  <View ></View>
                  <Text>Cross-platform compatibility</Text>
                </View>
              </View>
              
              <TouchableOpacity >
                Launch Collaboration Studio
              </TouchableOpacity>
            </View>
          </ScrollAnimator>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  marginBottom16: {
    marginBottom: 64,
  },
  marginBottom4: {
    marginBottom: 16,
  },
  text3xl: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textLg: {
    fontSize: 18,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textGray300: {
    color: '#D1D5DB',
  },
  bgBlack: {
    backgroundColor: '#000000',
  },
  flex: {
    flex: 1,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  padding4: {
    padding: 16,
  },
  padding6: {
    padding: 24,
  },
  roundedLg: {
    borderRadius: 8,
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});