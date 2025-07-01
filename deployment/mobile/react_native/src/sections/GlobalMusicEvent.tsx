import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const eventHighlights = [
  {
    icon: <Trophy size={32}  />,
    emoji: '🏆',
    title: 'Global Cover Song Contest',
    description: 'The centerpiece of 1NYT - a worldwide competition featuring one original song covered by artists from every participating country',
    features: [
      'One song, infinite interpretations',
      'Cultural fusion and creativity',
      'Professional judging panel',
      'Global audience voting',
      'Winner performs at main event'
    ],
    color: 'from-yellow-400 to-orange-400',
    bgGradient: 'from-yellow-900/20 to-orange-900/10',
    highlight: true,
  },
  {
    icon: <Languages size={32}  />,
    emoji: '🌐',
    title: 'AI-Powered Translation',
    description: 'Original song translated into all participating languages using 1DreamUnited\'s advanced AI translation platform',
    features: [
      'Preserve original meaning & emotion',
      'Cultural context adaptation',
      'Rhyme scheme maintenance',
      'Native speaker verification',
      'Real-time lyric display'
    ],
    color: 'from-purple-400 to-pink-400',
    bgGradient: 'from-purple-900/20 to-pink-900/10',
  },
  {
    icon: <Ionicons name="musical-notes" size={32} color="#8B5CF6" />,
    emoji: '🎵',
    title: 'Cold Trigger Publishing',
    description: 'Official song published under Cold Trigger Publishing, ensuring proper rights management and global distribution',
    features: [
      'Professional music publishing',
      'Global rights management',
      'Artist royalty protection',
      'International distribution',
      'Legal compliance worldwide'
    ],
    color: 'from-teal-400 to-blue-400',
    bgGradient: 'from-teal-900/20 to-blue-900/10',
  },
  {
    icon: <Ionicons name="globe" size={32} color="#8B5CF6" />,
    emoji: '🌍',
    title: 'Cultural Unity Celebration',
    description: 'A global celebration showcasing the diversity and unity of human musical expression across all cultures',
    features: [
      'Multi-cultural performances',
      'Traditional instrument fusion',
      'Cross-cultural collaboration',
      'Heritage preservation',
      'Unity through diversity'
    ],
    color: 'from-green-400 to-emerald-400',
    bgGradient: 'from-green-900/20 to-emerald-900/10',
  },
];

const eventStats = [
  {
    icon: <Ionicons name="globe" size={24} color="#8B5CF6" />,
    value: '195+',
    label: 'Countries Participating',
    description: 'Global reach and representation',
  },
  {
    icon: <Ionicons name="people" size={24} color="#8B5CF6" />,
    value: '50K+',
    label: 'Artists Expected',
    description: 'Musicians from every continent',
  },
  {
    icon: <Languages size={24}  />,
    value: '100+',
    label: 'Languages Featured',
    description: 'Linguistic diversity celebration',
  },
  {
    icon: <Trophy size={24}  />,
    value: '$1M+',
    label: 'Prize Pool',
    description: 'Supporting global talent',
  },
];

const sponsorshipTiers = [
  {
    tier: 'Platinum Sponsor',
    investment: '$500K+',
    benefits: [
      'Main stage naming rights',
      'Global broadcast integration',
      'VIP hospitality packages',
      'Year-round partnership',
      'Custom activation spaces',
      'Executive meet & greets'
    ],
    color: 'from-gray-300 to-gray-100',
    bgColor: 'from-gray-800/30 to-gray-700/20',
    icon: <Award size={28}  />,
  },
  {
    tier: 'Gold Sponsor',
    investment: '$250K+',
    benefits: [
      'Stage sponsorship opportunities',
      'Digital platform integration',
      'Hospitality packages',
      'Brand activation zones',
      'Artist meet & greets',
      'Social media features'
    ],
    color: 'from-yellow-400 to-yellow-300',
    bgColor: 'from-yellow-800/30 to-yellow-700/20',
    icon: <Ionicons name="star" size={28} color="#8B5CF6" />,
  },
  {
    tier: 'Silver Sponsor',
    investment: '$100K+',
    benefits: [
      'Event area sponsorship',
      'Digital mentions',
      'Networking opportunities',
      'Brand visibility',
      'Content partnerships',
      'Community engagement'
    ],
    color: 'from-gray-400 to-gray-300',
    bgColor: 'from-gray-700/30 to-gray-600/20',
    icon: <Building size={28}  />,
  },
];

