import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <View >
      <MaskedView
        
        maskElement={
          <Text >
            {title}
          </Text>
        }
      >
        <LinearGradient
          colors={['#A855F7', '#06B6D4', '#3B82F6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          
        >
          <Text >{title}</Text>
        </LinearGradient>
      </MaskedView>
      <Text >{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 64,
  },
  maskedView: {
    height: 60,
    marginBottom: 16,
  },
  titleMask: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'transparent',
  },
  subtitle: {
    color: '#D1D5DB',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
  },
});