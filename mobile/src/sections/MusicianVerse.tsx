import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const features = [
  {
    icon: <Ionicons name="checkmark" Circle size={24}   />,
    emoji: '🎯',
    title: 'Verification System',
    description: 'Portfolio review and skill verification to ensure authentic talent and prevent fraud',
  },
  {
    icon: <Trophy size={24}  />,
    emoji: '🏆',
    title: 'Competitive Tiers',
    description: '5-tier progression system that rewards growth and provides appropriate challenges',
  },
  {
    icon: <Ionicons name="musical-notes" size={24} color="#8B5CF6" />,
    emoji: '🎵',
    title: 'Genre Diversity',
    description: 'Support for all music genres across cultures, from traditional to contemporary fusion',
  },
  {
    icon: <Ionicons name="people" size={24} color="#8B5CF6" />,
    emoji: '🤝',
    title: 'Peer Voting',
    description: 'Weighted voting system where higher-tier artists have more influence on outcomes',
  },
];

const tiers = [
  {
    number: '1',
    name: 'Emerging Artists',
    experience: '0-2 years',
    color: 'from-blue-400 to-teal-400',
    bgColor: 'from-blue-900/20 to-teal-900/20',
  },
  {
    number: '2',
    name: 'Rising Stars',
    experience: '2-5 years, local/regional',
    color: 'from-teal-400 to-green-400',
    bgColor: 'from-teal-900/20 to-green-900/20',
  },
  {
    number: '3',
    name: 'Professionals',
    experience: '5+ years, touring',
    color: 'from-green-400 to-yellow-400',
    bgColor: 'from-green-900/20 to-yellow-900/20',
  },
  {
    number: '4',
    name: 'Industry Veterans',
    experience: 'Signed artists',
    color: 'from-yellow-400 to-orange-400',
    bgColor: 'from-yellow-900/20 to-orange-900/20',
  },
  {
    number: '5',
    name: 'Masters',
    experience: 'Grammy level',
    color: 'from-orange-400 to-red-400',
    bgColor: 'from-orange-900/20 to-red-900/20',
  },
];

export const MusicianVerse: React.FC = () => {
  return (
    <View id="musicianverse\" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="MusicianVerse Competition Platform"
            subtitle="A tier-based global competition ecosystem that elevates talent and connects artists worldwide"
          />
        </ScrollAnimator>

        <ScrollAnimator animation="fade-up">
          <View >
            {features.map((feature, index) => (
              <GlassMorphCard key={feature.title} >
                <View >{feature.emoji}</View>
                <View >
                  {feature.icon}
                  <Text >{feature.title}</Text>
                </View>
                <Text >{feature.description}</Text>
              </GlassMorphCard>
            ))}
          </View>
        </ScrollAnimator>

        <View >
          <Text >Progression Tiers</Text>
          
          <View >
            {tiers.map((tier, index) => (
              <ScrollAnimator key={tier.name} delay={index * 150}>
                <View >
                  <View style={`absolute inset-0 rounded-xl bg-gradient-to-br ${tier.bgColor} blur-md transition-all duration-300 group-hover:blur-lg group-hover:scale-105`}></View>
                  <View >
                    <View style={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-3`}>
                      {tier.number}
                    </View>
                    <Text >{tier.name}</Text>
                    <Text >{tier.experience}</Text>
                  </View>
                </View>
              </ScrollAnimator>
            ))}
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