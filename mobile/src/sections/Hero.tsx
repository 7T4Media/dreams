import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useTranslation } from '../contexts/LanguageContext';
import { Ionicons } from '@expo/vector-icons';

export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const text = textElement.textContent || '';
    textElement.innerHTML = '';
    
    // Split text into individual characters
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${i * 0.1}s`;
      span.className = 'inline-block animate-fadeIn opacity-0';
      textElement.appendChild(span);
    });

    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <View id="hero" >
      <View >
        <Text 
          ref={textRef}
          
        >
          {t('hero.title', '1DreamUnited')}
        </Text>
        
        <Text >
          {t('hero.subtitle', 'AI-Powered Global Music Ecosystem for Cultural Unity')}
        </Text>
        
        <Text >
          {t('hero.description', 'Connecting musicians across continents, preserving cultural heritage, and creating new opportunities through cutting-edge AI technology and sustainable global infrastructure.')}
        </Text>
        
        {/* Global Music Event Button */}
        <View >
          <TouchableOpacity 
            href="https://1nyt.7t4.fun/" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            <View ></View>
            <Text >
              <Ionicons name="musical-notes" size={24} color="#8B5CF6" />
              🌍 Global Music Event - 1NYT
              <ExternalLink size={20}  />
            </Text>
          </TouchableOpacity>
          <View >
            ✨ Join the worldwide celebration of music and unity
          </View>
        </View>
        
        <View >
          <TouchableOpacity >
            <Text >{t('hero.explore_button', 'Explore the Ecosystem')}</Text>
            <Text ></Text>
          </TouchableOpacity>
          
          <TouchableOpacity >
            {t('hero.join_button', 'Join MusicianVerse')}
          </TouchableOpacity>
        </View>
        
        <View >
          <View >
            <View ></View>
          </View>
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