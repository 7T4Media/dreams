import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Globe, BarChart3, Music, Users } from 'lucide-react';

const agents = [
  {
    icon: <Globe size={28} className="text-teal-400" />,
    emoji: '🌍',
    title: 'Cultural Intelligence',
    description:
      'Real-time cultural adaptation AI that understands nuances across 190+ countries and 7,000+ languages to preserve and celebrate musical diversity.',
  },
  {
    icon: <BarChart3 size={28} className="text-purple-400" />,
    emoji: '💼',
    title: 'Business Operations',
    description:
      'Revenue optimization algorithms that maximize artist earnings while creating sustainable economic models for local music ecosystems.',
  },
  {
    icon: <Music size={28} className="text-blue-400" />,
    emoji: '🎵',
    title: 'Artist Development',
    description:
      'Talent discovery and growth system that identifies promising artists and provides personalized development pathways based on cultural context.',
  },
  {
    icon: <Users size={28} className="text-pink-400" />,
    emoji: '👥',
    title: 'Customer Experience',
    description:
      '24/7 multilingual support powered by advanced natural language processing, ensuring seamless user experiences across all platforms.',
  },
];

export const AIEcosystem: React.FC = () => {
  return (
    <section id="aiecosystem\" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="AI Agent Ecosystem"
            subtitle="Our intelligent network of specialized AI agents works in harmony to power the global music revolution"
          />
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <ScrollAnimator key={agent.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard className="h-full">
                <div className="text-4xl mb-4">{agent.emoji}</div>
                <div className="flex items-center mb-4">
                  {agent.icon}
                  <h3 className="text-xl font-semibold ml-2 text-white">{agent.title}</h3>
                </div>
                <p className="text-gray-300">{agent.description}</p>
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-teal-600/5 rounded-full blur-3xl"></div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};