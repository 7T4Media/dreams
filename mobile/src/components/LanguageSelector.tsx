import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useLanguage, supportedLanguages } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, translate, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = async (language: typeof supportedLanguages[0]) => {
    await setLanguage(language);
    setIsOpen(false);
  };

  return (
    <View  ref={dropdownRef}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        
        disabled={isLoading}
      >
        <Ionicons name="globe" size={16} color="#8B5CF6" />
        <Text >{currentLanguage.flag}</Text>
        <Text >{currentLanguage.nativeName}</Text>
        <Ionicons name="chevron-down"  
          size={14} 
          style={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
         />
      </TouchableOpacity>

      {isOpen && (
        <View >
          <View >
            {translate('language.select', 'Select Language')}
          </View>
          
          {supportedLanguages.map((language) => (
            <TouchableOpacity
              key={language.code}
              onPress={() => handleLanguageSelect(language)}
              style={`w-full flex items-center justify-between px-3 py-2 hover:bg-white/10 transition-colors duration-200 ${
                currentLanguage.code === language.code ? 'bg-white/5' : ''
              }`}
            >
              <View >
                <Text >{language.flag}</Text>
                <View >
                  <View >{language.nativeName}</View>
                  <View >{language.name}</View>
                </View>
              </View>
              
              {currentLanguage.code === language.code && (
                <Ionicons name="checkmark" size={16} color="#8B5CF6" />
              )}
            </TouchableOpacity>
          ))}
          
          <View >
            <View >
              Powered by AI Translation
            </View>
          </View>
        </View>
      )}

      {isLoading && (
        <View >
          Loading translation...
        </View>
      )}
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