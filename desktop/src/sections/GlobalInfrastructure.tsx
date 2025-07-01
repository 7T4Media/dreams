import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Server, Database, Zap, Users } from 'lucide-react';

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
    <section id="infrastructure" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Global Infrastructure"
            subtitle="Our worldwide network of sustainable data centers powers the 1DreamUnited ecosystem"
          />
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datacenters.map((datacenter, index) => (
            <ScrollAnimator key={datacenter.location} delay={index * 100} animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <GlassMorphCard className="h-full relative overflow-hidden group">
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-600/10 to-teal-600/5 rounded-full blur-3xl group-hover:from-purple-600/20 group-hover:to-teal-600/10 transition-all duration-700"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-4xl mb-2">{datacenter.flag}</div>
                    <h3 className="text-xl font-semibold text-white">{datacenter.location}</h3>
                  </div>
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center text-gray-300">
                    <Server size={16} className="mr-2 text-purple-400" />
                    <span>{datacenter.servers}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Database size={16} className="mr-2 text-blue-400" />
                    <span>{datacenter.storage}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap size={16} className="mr-2 text-green-400" />
                    <span>{datacenter.power}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users size={16} className="mr-2 text-orange-400" />
                    <span>{datacenter.jobs}</span>
                  </div>
                </div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};