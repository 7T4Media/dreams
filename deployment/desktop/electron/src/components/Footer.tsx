import React from 'react';
import { Music2, Github, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-black/30 backdrop-blur-md py-16 border-t border-white/10 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Music2 size={32} className="text-teal-400 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              1DreamUnited
            </span>
          </div>
          
          <p className="text-gray-400 mb-8 text-center max-w-md">
            {t('footer.tagline', 'Technology Serving Humanity\'s Musical Heritage')}
          </p>
          
          <div className="flex space-x-6 mb-10">
            {[Twitter, Instagram, Youtube, Github, Linkedin].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm text-center">
            {t('footer.description', 'The symphony of human culture, conducted by community wisdom')}
          </p>
          <p className="text-gray-600 text-xs mt-4">
            © {new Date().getFullYear()} 1DreamUnited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};