export const GlobalMusicEvent: React.FC = () => {
  return (
    <View id="globalmusicEvent" >
      {/* Animated background elements */}
      <View >
        <View ></View>
        <View  style={{ animationDelay: '1s' }}></View>
        <View  style={{ animationDelay: '2s' }}></View>
      </View>

      <View >
        <ScrollAnimator>
          <View >
            <View >
              <Ionicons name="musical-notes" size={32} color="#8B5CF6" />
              <Text >
                1NYT Global Music Event
              </Text>
              <Ionicons name="globe" size={32} color="#8B5CF6" />
            </View>
            <Text >
              The world's largest celebration of musical unity, featuring the groundbreaking Global Cover Song Contest 
              where one song becomes a symphony of cultural diversity across every participating nation.
            </Text>
            
            <TouchableOpacity 
              href="https://1nyt.7t4.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              
            >
              <Text >
                <Zap size={24}  />
                Experience 1NYT Live
                <ExternalLink size={20}  />
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollAnimator>

        {/* Event Statistics */}
        <ScrollAnimator>
          <View >
            {eventStats.map((stat, index) => (
              <View key={stat.label} >
                <View >
                  {stat.icon}
                </View>
                <View >
                  {stat.value}
                </View>
                <Text >{stat.label}</Text>
                <Text >{stat.description}</Text>
              </View>
            ))}
          </View>
        </ScrollAnimator>

        {/* Event Highlights */}
        <View >
          {eventHighlights.map((highlight, index) => (
            <ScrollAnimator key={highlight.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <View >
                {/* Special highlight for cover song contest */}
                {highlight.highlight && (
                  <View >
                    🏆 MAIN EVENT
                  </View>
                )}
                
                {/* Animated background */}
                <View style={`absolute inset-0 rounded-2xl bg-gradient-to-br ${highlight.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></View>
                
                <GlassMorphCard style={`relative h-full border-2 ${highlight.highlight ? 'border-yellow-400/30' : 'border-white/10'} group-hover:border-white/20 transition-all duration-300`}>
                  <View >
                    <View >{highlight.emoji}</View>
                    <View >
                      {highlight.icon}
                    </View>
                  </View>
                  
                  <Text style={`text-2xl font-bold mb-3 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                    {highlight.title}
                  </Text>
                  
                  <Text >
                    {highlight.description}
                  </Text>
                  
                  <View >
                    <Text >
                      <Ionicons name="star" size={16} color="#8B5CF6" />
                      Key Features:
                    </Text>
                    <View >
                      {highlight.features.map((feature, idx) => (
                        <View key={idx} >
                          <View ></View>
                          <Text>{feature}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  
                  <TouchableOpacity style={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${highlight.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    {highlight.highlight ? 'Enter Contest' : 'Learn More'}
                  </TouchableOpacity>
                </GlassMorphCard>
              </View>
            </ScrollAnimator>
          ))}
        </View>

        {/* Corporate Sponsorship Section */}
        <ScrollAnimator animation="fade-up">
          <View >
            {/* Animated background pattern */}
            <View >
              <View ></View>
            </View>
            
            <View >
              <View >
                <Building size={48}  />
                <Text >
                  Corporate Sponsorship Opportunities
                </Text>
              </View>
              
              <Text >
                Join the world's most impactful music event as a corporate sponsor. Connect your brand with global unity, 
                cultural celebration, and the power of music to bring humanity together. Reach millions of engaged 
                audiences across 195+ countries through this unprecedented cultural phenomenon.
              </Text>
              
              <View >
                {sponsorshipTiers.map((tier, index) => (
                  <View key={tier.tier} >
                    <View style={`absolute inset-0 rounded-xl bg-gradient-to-br ${tier.bgColor} blur-md transition-all duration-300 group-hover:blur-lg group-hover:scale-105`}></View>
                    
                    <View >
                      <View >
                        {tier.icon}
                      </View>
                      
                      <Text style={`text-xl font-bold mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                        {tier.tier}
                      </Text>
                      
                      <View >{tier.investment}</View>
                      
                      <View >
                        {tier.benefits.map((benefit, idx) => (
                          <View key={idx} >
                            <View ></View>
                            <Text>{benefit}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              
              <View >
                <Text >Why Sponsor 1NYT?</Text>
                <View >
                  <View>
                    <View >Global Reach</View>
                    <View >195+ countries, millions of viewers</View>
                  </View>
                  <View>
                    <View >Cultural Impact</View>
                    <View >Meaningful brand association</View>
                  </View>
                  <View>
                    <View >Innovation</View>
                    <View >Cutting-edge technology showcase</View>
                  </View>
                  <View>
                    <View >Unity</View>
                    <View >Positive global message</View>
                  </View>
                </View>
              </View>
              
              <View >
                <TouchableOpacity >
                  <Text >
                    <Building size={20}  />
                    Become a Sponsor
                    <Ionicons name="heart" size={20} color="#8B5CF6" />
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  Download Sponsorship Package
                </TouchableOpacity>
              </View>
              
              <View >
                🌍 Join us in creating the most unifying musical event in human history
              </View>
            </View>
          </View>
        </ScrollAnimator>

        {/* Call to Action for Cover Song Contest */}
        <ScrollAnimator animation="fade-up">
          <View >
            {/* Animated background pattern */}
            <View >
              <View ></View>
            </View>
            
            <View >
              <View >
                <Trophy size={48}  />
                <Text >
                  Global Cover Song Contest
                </Text>
                <Ionicons name="mic" size={48} color="#8B5CF6" />
              </View>
              
              <Text >
                Be part of music history! One song, published under Cold Trigger Publishing, 
                translated into every participating language using our revolutionary AI platform. 
                Show the world how your culture interprets universal musical expression.
              </Text>
              
              <View >
                <View >
                  <View >
                    One Song
                  </View>
                  <View >Universal musical foundation</View>
                </View>
                <View >
                  <View >
                    195+ Versions
                  </View>
                  <View >Cultural interpretations</View>
                </View>
                <View >
                  <View >
                    Infinite Unity
                  </View>
                  <View >Global celebration</View>
                </View>
              </View>
              
              <View >
                <TouchableOpacity 
                  href="https://1nyt.7t4.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  
                >
                  <Text >
                    <Trophy size={20}  />
                    Enter Contest Now
                    <ExternalLink size={20}  />
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  Contest Rules & Guidelines
                </TouchableOpacity>
              </View>
              
              <View >
                🏆 Winner performs at the main 1NYT event and receives global recognition
              </View>
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