
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Hero from '../sections/Hero';
import GlobalMusicEvent from '../sections/GlobalMusicEvent';
import AIEcosystem from '../sections/AIEcosystem';
import GlobalInfrastructure from '../sections/GlobalInfrastructure';
import BandMemberFinder from '../sections/BandMemberFinder';
import VideoCollaboration from '../sections/VideoCollaboration';
import CopyrightProtection from '../sections/CopyrightProtection';
import MusicVenues from '../sections/MusicVenues';
import Sponsors from '../sections/Sponsors';
import EducationBusiness from '../sections/EducationBusiness';
import GlobalImpact from '../sections/GlobalImpact';
import ComingSoon from '../sections/ComingSoon';

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <ScrollView 
        
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <GlobalMusicEvent />
        <AIEcosystem />
        <GlobalInfrastructure />
        <BandMemberFinder />
        <VideoCollaboration />
        <CopyrightProtection />
        <MusicVenues />
        <Sponsors />
        <EducationBusiness />
        <GlobalImpact />
        <ComingSoon />
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
