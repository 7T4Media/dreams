import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const hospitalitySponsors = [
  {
    name: 'Hilton Hotels & Resorts',
    logo: '🏨',
    category: 'Hospitality',
    description: 'Exclusive accommodation partner providing premium stays for touring artists and festival attendees',
    benefits: ['Artist rate discounts', 'VIP concierge services', 'Studio suite upgrades', 'Global network access'],
    partnership: 'Platinum Partner',
    locations: '6,800+ properties worldwide',
    icon: <Building size={24}  />,
  },
  {
    name: 'Marriott International',
    logo: '🏛️',
    category: 'Hospitality',
    description: 'Luxury hospitality solutions for music industry professionals and event accommodations',
    benefits: ['Bonvoy elite status', 'Event space discounts', 'Artist hospitality suites', 'Global booking priority'],
    partnership: 'Gold Partner',
    locations: '8,000+ properties globally',
    icon: <Building size={24}  />,
  },
  {
    name: 'Four Seasons Hotels',
    logo: '🌟',
    category: 'Luxury Hospitality',
    description: 'Ultra-premium accommodations for A-list artists and exclusive music industry events',
    benefits: ['Presidential suite access', 'Private dining', 'Spa & wellness services', 'Personal concierge'],
    partnership: 'Exclusive Partner',
    locations: '120+ luxury properties',
    icon: <Ionicons name="star" size={24} color="#8B5CF6" />,
  },
];

const musicIndustrySponsors = [
  {
    name: 'Yamaha Music',
    logo: '🎹',
    category: 'Instruments',
    description: 'World-leading musical instrument manufacturer providing professional-grade equipment',
    benefits: ['Artist endorsement programs', 'Equipment loans', 'Studio partnerships', 'Educational workshops'],
    partnership: 'Platinum Partner',
    specialties: 'Pianos, Guitars, Drums, Audio Equipment',
    icon: <Piano size={24}  />,
  },
  {
    name: 'Bose Professional',
    logo: '🔊',
    category: 'Audio Technology',
    description: 'Premium audio solutions for live performances, studios, and streaming platforms',
    benefits: ['Pro audio discounts', 'Technical support', 'Custom installations', 'Product testing access'],
    partnership: 'Technology Partner',
    specialties: 'Speakers, Headphones, Audio Systems',
    icon: <Headphones size={24}  />,
  },
  {
    name: 'Shure Incorporated',
    logo: '🎤',
    category: 'Audio Equipment',
    description: 'Industry-standard microphones and wireless systems for professional recording and live sound',
    benefits: ['Artist microphone programs', 'Technical training', 'Live sound support', 'Studio partnerships'],
    partnership: 'Audio Partner',
    specialties: 'Microphones, Wireless Systems, Monitoring',
    icon: <Ionicons name="mic" size={24} color="#8B5CF6" />,
  },
  {
    name: 'Fender Musical Instruments',
    logo: '🎸',
    category: 'Instruments',
    description: 'Iconic guitar and amplifier manufacturer supporting artists across all genres',
    benefits: ['Custom shop access', 'Artist signature models', 'Amplifier partnerships', 'Music education support'],
    partnership: 'Heritage Partner',
    specialties: 'Guitars, Basses, Amplifiers, Effects',
    icon: <Guitar size={24}  />,
  },
  {
    name: 'Native Instruments',
    logo: '💻',
    category: 'Music Software',
    description: 'Leading music production software and hardware for modern music creation',
    benefits: ['Software licenses', 'Hardware partnerships', 'Producer collaborations', 'Educational content'],
    partnership: 'Innovation Partner',
    specialties: 'DAW Software, Controllers, Sample Libraries',
    icon: <Ionicons name="musical-notes" size={24} color="#8B5CF6" />,
  },
  {
    name: 'Roland Corporation',
    logo: '🥁',
    category: 'Electronic Instruments',
    description: 'Pioneer in electronic musical instruments and digital recording equipment',
    benefits: ['Electronic instrument access', 'Technology partnerships', 'Artist collaborations', 'Innovation labs'],
    partnership: 'Technology Partner',
    specialties: 'Synthesizers, Drum Machines, Digital Pianos',
    icon: <Ionicons name="musical-notes" size={24} color="#8B5CF6" />,
  },
];

