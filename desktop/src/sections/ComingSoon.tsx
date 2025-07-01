import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Coins, Brain, DollarSign, Upload, Scale, Zap, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';

const comingSoonFeatures = [
  {
    icon: <Coins size={32} className="text-yellow-400" />,
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
    icon: <Brain size={32} className="text-purple-400" />,
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
    icon: <DollarSign size={32} className="text-green-400" />,
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
    icon: <Upload size={32} className="text-blue-400" />,
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
    icon: <Scale size={32} className="text-red-400" />,
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
    icon: <Zap size={24} className="text-yellow-400" />,
    value: '5',
    label: 'Revolutionary Features',
    description: 'Game-changing tools launching soon',
  },
  {
    icon: <Calendar size={24} className="text-purple-400" />,
    value: '18',
    label: 'Months Development',
    description: 'Intensive R&D and testing',
  },
  {
    icon: <Star size={24} className="text-teal-400" />,
    value: '100K+',
    label: 'Beta Testers',
    description: 'Artists helping shape the future',
  },
  {
    icon: <DollarSign size={24} className="text-green-400" />,
    value: '$50M',
    label: 'Projected Savings',
    description: 'Annual savings for artists',
  },
];

export const ComingSoon: React.FC = () => {
  return (
    <section id="comingsoon" className="py-20 px-4 bg-gradient-to-b from-black/30 to-purple-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles size={32} className="text-yellow-400 mr-3" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Coming Soon!
              </h2>
              <Sparkles size={32} className="text-purple-400 ml-3" />
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Revolutionary features that will transform the music industry forever. 
              Get ready for the future of music creation, distribution, and monetization.
            </p>
          </div>
        </ScrollAnimator>

        {/* Roadmap Stats */}
        <ScrollAnimator>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {roadmapStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <h3 className="text-white font-semibold mb-1">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimator>

        {/* Coming Soon Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {comingSoonFeatures.map((feature, index) => (
            <ScrollAnimator key={feature.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="relative group">
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></div>
                
                <GlassMorphCard className="relative h-full border-2 border-white/10 group-hover:border-white/20 transition-all duration-300">
                  {/* Timeline badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs font-bold">
                    {feature.timeline}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{feature.emoji}</div>
                    <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Star size={16} className="text-yellow-400 mr-2" />
                      Key Features:
                    </h4>
                    <div className="space-y-2">
                      {feature.features.map((featureItem, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight size={14} className="text-teal-400 mr-2 flex-shrink-0" />
                          <span>{featureItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${feature.bgGradient} border border-white/10`}>
                    <div className="flex items-center">
                      <Zap size={16} className="text-yellow-400 mr-2" />
                      <span className="text-white font-semibold text-sm">Impact: </span>
                      <span className="text-gray-300 text-sm">{feature.impact}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                      Get Early Access
                    </button>
                  </div>
                </GlassMorphCard>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Beta Program CTA */}
        <ScrollAnimator animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-teal-900/40 p-12 border border-white/20 text-center">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-teal-500 animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mr-4">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Join the Revolution
                </h3>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Be among the first to experience these groundbreaking features. Join our exclusive beta program 
                and help shape the future of the music industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    Early Access
                  </div>
                  <div className="text-gray-400">Be first to try new features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    Exclusive Benefits
                  </div>
                  <div className="text-gray-400">Special pricing & perks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    Shape the Future
                  </div>
                  <div className="text-gray-400">Your feedback matters</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-teal-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group">
                  <span className="relative z-10 flex items-center justify-center">
                    <Sparkles size={20} className="mr-2" />
                    Join Beta Program
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                🎵 Limited spots available • No commitment required • Cancel anytime
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};