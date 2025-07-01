
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AIEcosystem from '../sections/AIEcosystem';
import BandMemberFinder from '../sections/BandMemberFinder';
import VideoCollaboration from '../sections/VideoCollaboration';

export default function AIEcosystemScreen() {
  return (
    <SafeAreaView >
      <ScrollView 
        
        showsVerticalScrollIndicator={false}
      >
        <AIEcosystem />
        <BandMemberFinder />
        <VideoCollaboration />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
});