const partnershipBenefits = [
  {
    icon: <Award size={28}  />,
    title: 'Exclusive Access',
    description: 'Priority access to new products, services, and exclusive artist programs',
  },
  {
    icon: <Ionicons name="people" size={28} color="#8B5CF6" />,
    title: 'Industry Networking',
    description: 'Connect with industry professionals and fellow artists through partner events',
  },
  {
    icon: <Ionicons name="map" Pin size={28}   />,
    title: 'Global Support',
    description: 'Worldwide support network for touring artists and international collaborations',
  },
  {
    icon: <Ionicons name="star" size={28} color="#8B5CF6" />,
    title: 'Career Development',
    description: 'Mentorship programs and career advancement opportunities through partner networks',
  },
];

export const Sponsors: React.FC = () => {
  return (
    <View id="sponsors" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Global Partners & Sponsors"
            subtitle="Industry-leading partnerships providing exclusive benefits and opportunities for our music community"
          />
        </ScrollAnimator>

        {/* Hospitality Partners */}
        <ScrollAnimator>
          <View >
            <Text >
              Hospitality Partners
            </Text>
            <Text >
              Premium accommodation and hospitality services for touring artists, festival attendees, and music industry professionals
            </Text>
            
            <View >
              {hospitalitySponsors.map((sponsor, index) => (
                <ScrollAnimator key={sponsor.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >
                      <View >{sponsor.logo}</View>
                      <View >
                        {sponsor.icon}
                        <Text >
                          {sponsor.partnership}
                        </Text>
                      </View>
                    </View>
                    
                    <Text >{sponsor.name}</Text>
                    <View >{sponsor.category}</View>
                    <Text >{sponsor.description}</Text>
                    
                    <View >
                      <View >Key Benefits:</View>
                      <View >
                        {sponsor.benefits.map((benefit, idx) => (
                          <View key={idx} >
                            <View ></View>
                            <Text>{benefit}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    
                    <View >
                      <Ionicons name="map" Pin size={12}   />
                      <Text>{sponsor.locations}</Text>
                    </View>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Music Industry Partners */}
        <ScrollAnimator>
          <View >
            <Text >
              Music Industry Titans
            </Text>
            <Text >
              World-renowned music equipment manufacturers and technology companies supporting artist development and innovation
            </Text>
            
            <View >
              {musicIndustrySponsors.map((sponsor, index) => (
                <ScrollAnimator key={sponsor.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >
                      <View >{sponsor.logo}</View>
                      <View >
                        {sponsor.icon}
                        <Text >
                          {sponsor.partnership}
                        </Text>
                      </View>
                    </View>
                    
                    <Text >{sponsor.name}</Text>
                    <View >{sponsor.category}</View>
                    <Text >{sponsor.description}</Text>
                    
                    <View >
                      <View >Partnership Benefits:</View>
                      <View >
                        {sponsor.benefits.map((benefit, idx) => (
                          <View key={idx} >
                            <View ></View>
                            <Text>{benefit}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    
                    <View >
                      <Text >Specialties:</Text> {sponsor.specialties}
                    </View>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Partnership Benefits */}
        <ScrollAnimator>
          <View >
            <Text >Partnership Benefits</Text>
            <View >
              {partnershipBenefits.map((benefit, index) => (
                <ScrollAnimator key={benefit.title} delay={index * 100} animation="fade-up">
                  <View >
                    <View >
                      {benefit.icon}
                    </View>
                    <Text >{benefit.title}</Text>
                    <Text >{benefit.description}</Text>
                  </View>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <View >
            <Text >Join Our Partner Network</Text>
            <Text >
              Access exclusive benefits, industry connections, and professional opportunities through our global network of premium partners.
            </Text>
            
            <View >
              <View >
                <View >
                  50+
                </View>
                <View >Global Partners</View>
              </View>
              <View >
                <View >
                  $2M+
                </View>
                <View >Annual Benefits Value</View>
              </View>
              <View >
                <View >
                  180+
                </View>
                <View >Countries Covered</View>
              </View>
            </View>
            
            <View >
              <TouchableOpacity >
                Explore Partner Benefits
              </TouchableOpacity>
              <TouchableOpacity >
                Become a Partner
              </TouchableOpacity>
            </View>
          </View>
        </ScrollAnimator>
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