import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Music, Globe, Trophy, Users, Star, Calendar, ExternalLink, Mic, Languages, Award, Building, Heart, Zap } from 'lucide-react';

const eventHighlights = [
  {
    icon: <Trophy size={32} className="text-yellow-400" />,
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
    icon: <Languages size={32} className="text-purple-400" />,
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
    icon: <Music size={32} className="text-teal-400" />,
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
    icon: <Globe size={32} className="text-green-400" />,
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
    icon: <Globe size={24} className="text-teal-400" />,
    value: '195+',
    label: 'Countries Participating',
    description: 'Global reach and representation',
  },
  {
    icon: <Users size={24} className="text-purple-400" />,
    value: '50K+',
    label: 'Artists Expected',
    description: 'Musicians from every continent',
  },
  {
    icon: <Languages size={24} className="text-blue-400" />,
    value: '100+',
    label: 'Languages Featured',
    description: 'Linguistic diversity celebration',
  },
  {
    icon: <Trophy size={24} className="text-yellow-400" />,
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
    icon: <Award size={28} className="text-gray-300" />,
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
    icon: <Star size={28} className="text-yellow-400" />,
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
    icon: <Building size={28} className="text-gray-400" />,
  },
];

export const GlobalMusicEvent: React.FC = () => {
  return (
    <section id="globalmusicEvent" className="py-20 px-4 bg-gradient-to-b from-black/30 to-purple-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Music size={32} className="text-yellow-400 mr-3" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                1NYT Global Music Event
              </h2>
              <Globe size={32} className="text-teal-400 ml-3" />
            </div>
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-8">
              The world's largest celebration of musical unity, featuring the groundbreaking Global Cover Song Contest 
              where one song becomes a symphony of cultural diversity across every participating nation.
            </p>
            
            <a 
              href="https://1nyt.7t4.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group"
            >
              <span className="relative z-10 flex items-center">
                <Zap size={24} className="mr-3" />
                Experience 1NYT Live
                <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </ScrollAnimator>

        {/* Event Statistics */}
        <ScrollAnimator>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {eventStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <h3 className="text-white font-semibold mb-1">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimator>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {eventHighlights.map((highlight, index) => (
            <ScrollAnimator key={highlight.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="relative group">
                {/* Special highlight for cover song contest */}
                {highlight.highlight && (
                  <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold z-20">
                    🏆 MAIN EVENT
                  </div>
                )}
                
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${highlight.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></div>
                
                <GlassMorphCard className={`relative h-full border-2 ${highlight.highlight ? 'border-yellow-400/30' : 'border-white/10'} group-hover:border-white/20 transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{highlight.emoji}</div>
                    <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm">
                      {highlight.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Star size={16} className="text-yellow-400 mr-2" />
                      Key Features:
                    </h4>
                    <div className="space-y-2">
                      {highlight.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${highlight.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    {highlight.highlight ? 'Enter Contest' : 'Learn More'}
                  </button>
                </GlassMorphCard>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Corporate Sponsorship Section */}
        <ScrollAnimator animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-blue-900/30 to-teal-900/40 p-12 border border-white/20 text-center mb-20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-teal-500 animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Building size={48} className="text-blue-400 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Corporate Sponsorship Opportunities
                </h3>
              </div>
              
              <p className="text-gray-300 mb-10 max-w-4xl mx-auto text-lg">
                Join the world's most impactful music event as a corporate sponsor. Connect your brand with global unity, 
                cultural celebration, and the power of music to bring humanity together. Reach millions of engaged 
                audiences across 195+ countries through this unprecedented cultural phenomenon.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {sponsorshipTiers.map((tier, index) => (
                  <div key={tier.tier} className="relative group">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tier.bgColor} blur-md transition-all duration-300 group-hover:blur-lg group-hover:scale-105`}></div>
                    
                    <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-center mb-4">
                        {tier.icon}
                      </div>
                      
                      <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                        {tier.tier}
                      </h4>
                      
                      <div className="text-2xl font-bold text-white mb-4">{tier.investment}</div>
                      
                      <div className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-black/30 to-purple-900/20 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">Why Sponsor 1NYT?</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-2">Global Reach</div>
                    <div className="text-gray-400 text-sm">195+ countries, millions of viewers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">Cultural Impact</div>
                    <div className="text-gray-400 text-sm">Meaningful brand association</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-400 mb-2">Innovation</div>
                    <div className="text-gray-400 text-sm">Cutting-edge technology showcase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">Unity</div>
                    <div className="text-gray-400 text-sm">Positive global message</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group">
                  <span className="relative z-10 flex items-center justify-center">
                    <Building size={20} className="mr-2" />
                    Become a Sponsor
                    <Heart size={20} className="ml-2" />
                  </span>
                </button>
                
                <button className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  Download Sponsorship Package
                </button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                🌍 Join us in creating the most unifying musical event in human history
              </div>
            </div>
          </div>
        </ScrollAnimator>

        {/* Call to Action for Cover Song Contest */}
        <ScrollAnimator animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-900/40 via-orange-900/30 to-red-900/40 p-12 border-2 border-yellow-400/30 text-center">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 to-red-500 animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Trophy size={48} className="text-yellow-400 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Global Cover Song Contest
                </h3>
                <Mic size={48} className="text-orange-400 ml-4" />
              </div>
              
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Be part of music history! One song, published under Cold Trigger Publishing, 
                translated into every participating language using our revolutionary AI platform. 
                Show the world how your culture interprets universal musical expression.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    One Song
                  </div>
                  <div className="text-gray-400">Universal musical foundation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    195+ Versions
                  </div>
                  <div className="text-gray-400">Cultural interpretations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Infinite Unity
                  </div>
                  <div className="text-gray-400">Global celebration</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://1nyt.7t4.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 group"
                >
                  <span className="relative z-10 flex items-center">
                    <Trophy size={20} className="mr-2" />
                    Enter Contest Now
                    <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <button className="px-10 py-4 rounded-full border-2 border-yellow-400/50 text-white font-bold text-lg transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 backdrop-blur-sm">
                  Contest Rules & Guidelines
                </button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                🏆 Winner performs at the main 1NYT event and receives global recognition
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};