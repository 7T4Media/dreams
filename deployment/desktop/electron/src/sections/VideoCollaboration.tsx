import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Video, Mic, Headphones, Share2, Clock, Globe, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Video size={28} className="text-teal-400" />,
    emoji: '🎥',
    title: 'HD Video Sync',
    description: 'Crystal-clear video with ultra-low latency synchronization for seamless real-time collaboration',
  },
  {
    icon: <Mic size={28} className="text-purple-400" />,
    emoji: '🎙️',
    title: 'Multi-Track Recording',
    description: 'Record individual tracks simultaneously with professional-grade audio quality and mixing',
  },
  {
    icon: <Share2 size={28} className="text-blue-400" />,
    emoji: '📱',
    title: 'Screen Sharing',
    description: 'Share DAW sessions, sheet music, and collaborate on arrangements in real-time',
  },
  {
    icon: <Clock size={28} className="text-green-400" />,
    emoji: '⏱️',
    title: 'Session Recording',
    description: 'Automatically record and save collaboration sessions for later review and editing',
  },
];

const stats = [
  {
    icon: <Globe size={24} className="text-teal-400" />,
    value: '120+',
    label: 'Countries Connected',
  },
  {
    icon: <Users size={24} className="text-purple-400" />,
    value: '50K+',
    label: 'Active Sessions/Month',
  },
  {
    icon: <Zap size={24} className="text-yellow-400" />,
    value: '<50ms',
    label: 'Average Latency',
  },
  {
    icon: <Headphones size={24} className="text-pink-400" />,
    value: '99.9%',
    label: 'Audio Quality',
  },
];

export const VideoCollaboration: React.FC = () => {
  return (
    <section id="videocollaboration" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Video Collaboration Studio"
            subtitle="Professional-grade remote collaboration tools for musicians worldwide"
          />
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimator key={feature.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard className="h-full">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-2 text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-teal-600/5 rounded-full blur-3xl"></div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Platform Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimator animation="fade-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Create or Join Session</h4>
                    <p className="text-gray-400 text-sm">Start a new collaboration or join an existing session with musicians worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Set Up Your Instruments</h4>
                    <p className="text-gray-400 text-sm">Connect your audio interface and instruments for professional recording quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Collaborate in Real-Time</h4>
                    <p className="text-gray-400 text-sm">Play together with synchronized audio and video, share screens, and record your session</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-left">
            <div className="bg-gradient-to-br from-purple-900/30 to-teal-900/20 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Start Collaborating</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of musicians creating music together across continents. 
                No downloads required - everything runs in your browser.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span>Browser-based, no software installation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Professional audio quality (48kHz/24-bit)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Automatic session backup and recovery</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Cross-platform compatibility</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Launch Collaboration Studio
              </button>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};