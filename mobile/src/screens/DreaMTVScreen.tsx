
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DreaMTV from '../sections/DreaMTV';
import ComingSoon from '../sections/ComingSoon';

export default function DreaMTVScreen() {
  return (
    <SafeAreaView >
      <ScrollView 
        
        showsVerticalScrollIndicator={false}
      >
        <DreaMTV />
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
