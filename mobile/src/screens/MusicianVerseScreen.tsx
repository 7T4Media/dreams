
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MusicianVerse from '../sections/MusicianVerse';
import MusicVenues from '../sections/MusicVenues';
import CopyrightProtection from '../sections/CopyrightProtection';

export default function MusicianVerseScreen() {
  return (
    <SafeAreaView >
      <ScrollView 
        
        showsVerticalScrollIndicator={false}
      >
        <MusicianVerse />
        <MusicVenues />
        <CopyrightProtection />
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
