import React from 'react';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Tv, Smartphone, Monitor, Gamepad, ArrowRight } from 'lucide-react';

export const DreaMTV: React.FC = () => {
  return (
    <section id="dreamtv" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimator>
          <div className="text-center">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                DreaMTV
              </h2>
              <div className="absolute -top-6 -right-6 text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full">
                Coming Soon
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto my-8 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Tv size={48} className="text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 animate-pulse"></div>
            </div>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
              Revolutionary streaming platform bringing global music culture to every screen
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full">
                <Tv size={18} className="text-purple-400 mr-2" />
                <span>Roku</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full">
                <ArrowRight size={18} className="text-red-400 mr-2" />
                <span>Fire Stick</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full">
                <Smartphone size={18} className="text-blue-400 mr-2" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full">
                <Monitor size={18} className="text-teal-400 mr-2" />
                <span>Web Platform</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full">
                <Gamepad size={18} className="text-green-400 mr-2" />
                <span>Smart TVs</span>
              </div>
            </div>
            
            <button className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group">
              <span className="relative z-10">Get Early Access</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};