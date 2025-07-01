import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Shield, FileText, Music, Mic, Globe, CheckCircle, ExternalLink, Bot } from 'lucide-react';

const aiTools = [
  {
    icon: <FileText size={28} className="text-teal-400" />,
    emoji: '🎼',
    title: 'AI Sheet Music Generator',
    description: 'Convert audio recordings to professional sheet music with 99.2% accuracy using advanced AI transcription',
    features: ['Multi-instrument detection', 'Chord progression analysis', 'Tempo & key signature detection', 'Export to MusicXML/PDF']
  },
  {
    icon: <Mic size={28} className="text-purple-400" />,
    emoji: '🎤',
    title: 'Karaoke Track Creator',
    description: 'Generate high-quality karaoke versions with vocal isolation and synchronized lyrics display',
    features: ['AI vocal removal', 'Lyric synchronization', 'Multiple format export', 'Pitch adjustment tools']
  },
  {
    icon: <Bot size={28} className="text-blue-400" />,
    emoji: '🤖',
    title: 'Copyright Assistant',
    description: 'AI-powered legal assistant for copyright registration, trademark searches, and rights management',
    features: ['Automated filing', 'Prior art search', 'Rights verification', 'Legal document generation']
  },
  {
    icon: <Shield size={28} className="text-green-400" />,
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
    <section id="copyrightprotection" className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="AI Copyright Protection Suite"
            subtitle="Comprehensive AI-powered tools for music creation, protection, and global copyright registration"
          />
        </ScrollAnimator>

        {/* AI Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {aiTools.map((tool, index) => (
            <ScrollAnimator key={tool.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard className="h-full">
                <div className="text-4xl mb-4">{tool.emoji}</div>
                <div className="flex items-center mb-4">
                  {tool.icon}
                  <h3 className="text-xl font-semibold ml-2 text-white">{tool.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle size={14} className="text-teal-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 text-white font-medium transition-all duration-300 hover:from-purple-600/30 hover:to-teal-600/30">
                    Try {tool.title}
                  </button>
                </div>
                
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-teal-600/5 rounded-full blur-3xl"></div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>

        {/* Copyright Offices Section */}
        <ScrollAnimator>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Global Copyright Office Integration
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
              Direct integration with major international copyright and intellectual property offices for seamless registration and protection
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {copyrightOffices.map((office, index) => (
            <ScrollAnimator key={office.country} delay={index * 50} animation="fade-up">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{office.flag}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{office.country}</h4>
                      <p className="text-gray-400 text-xs">{office.office}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-1" />
                    <span className="text-green-400 text-xs">{office.status}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing Time:</span>
                    <span className="text-gray-300">{office.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Website:</span>
                    <a 
                      href={`https://${office.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 flex items-center transition-colors"
                    >
                      <span className="mr-1">{office.website}</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/20 rounded-2xl p-8 border border-white/10 text-center">
            <Globe size={48} className="text-teal-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Protect Your Music Globally</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI-powered copyright protection suite ensures your musical creations are properly documented, 
              protected, and registered across major international jurisdictions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  99.2%
                </div>
                <div className="text-gray-400 text-sm">AI Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Protection Monitoring</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                Start Copyright Protection
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};