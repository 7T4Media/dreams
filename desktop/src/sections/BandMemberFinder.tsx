import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Users, MapPin, Music, Star, Search, Filter } from 'lucide-react';

const instruments = [
  { name: 'Guitar', icon: '🎸', count: '12,450+' },
  { name: 'Vocals', icon: '🎤', count: '8,920+' },
  { name: 'Drums', icon: '🥁', count: '6,780+' },
  { name: 'Bass', icon: '🎸', count: '5,340+' },
  { name: 'Piano', icon: '🎹', count: '7,650+' },
  { name: 'Violin', icon: '🎻', count: '4,230+' },
];

const features = [
  {
    icon: <Search size={24} className="text-teal-400" />,
    title: 'Smart Matching',
    description: 'AI-powered algorithm matches musicians based on skill level, genre preferences, and location',
  },
  {
    icon: <MapPin size={24} className="text-purple-400" />,
    title: 'Location-Based',
    description: 'Find musicians in your city or connect globally for remote collaboration opportunities',
  },
  {
    icon: <Star size={24} className="text-yellow-400" />,
    title: 'Skill Verification',
    description: 'Verified skill ratings and portfolio reviews ensure authentic connections',
  },
  {
    icon: <Filter size={24} className="text-blue-400" />,
    title: 'Advanced Filters',
    description: 'Filter by genre, experience level, availability, and collaboration preferences',
  },
];

export const BandMemberFinder: React.FC = () => {
  return (
    <section id="bandmemberfinder" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Band Member Finder"
            subtitle="Connect with talented musicians worldwide and form your dream band"
          />
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollAnimator animation="fade-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Find Your Perfect Match</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <GlassMorphCard key={feature.title} className="h-full">
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <h4 className="text-lg font-semibold ml-2 text-white">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </GlassMorphCard>
                ))}
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Available Musicians</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {instruments.map((instrument, index) => (
                  <div
                    key={instrument.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{instrument.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{instrument.name}</h4>
                    <p className="text-teal-400 text-sm">{instrument.count}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                  Start Finding Musicians
                </button>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        <ScrollAnimator animation="fade-up">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-teal-900/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Global Music Network</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Over 45,000 verified musicians from 120+ countries are waiting to collaborate. 
                Create your profile and start building musical connections today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Create Musician Profile
                </button>
                <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                  Browse Musicians
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};