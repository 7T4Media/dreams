import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { ExternalLink, Music, Globe, Trophy, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const text = textElement.textContent || '';
    textElement.innerHTML = '';
    
    // Split text into individual characters
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${i * 0.1}s`;
      span.className = 'inline-block animate-fadeIn opacity-0';
      textElement.appendChild(span);
    });

    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('hero.title', '1DreamUnited')}
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300">
          {t('hero.subtitle', 'AI-Powered Global Music Ecosystem for Cultural Unity')}
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.description', 'Connecting musicians across continents, preserving cultural heritage, and creating new opportunities through cutting-edge AI technology and sustainable global infrastructure.')}
        </p>
        
        {/* Global Music Event Button */}
        <div className="mb-8">
          <a 
            href="https://1nyt.7t4.fun/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group mb-4"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center">
              <Music size={24} className="mr-3" />
              🌍 Global Music Event - 1NYT
              <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <div className="text-sm text-gray-400 mb-2">
            ✨ Join the worldwide celebration of music and unity
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 group">
            <span className="relative z-10">{t('hero.explore_button', 'Explore the Ecosystem')}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          
          <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            {t('hero.join_button', 'Join MusicianVerse')}
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};