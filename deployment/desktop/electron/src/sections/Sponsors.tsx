import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Building, Music, Headphones, Mic, Guitar, Piano, Star, MapPin, Users, Award } from 'lucide-react';

const hospitalitySponsors = [
  {
    name: 'Hilton Hotels & Resorts',
    logo: '🏨',
    category: 'Hospitality',
    description: 'Exclusive accommodation partner providing premium stays for touring artists and festival attendees',
    benefits: ['Artist rate discounts', 'VIP concierge services', 'Studio suite upgrades', 'Global network access'],
    partnership: 'Platinum Partner',
    locations: '6,800+ properties worldwide',
    icon: <Building size={24} className="text-blue-400" />,
  },
  {
    name: 'Marriott International',
    logo: '🏛️',
    category: 'Hospitality',
    description: 'Luxury hospitality solutions for music industry professionals and event accommodations',
    benefits: ['Bonvoy elite status', 'Event space discounts', 'Artist hospitality suites', 'Global booking priority'],
    partnership: 'Gold Partner',
    locations: '8,000+ properties globally',
    icon: <Building size={24} className="text-purple-400" />,
  },
  {
    name: 'Four Seasons Hotels',
    logo: '🌟',
    category: 'Luxury Hospitality',
    description: 'Ultra-premium accommodations for A-list artists and exclusive music industry events',
    benefits: ['Presidential suite access', 'Private dining', 'Spa & wellness services', 'Personal concierge'],
    partnership: 'Exclusive Partner',
    locations: '120+ luxury properties',
    icon: <Star size={24} className="text-yellow-400" />,
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
    icon: <Piano size={24} className="text-red-400" />,
  },
  {
    name: 'Bose Professional',
    logo: '🔊',
    category: 'Audio Technology',
    description: 'Premium audio solutions for live performances, studios, and streaming platforms',
    benefits: ['Pro audio discounts', 'Technical support', 'Custom installations', 'Product testing access'],
    partnership: 'Technology Partner',
    specialties: 'Speakers, Headphones, Audio Systems',
    icon: <Headphones size={24} className="text-teal-400" />,
  },
  {
    name: 'Shure Incorporated',
    logo: '🎤',
    category: 'Audio Equipment',
    description: 'Industry-standard microphones and wireless systems for professional recording and live sound',
    benefits: ['Artist microphone programs', 'Technical training', 'Live sound support', 'Studio partnerships'],
    partnership: 'Audio Partner',
    specialties: 'Microphones, Wireless Systems, Monitoring',
    icon: <Mic size={24} className="text-green-400" />,
  },
  {
    name: 'Fender Musical Instruments',
    logo: '🎸',
    category: 'Instruments',
    description: 'Iconic guitar and amplifier manufacturer supporting artists across all genres',
    benefits: ['Custom shop access', 'Artist signature models', 'Amplifier partnerships', 'Music education support'],
    partnership: 'Heritage Partner',
    specialties: 'Guitars, Basses, Amplifiers, Effects',
    icon: <Guitar size={24} className="text-orange-400" />,
  },
  {
    name: 'Native Instruments',
    logo: '💻',
    category: 'Music Software',
    description: 'Leading music production software and hardware for modern music creation',
    benefits: ['Software licenses', 'Hardware partnerships', 'Producer collaborations', 'Educational content'],
    partnership: 'Innovation Partner',
    specialties: 'DAW Software, Controllers, Sample Libraries',
    icon: <Music size={24} className="text-purple-400" />,
  },
  {
    name: 'Roland Corporation',
    logo: '🥁',
    category: 'Electronic Instruments',
    description: 'Pioneer in electronic musical instruments and digital recording equipment',
    benefits: ['Electronic instrument access', 'Technology partnerships', 'Artist collaborations', 'Innovation labs'],
    partnership: 'Technology Partner',
    specialties: 'Synthesizers, Drum Machines, Digital Pianos',
    icon: <Music size={24} className="text-blue-400" />,
  },
];

const partnershipBenefits = [
  {
    icon: <Award size={28} className="text-gold-400" />,
    title: 'Exclusive Access',
    description: 'Priority access to new products, services, and exclusive artist programs',
  },
  {
    icon: <Users size={28} className="text-teal-400" />,
    title: 'Industry Networking',
    description: 'Connect with industry professionals and fellow artists through partner events',
  },
  {
    icon: <MapPin size={28} className="text-purple-400" />,
    title: 'Global Support',
    description: 'Worldwide support network for touring artists and international collaborations',
  },
  {
    icon: <Star size={28} className="text-yellow-400" />,
    title: 'Career Development',
    description: 'Mentorship programs and career advancement opportunities through partner networks',
  },
];

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Global Partners & Sponsors"
            subtitle="Industry-leading partnerships providing exclusive benefits and opportunities for our music community"
          />
        </ScrollAnimator>

        {/* Hospitality Partners */}
        <ScrollAnimator>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hospitality Partners
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Premium accommodation and hospitality services for touring artists, festival attendees, and music industry professionals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitalitySponsors.map((sponsor, index) => (
                <ScrollAnimator key={sponsor.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{sponsor.logo}</div>
                      <div className="flex items-center">
                        {sponsor.icon}
                        <span className="ml-2 text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                          {sponsor.partnership}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{sponsor.name}</h4>
                    <div className="text-sm text-gray-400 mb-3">{sponsor.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        {sponsor.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin size={12} className="mr-1" />
                      <span>{sponsor.locations}</span>
                    </div>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Music Industry Partners */}
        <ScrollAnimator>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Music Industry Titans
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              World-renowned music equipment manufacturers and technology companies supporting artist development and innovation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicIndustrySponsors.map((sponsor, index) => (
                <ScrollAnimator key={sponsor.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{sponsor.logo}</div>
                      <div className="flex items-center">
                        {sponsor.icon}
                        <span className="ml-2 text-sm bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                          {sponsor.partnership}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{sponsor.name}</h4>
                    <div className="text-sm text-gray-400 mb-3">{sponsor.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Partnership Benefits:</div>
                      <div className="space-y-1">
                        {sponsor.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      <span className="font-semibold">Specialties:</span> {sponsor.specialties}
                    </div>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Partnership Benefits */}
        <ScrollAnimator>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <ScrollAnimator key={benefit.title} delay={index * 100} animation="fade-up">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Partner Network</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access exclusive benefits, industry connections, and professional opportunities through our global network of premium partners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  $2M+
                </div>
                <div className="text-gray-400 text-sm">Annual Benefits Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  180+
                </div>
                <div className="text-gray-400 text-sm">Countries Covered</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                Explore Partner Benefits
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Become a Partner
              </button>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};