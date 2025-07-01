import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SectionTitle } from '../components/SectionTitle';
import { DRMVideoPlayer } from '../components/DRMVideoPlayer';
import { useDRMStreaming } from '../hooks/useDRMStreaming';
import { Ionicons } from '@expo/vector-icons';

export default function DreaMTV() {
  const { content, loading, error, loadRecommendedContent, startPlayback, trackEvent } = useDRMStreaming();
  const [selectedContent, setSelectedContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load recommended content for demo
    loadRecommendedContent('demo-user', 'Global', ['World', 'Fusion', 'Electronic', 'Pop']);
  }, []);

  const handlePlayContent = async (contentItem) => {
    setSelectedContent(contentItem);
    setIsPlaying(true);
    
    const session = await startPlayback(contentItem.id, 'demo-user', {
      platform: 'mobile',
      device: 'react-native'
});
