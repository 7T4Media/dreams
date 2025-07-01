import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { GlobalMusicEvent } from './sections/GlobalMusicEvent';
import { AIEcosystem } from './sections/AIEcosystem';
import { GlobalInfrastructure } from './sections/GlobalInfrastructure';
import { MusicianVerse } from './sections/MusicianVerse';
import { BandMemberFinder } from './sections/BandMemberFinder';
import { VideoCollaboration } from './sections/VideoCollaboration';
import { CopyrightProtection } from './sections/CopyrightProtection';
import { MusicVenues } from './sections/MusicVenues';
import { Sponsors } from './sections/Sponsors';
import { EducationBusiness } from './sections/EducationBusiness';
import { DreaMTV } from './sections/DreaMTV';
import { GlobalImpact } from './sections/GlobalImpact';
import { ComingSoon } from './sections/ComingSoon';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

function App() {
  const [isElectron, setIsElectron] = useState(false);
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    // Check if running in Electron
    if (typeof window !== 'undefined' && (window as any).electronAPI) {
      setIsElectron(true);
      
      // Get app version
      (window as any).electronAPI.getAppVersion().then((version: string) => {
        setAppVersion(version);
      });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white overflow-hidden">
        <FloatingElements />
        <NavBar />
        {isElectron && (
          <div className="fixed top-0 right-0 z-50 bg-black/20 backdrop-blur-sm px-3 py-1 text-xs text-white/70 rounded-bl-lg">
            Desktop v{appVersion}
          </div>
        )}
        <main className="relative z-10">
          <Hero />
          <GlobalMusicEvent />
          <AIEcosystem />
          <GlobalInfrastructure />
          <MusicianVerse />
          <BandMemberFinder />
          <VideoCollaboration />
          <CopyrightProtection />
          <MusicVenues />
          <Sponsors />
          <EducationBusiness />
          <DreaMTV />
          <GlobalImpact />
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;