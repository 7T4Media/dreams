import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../contexts/LanguageContext';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const mainNavItems = [
    { label: '1NYT Event', id: 'globalmusicEvent' },
    { label: t('nav.ai_ecosystem', 'AI Ecosystem'), id: 'aiecosystem' },
    { label: t('nav.infrastructure', 'Infrastructure'), id: 'infrastructure' },
    { label: t('nav.impact', 'Impact'), id: 'impact' },
    { label: t('nav.coming_soon', 'Coming Soon'), id: 'comingsoon' },
  ];

  const platformItems = [
    { label: t('nav.musicianverse', 'MusicianVerse'), id: 'musicianverse' },
    { label: t('nav.band_finder', 'Band Finder'), id: 'bandmemberfinder' },
    { label: t('nav.collaboration', 'Collaboration'), id: 'videocollaboration' },
    { label: t('nav.copyright', 'Copyright'), id: 'copyrightprotection' },
    { label: t('nav.venues', 'Venues'), id: 'musicvenues' },
    { label: t('nav.sponsors', 'Sponsors'), id: 'sponsors' },
    { label: t('nav.education_business', 'Education & Business'), id: 'educationbusiness' },
    { label: t('nav.dreamtv', 'DreaMTV'), id: 'dreamtv' },
  ];

  return (
    <View
      style={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-lg py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <View >
        <View >
          <Ionicons name="musical-notes" 2 size={32}   />
          <Text >
            1DreamUnited
          </Text>
        </View>

        {/* Desktop Navigation */}
        <View >
          {mainNavItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => scrollToSection(item.id)}
              style={`relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full text-sm ${
                item.label === '1NYT Event' ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </TouchableOpacity>
          ))}
          
          {/* Platform Dropdown */}
          <View >
            <TouchableOpacity
              onPress={toggleDropdown}
              
            >
              {t('nav.platform', 'Platform')}
              <Ionicons name="chevron-down"  
                size={16} 
                style={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
               />
            </TouchableOpacity>
            
            {isDropdownOpen && (
              <View >
                {platformItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => scrollToSection(item.id)}
                    
                  >
                    {item.label}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Language Selector and Mobile Menu */}
        <View >
          <LanguageSelector />
          
          {/* Mobile Menu Button */}
          <TouchableOpacity  onPress={toggleMenu}>
            {isMenuOpen ? <Ionicons name="close"  size={24}  /> : <Ionicons name="menu"  size={24}  />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Mobile Menu */}
      <View
        style={`lg:hidden absolute w-full bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <View >
          {/* Main nav items for mobile */}
          {mainNavItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => scrollToSection(item.id)}
              style={`py-3 text-left text-gray-300 hover:text-white border-b border-gray-800 ${
                item.label === '1NYT Event' ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </TouchableOpacity>
          ))}
          
          {/* Platform section header */}
          <View >
            {t('nav.platform', 'Platform')} Features
          </View>
          
          {/* Platform items for mobile */}
          {platformItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => scrollToSection(item.id)}
              
            >
              {item.label}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <View 
           
          onPress={() => setIsDropdownOpen(false)}
        />
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