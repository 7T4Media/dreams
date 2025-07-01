import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const aiTools = [
  {
    icon: <FileText size={28}  />,
    emoji: '🎼',
    title: 'AI Sheet Music Generator',
    description: 'Convert audio recordings to professional sheet music with 99.2% accuracy using advanced AI transcription',
    features: ['Multi-instrument detection', 'Chord progression analysis', 'Tempo & key signature detection', 'Export to MusicXML/PDF']
  },
  {
    icon: <Ionicons name="mic" size={28} color="#8B5CF6" />,
    emoji: '🎤',
    title: 'Karaoke Track Creator',
    description: 'Generate high-quality karaoke versions with vocal isolation and synchronized lyrics display',
    features: ['AI vocal removal', 'Lyric synchronization', 'Multiple format export', 'Pitch adjustment tools']
  },
  {
    icon: <Bot size={28}  />,
    emoji: '🤖',
    title: 'Copyright Assistant',
    description: 'AI-powered legal assistant for copyright registration, trademark searches, and rights management',
    features: ['Automated filing', 'Prior art search', 'Rights verification', 'Legal document generation']
  },
  {
    icon: <Ionicons name="shield" size={28} color="#8B5CF6" />,
    emoji: '🛡️',
    title: 'Plagiarism Detection',
    description: 'Advanced AI analysis to detect similarities and ensure originality before publication',
    features: ['Melody comparison', 'Harmonic analysis', 'Rhythm pattern matching', 'Global database search']
  },
];

const copyrightOffices = [
  {
    country: 'United States',
    flag: '🇺🇸',
    office: 'U.S. Copyright Office',
    website: 'copyright.gov',
    status: 'Integrated',
    processingTime: '3-6 months',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    office: 'UK Intellectual Property Office',
    website: 'gov.uk/ipo',
    status: 'Integrated',
    processingTime: '2-4 months',
  },
  {
    country: 'European Union',
    flag: '🇪🇺',
    office: 'EUIPO',
    website: 'euipo.europa.eu',
    status: 'Integrated',
    processingTime: '4-8 months',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    office: 'Canadian Intellectual Property Office',
    website: 'ised-isde.canada.ca',
    status: 'Integrated',
    processingTime: '2-5 months',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    office: 'IP Australia',
    website: 'ipaustralia.gov.au',
    status: 'Integrated',
    processingTime: '3-6 months',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    office: 'Japan Patent Office',
    website: 'jpo.go.jp',
    status: 'Integrated',
    processingTime: '6-12 months',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    office: 'DPMA',
    website: 'dpma.de',
    status: 'Integrated',
    processingTime: '4-8 months',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    office: 'INPI',
    website: 'inpi.fr',
    status: 'Integrated',
    processingTime: '3-7 months',
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    office: 'INPI Brazil',
    website: 'gov.br/inpi',
    status: 'Integrated',
    processingTime: '8-18 months',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    office: 'Controller General of Patents',
    website: 'ipindia.gov.in',
    status: 'Integrated',
    processingTime: '12-24 months',
  },
  {
    country: 'China',
    flag: '🇨🇳',
    office: 'CNIPA',
    website: 'cnipa.gov.cn',
    status: 'Integrated',
    processingTime: '6-18 months',
  },
  {
    country: 'South Korea',
    flag: '🇰🇷',
    office: 'KIPO',
    website: 'kipo.go.kr',
    status: 'Integrated',
    processingTime: '4-10 months',
  },
];

export const CopyrightProtection: React.FC = () => {
  return (
    <View id="copyrightprotection" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="AI Copyright Protection Suite"
            subtitle="Comprehensive AI-powered tools for music creation, protection, and global copyright registration"
          />
        </ScrollAnimator>

        {/* AI Tools Section */}
        <View >
          {aiTools.map((tool, index) => (
            <ScrollAnimator key={tool.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard >
                <View >{tool.emoji}</View>
                <View >
                  {tool.icon}
                  <Text >{tool.title}</Text>
                </View>
                <Text >{tool.description}</Text>
                
                <View >
                  {tool.features.map((feature, idx) => (
                    <View key={idx} >
                      <Ionicons name="checkmark" Circle size={14}   />
                      <Text>{feature}</Text>
                    </View>
                  ))}
                </View>
                
                <View >
                  <TouchableOpacity >
                    Try {tool.title}
                  </TouchableOpacity>
                </View>
                
                <View ></View>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </View>

        {/* Copyright Offices Section */}
        <ScrollAnimator>
          <View >
            <Text >
              Global Copyright Office Integration
            </Text>
            <Text >
              Direct integration with major international copyright and intellectual property offices for seamless registration and protection
            </Text>
          </View>
        </ScrollAnimator>

        <View >
          {copyrightOffices.map((office, index) => (
            <ScrollAnimator key={office.country} delay={index * 50} animation="fade-up">
              <View >
                <View >
                  <View >
                    <Text >{office.flag}</Text>
                    <View>
                      <Text >{office.country}</Text>
                      <Text >{office.office}</Text>
                    </View>
                  </View>
                  <View >
                    <Ionicons name="checkmark" Circle size={16}   />
                    <Text >{office.status}</Text>
                  </View>
                </View>
                
                <View >
                  <View >
                    <Text >Processing Time:</Text>
                    <Text >{office.processingTime}</Text>
                  </View>
                  <View >
                    <Text >Website:</Text>
                    <TouchableOpacity 
                      href={`https://${office.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      
                    >
                      <Text >{office.website}</Text>
                      <ExternalLink size={10} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollAnimator>
          ))}
        </View>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <View >
            <Ionicons name="globe" size={48} color="#8B5CF6" />
            <Text >Protect Your Music Globally</Text>
            <Text >
              Our AI-powered copyright protection suite ensures your musical creations are properly documented, 
              protected, and registered across major international jurisdictions.
            </Text>
            
            <View >
              <View >
                <View >
                  150+
                </View>
                <View >Countries Covered</View>
              </View>
              <View >
                <View >
                  99.2%
                </View>
                <View >AI Accuracy Rate</View>
              </View>
              <View >
                <View >
                  24/7
                </View>
                <View >Protection Monitoring</View>
              </View>
            </View>
            
            <View >
              <TouchableOpacity >
                Start Copyright Protection
              </TouchableOpacity>
              <TouchableOpacity >
                Learn More
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