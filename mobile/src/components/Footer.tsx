import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View >
      <View >
        <View >
          <View >
            <Ionicons name="musical-notes" 2 size={32}   />
            <Text >
              1DreamUnited
            </Text>
          </View>
          
          <Text >
            {t('footer.tagline', 'Technology Serving Humanity\'s Musical Heritage')}
          </Text>
          
          <View >
            {[Twitter, Instagram, Youtube, Github, Linkedin].map((Icon, index) => (
              <TouchableOpacity 
                key={index}
                href="#" 
                
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon size={24} />
              </TouchableOpacity>
            ))}
          </View>
          
          <Text >
            {t('footer.description', 'The symphony of human culture, conducted by community wisdom')}
          </Text>
          <Text >
            © {new Date().getFullYear()} 1DreamUnited. All rights reserved.
          </Text>
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