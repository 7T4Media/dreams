import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const datacenters = [
  {
    flag: '🇺🇸',
    location: 'Denver, USA',
    servers: '1,250+ servers',
    storage: '8.5 PB storage',
    power: 'Solar & Wind',
    jobs: '1,200+ jobs',
  },
  {
    flag: '🇸🇪',
    location: 'Stockholm, Sweden',
    servers: '950+ servers',
    storage: '6.2 PB storage',
    power: 'Hydroelectric',
    jobs: '850+ jobs',
  },
  {
    flag: '🇸🇬',
    location: 'Singapore',
    servers: '1,100+ servers',
    storage: '7.8 PB storage',
    power: 'Solar',
    jobs: '980+ jobs',
  },
  {
    flag: '🇿🇦',
    location: 'Cape Town, South Africa',
    servers: '750+ servers',
    storage: '5.1 PB storage',
    power: 'Wind & Solar',
    jobs: '620+ jobs',
  },
  {
    flag: '🇧🇷',
    location: 'São Paulo, Brazil',
    servers: '820+ servers',
    storage: '5.9 PB storage',
    power: 'Hydroelectric',
    jobs: '710+ jobs',
  },
  {
    flag: '🇦🇪',
    location: 'Dubai, UAE',
    servers: '680+ servers',
    storage: '4.7 PB storage',
    power: 'Solar',
    jobs: '580+ jobs',
  },
];

export const GlobalInfrastructure: React.FC = () => {
  return (
    <View id="infrastructure" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Global Infrastructure"
            subtitle="Our worldwide network of sustainable data centers powers the 1DreamUnited ecosystem"
          />
        </ScrollAnimator>

        <View >
          {datacenters.map((datacenter, index) => (
            <ScrollAnimator key={datacenter.location} delay={index * 100} animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <GlassMorphCard >
                <View ></View>
                
                <View >
                  <View>
                    <View >{datacenter.flag}</View>
                    <Text >{datacenter.location}</Text>
                  </View>
                </View>
                
                <View >
                  <View >
                    <Server size={16}  />
                    <Text>{datacenter.servers}</Text>
                  </View>
                  <View >
                    <Database size={16}  />
                    <Text>{datacenter.storage}</Text>
                  </View>
                  <View >
                    <Zap size={16}  />
                    <Text>{datacenter.power}</Text>
                  </View>
                  <View >
                    <Ionicons name="people" size={16} color="#8B5CF6" />
                    <Text>{datacenter.jobs}</Text>
                  </View>
                </View>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
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