import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { useLanguage, supportedLanguages } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, translate, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = async (language: typeof supportedLanguages[0]) => {
    await setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200 text-sm"
        disabled={isLoading}
      >
        <Globe size={16} className="text-teal-400" />
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-white hidden sm:inline">{currentLanguage.nativeName}</span>
        <ChevronDown 
          size={14} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl py-2 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-2 text-xs text-gray-400 border-b border-white/10">
            {translate('language.select', 'Select Language')}
          </div>
          
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full flex items-center justify-between px-3 py-2 hover:bg-white/10 transition-colors duration-200 ${
                currentLanguage.code === language.code ? 'bg-white/5' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{language.flag}</span>
                <div className="text-left">
                  <div className="text-white text-sm">{language.nativeName}</div>
                  <div className="text-gray-400 text-xs">{language.name}</div>
                </div>
              </div>
              
              {currentLanguage.code === language.code && (
                <Check size={16} className="text-teal-400" />
              )}
            </button>
          ))}
          
          <div className="px-3 py-2 mt-2 border-t border-white/10">
            <div className="text-xs text-gray-500">
              Powered by AI Translation
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg text-xs text-gray-300">
          Loading translation...
        </div>
      )}
    </div>
  );
};