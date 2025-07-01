import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const comingSoonFeatures = [
  {
    icon: <Coins size={32}  />,
    emoji: '🪙',
    title: 'Decentralized Universal Royalty',
    description: 'Revolutionary blockchain-based royalty distribution system ensuring instant, transparent payments to all rights holders worldwide',
    features: [
      'Instant global royalty distribution',
      'Blockchain transparency & security',
      'Smart contract automation',
      'Multi-currency support',
      'Zero intermediary fees'
    ],
    timeline: 'Q2 2025',
    impact: 'Eliminate payment delays forever',
    color: 'from-yellow-400 to-orange-400',
    bgGradient: 'from-yellow-900/20 to-orange-900/10',
  },
  {
    icon: <Ionicons name="brain" size={32} color="#8B5CF6" />,
    emoji: '🧠',
    title: 'Lyrics to Marketing using A.I.',
    description: 'Advanced AI analyzes your lyrics to generate targeted marketing campaigns, social media content, and promotional strategies',
    features: [
      'Automated marketing campaign generation',
      'Social media content creation',
      'Target audience identification',
      'Brand messaging optimization',
      'Multi-platform promotion'
    ],
    timeline: 'Q3 2025',
    impact: 'Transform lyrics into marketing gold',
    color: 'from-purple-400 to-pink-400',
    bgGradient: 'from-purple-900/20 to-pink-900/10',
  },
  {
    icon: <DollarSign size={32}  />,
    emoji: '💰',
    title: '100% Royalty Retention',
    description: 'Keep every penny you earn with our zero-commission model. Artists retain full ownership and 100% of their royalties',
    features: [
      'Zero platform commission',
      'Full ownership retention',
      'Direct fan-to-artist payments',
      'Transparent revenue tracking',
      'No hidden fees ever'
    ],
    timeline: 'Q1 2025',
    impact: 'Maximum earnings for artists',
    color: 'from-green-400 to-teal-400',
    bgGradient: 'from-green-900/20 to-teal-900/10',
  },
  {
    icon: <Ionicons name="cloud-upload" size={32} color="#8B5CF6" />,
    emoji: '🚀',
    title: 'Free Music Distribution Platform',
    description: 'Distribute your music to all major streaming platforms worldwide at zero cost with advanced analytics and promotion tools',
    features: [
      'Free distribution to 150+ platforms',
      'Advanced analytics dashboard',
      'Automated playlist pitching',
      'Release scheduling tools',
      'Global reach optimization'
    ],
    timeline: 'Q4 2024',
    impact: 'Democratize music distribution',
    color: 'from-blue-400 to-cyan-400',
    bgGradient: 'from-blue-900/20 to-cyan-900/10',
  },
  {
    icon: <Scale size={32}  />,
    emoji: '⚖️',
    title: 'Business License, Trademark & IP Tool',
    description: 'Comprehensive legal toolkit for music business formation, trademark registration, and intellectual property protection',
    features: [
      'Automated business formation',
      'Global trademark registration',
      'IP portfolio management',
      'Legal document generation',
      'Compliance monitoring'
    ],
    timeline: 'Q3 2025',
    impact: 'Complete legal protection suite',
    color: 'from-red-400 to-pink-400',
    bgGradient: 'from-red-900/20 to-pink-900/10',
  },
];

const roadmapStats = [
  {
    icon: <Zap size={24}  />,
    value: '5',
    label: 'Revolutionary Features',
    description: 'Game-changing tools launching soon',
  },
  {
    icon: <Ionicons name="calendar" size={24} color="#8B5CF6" />,
    value: '18',
    label: 'Months Development',
    description: 'Intensive R&D and testing',
  },
  {
    icon: <Ionicons name="star" size={24} color="#8B5CF6" />,
    value: '100K+',
    label: 'Beta Testers',
    description: 'Artists helping shape the future',
  },
  {
    icon: <DollarSign size={24}  />,
    value: '$50M',
    label: 'Projected Savings',
    description: 'Annual savings for artists',
  },
];

export const ComingSoon: React.FC = () => {
  return (
    <View id="comingsoon" >
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
              <Sparkles size={32}  />
              <Text >
                Coming Soon!
              </Text>
              <Sparkles size={32}  />
            </View>
            <Text >
              Revolutionary features that will transform the music industry forever. 
              Get ready for the future of music creation, distribution, and monetization.
            </Text>
          </View>
        </ScrollAnimator>

        {/* Roadmap Stats */}
        <ScrollAnimator>
          <View >
            {roadmapStats.map((stat, index) => (
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

        {/* Coming Soon Features */}
        <View >
          {comingSoonFeatures.map((feature, index) => (
            <ScrollAnimator key={feature.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <View >
                {/* Animated background */}
                <View style={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></View>
                
                <GlassMorphCard >
                  {/* Timeline badge */}
                  <View >
                    {feature.timeline}
                  </View>
                  
                  <View >
                    <View >{feature.emoji}</View>
                    <View >
                      {feature.icon}
                    </View>
                  </View>
                  
                  <Text style={`text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </Text>
                  
                  <Text >
                    {feature.description}
                  </Text>
                  
                  <View >
                    <Text >
                      <Ionicons name="star" size={16} color="#8B5CF6" />
                      Key Features:
                    </Text>
                    <View >
                      {feature.features.map((featureItem, idx) => (
                        <View key={idx} >
                          <Ionicons name="arrow-forward" size={14} color="#8B5CF6" />
                          <Text>{featureItem}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  
                  <View style={`p-4 rounded-lg bg-gradient-to-r ${feature.bgGradient} border border-white/10`}>
                    <View >
                      <Zap size={16}  />
                      <Text >Impact: </Text>
                      <Text >{feature.impact}</Text>
                    </View>
                  </View>
                  
                  <View >
                    <TouchableOpacity style={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                      Get Early Access
                    </TouchableOpacity>
                  </View>
                </GlassMorphCard>
              </View>
            </ScrollAnimator>
          ))}
        </View>

        {/* Beta Program CTA */}
        <ScrollAnimator animation="fade-up">
          <View >
            {/* Animated background pattern */}
            <View >
              <View ></View>
            </View>
            
            <View >
              <View >
                <View >
                  <Sparkles size={32}  />
                </View>
                <Text >
                  Join the Revolution
                </Text>
              </View>
              
              <Text >
                Be among the first to experience these groundbreaking features. Join our exclusive beta program 
                and help shape the future of the music industry.
              </Text>
              
              <View >
                <View >
                  <View >
                    Early Access
                  </View>
                  <View >Be first to try new features</View>
                </View>
                <View >
                  <View >
                    Exclusive Benefits
                  </View>
                  <View >Special pricing & perks</View>
                </View>
                <View >
                  <View >
                    Shape the Future
                  </View>
                  <View >Your feedback matters</View>
                </View>
              </View>
              
              <View >
                <TouchableOpacity >
                  <Text >
                    <Sparkles size={20}  />
                    Join Beta Program
                    <Ionicons name="arrow-forward" size={20} color="#8B5CF6" />
                  </Text>
                  <View ></View>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  Learn More
                </TouchableOpacity>
              </View>
              
              <View >
                🎵 Limited spots available • No commitment required • Cancel anytime
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