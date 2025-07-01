import React, { useState, useEffect } from 'react';
import { Music2, Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../contexts/LanguageContext';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const mainNavItems = [
    { label: '1NYT Event', id: 'globalmusicEvent' },
    { label: t('nav.ai_ecosystem', 'AI Ecosystem'), id: 'aiecosystem' },
    { label: t('nav.infrastructure', 'Infrastructure'), id: 'infrastructure' },
    { label: t('nav.impact', 'Impact'), id: 'impact' },
    { label: t('nav.coming_soon', 'Coming Soon'), id: 'comingsoon' },
  ];

  const platformItems = [
    { label: t('nav.musicianverse', 'MusicianVerse'), id: 'musicianverse' },
    { label: t('nav.band_finder', 'Band Finder'), id: 'bandmemberfinder' },
    { label: t('nav.collaboration', 'Collaboration'), id: 'videocollaboration' },
    { label: t('nav.copyright', 'Copyright'), id: 'copyrightprotection' },
    { label: t('nav.venues', 'Venues'), id: 'musicvenues' },
    { label: t('nav.sponsors', 'Sponsors'), id: 'sponsors' },
    { label: t('nav.education_business', 'Education & Business'), id: 'educationbusiness' },
    { label: t('nav.dreamtv', 'DreaMTV'), id: 'dreamtv' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-lg py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Music2 size={32} className="text-teal-400 mr-2" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            1DreamUnited
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full text-sm ${
                item.label === '1NYT Event' ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Platform Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              {t('nav.platform', 'Platform')}
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl py-2 z-50">
                {platformItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Language Selector and Mobile Menu */}
        <div className="flex items-center gap-3">
          <LanguageSelector />
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {/* Main nav items for mobile */}
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-3 text-left text-gray-300 hover:text-white border-b border-gray-800 ${
                item.label === '1NYT Event' ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Platform section header */}
          <div className="py-2 text-teal-400 font-semibold text-sm border-b border-gray-800">
            {t('nav.platform', 'Platform')} Features
          </div>
          
          {/* Platform items for mobile */}
          {platformItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-2 pl-4 text-left text-gray-300 hover:text-white text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
};