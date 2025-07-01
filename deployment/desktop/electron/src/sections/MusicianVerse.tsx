import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { CheckCircle, Trophy, Music, Users } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle size={24} className="text-teal-400" />,
    emoji: '🎯',
    title: 'Verification System',
    description: 'Portfolio review and skill verification to ensure authentic talent and prevent fraud',
  },
  {
    icon: <Trophy size={24} className="text-purple-400" />,
    emoji: '🏆',
    title: 'Competitive Tiers',
    description: '5-tier progression system that rewards growth and provides appropriate challenges',
  },
  {
    icon: <Music size={24} className="text-blue-400" />,
    emoji: '🎵',
    title: 'Genre Diversity',
    description: 'Support for all music genres across cultures, from traditional to contemporary fusion',
  },
  {
    icon: <Users size={24} className="text-pink-400" />,
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
    <section id="musicianverse\" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="MusicianVerse Competition Platform"
            subtitle="A tier-based global competition ecosystem that elevates talent and connects artists worldwide"
          />
        </ScrollAnimator>

        <ScrollAnimator animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <GlassMorphCard key={feature.title} className="h-full">
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-2 text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </GlassMorphCard>
            ))}
          </div>
        </ScrollAnimator>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Progression Tiers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {tiers.map((tier, index) => (
              <ScrollAnimator key={tier.name} delay={index * 150}>
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tier.bgColor} blur-md transition-all duration-300 group-hover:blur-lg group-hover:scale-105`}></div>
                  <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-3`}>
                      {tier.number}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{tier.name}</h4>
                    <p className="text-sm text-gray-400">{tier.experience}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};