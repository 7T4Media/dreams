import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation dictionary - in a real app, this would come from an API or translation service
const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.platform': 'Platform',
    'nav.ai_ecosystem': 'AI Ecosystem',
    'nav.infrastructure': 'Infrastructure',
    'nav.impact': 'Impact',
    'nav.coming_soon': 'Coming Soon',
    'nav.musicianverse': 'MusicianVerse',
    'nav.band_finder': 'Band Finder',
    'nav.collaboration': 'Collaboration',
    'nav.copyright': 'Copyright',
    'nav.venues': 'Venues',
    'nav.sponsors': 'Sponsors',
    'nav.education_business': 'Education & Business',
    'nav.dreamtv': 'DreaMTV',
    'hero.title': '1DreamUnited',
    'hero.subtitle': 'AI-Powered Global Music Ecosystem for Cultural Unity',
    'hero.description': 'Connecting musicians across continents, preserving cultural heritage, and creating new opportunities through cutting-edge AI technology and sustainable global infrastructure.',
    'hero.explore_button': 'Explore the Ecosystem',
    'hero.join_button': 'Join MusicianVerse',
    'footer.tagline': 'Technology Serving Humanity\'s Musical Heritage',
    'footer.description': 'The symphony of human culture, conducted by community wisdom',
    'language.select': 'Select Language',
  },
  es: {
    'nav.platform': 'Plataforma',
    'nav.ai_ecosystem': 'Ecosistema IA',
    'nav.infrastructure': 'Infraestructura',
    'nav.impact': 'Impacto',
    'nav.coming_soon': 'Próximamente',
    'nav.musicianverse': 'MusicianVerse',
    'nav.band_finder': 'Buscador de Banda',
    'nav.collaboration': 'Colaboración',
    'nav.copyright': 'Derechos de Autor',
    'nav.venues': 'Locales',
    'nav.sponsors': 'Patrocinadores',
    'nav.education_business': 'Educación y Negocios',
    'nav.dreamtv': 'DreaMTV',
    'hero.title': '1DreamUnited',
    'hero.subtitle': 'Ecosistema Musical Global Impulsado por IA para la Unidad Cultural',
    'hero.description': 'Conectando músicos a través de continentes, preservando el patrimonio cultural y creando nuevas oportunidades a través de tecnología IA de vanguardia e infraestructura global sostenible.',
    'hero.explore_button': 'Explorar el Ecosistema',
    'hero.join_button': 'Unirse a MusicianVerse',
    'footer.tagline': 'Tecnología al Servicio del Patrimonio Musical de la Humanidad',
    'footer.description': 'La sinfonía de la cultura humana, dirigida por la sabiduría comunitaria',
    'language.select': 'Seleccionar Idioma',
  },
  zh: {
    'nav.platform': '平台',
    'nav.ai_ecosystem': 'AI生态系统',
    'nav.infrastructure': '基础设施',
    'nav.impact': '影响',
    'nav.coming_soon': '即将推出',
    'nav.musicianverse': '音乐家宇宙',
    'nav.band_finder': '乐队寻找器',
    'nav.collaboration': '合作',
    'nav.copyright': '版权',
    'nav.venues': '场地',
    'nav.sponsors': '赞助商',
    'nav.education_business': '教育与商业',
    'nav.dreamtv': 'DreaMTV',
    'hero.title': '1DreamUnited',
    'hero.subtitle': 'AI驱动的全球音乐生态系统促进文化团结',
    'hero.description': '连接各大洲的音乐家，保护文化遗产，通过尖端AI技术和可持续的全球基础设施创造新机遇。',
    'hero.explore_button': '探索生态系统',
    'hero.join_button': '加入音乐家宇宙',
    'footer.tagline': '服务人类音乐遗产的技术',
    'footer.description': '人类文化的交响乐，由社区智慧指挥',
    'language.select': '选择语言',
  },
  ja: {
    'nav.platform': 'プラットフォーム',
    'nav.ai_ecosystem': 'AIエコシステム',
    'nav.infrastructure': 'インフラストラクチャ',
    'nav.impact': 'インパクト',
    'nav.coming_soon': '近日公開',
    'nav.musicianverse': 'ミュージシャンバース',
    'nav.band_finder': 'バンドファインダー',
    'nav.collaboration': 'コラボレーション',
    'nav.copyright': '著作権',
    'nav.venues': '会場',
    'nav.sponsors': 'スポンサー',
    'nav.education_business': '教育・ビジネス',
    'nav.dreamtv': 'DreaMTV',
    'hero.title': '1DreamUnited',
    'hero.subtitle': '文化的統一のためのAI駆動グローバル音楽エコシステム',
    'hero.description': '大陸を越えてミュージシャンを繋ぎ、文化遺産を保護し、最先端のAI技術と持続可能なグローバルインフラを通じて新しい機会を創造します。',
    'hero.explore_button': 'エコシステムを探索',
    'hero.join_button': 'ミュージシャンバースに参加',
    'footer.tagline': '人類の音楽遺産に奉仕する技術',
    'footer.description': 'コミュニティの知恵によって指揮される人類文化の交響曲',
    'language.select': '言語を選択',
  },
  fr: {
    'nav.platform': 'Plateforme',
    'nav.ai_ecosystem': 'Écosystème IA',
    'nav.infrastructure': 'Infrastructure',
    'nav.impact': 'Impact',
    'nav.coming_soon': 'Bientôt Disponible',
    'nav.musicianverse': 'MusicianVerse',
    'nav.band_finder': 'Chercheur de Groupe',
    'nav.collaboration': 'Collaboration',
    'nav.copyright': 'Droits d\'Auteur',
    'nav.venues': 'Lieux',
    'nav.sponsors': 'Sponsors',
    'nav.education_business': 'Éducation et Affaires',
    'nav.dreamtv': 'DreaMTV',
    'hero.title': '1DreamUnited',
    'hero.subtitle': 'Écosystème Musical Mondial Alimenté par l\'IA pour l\'Unité Culturelle',
    'hero.description': 'Connecter les musiciens à travers les continents, préserver le patrimoine culturel et créer de nouvelles opportunités grâce à une technologie IA de pointe et une infrastructure mondiale durable.',
    'hero.explore_button': 'Explorer l\'Écosystème',
    'hero.join_button': 'Rejoindre MusicianVerse',
    'footer.tagline': 'Technologie au Service du Patrimoine Musical de l\'Humanité',
    'footer.description': 'La symphonie de la culture humaine, dirigée par la sagesse communautaire',
    'language.select': 'Sélectionner la Langue',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(supportedLanguages[0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguageCode = localStorage.getItem('preferred-language');
    if (savedLanguageCode) {
      const savedLanguage = supportedLanguages.find(lang => lang.code === savedLanguageCode);
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    } else {
      // Auto-detect browser language
      const browserLanguage = navigator.language.split('-')[0];
      const detectedLanguage = supportedLanguages.find(lang => lang.code === browserLanguage);
      if (detectedLanguage) {
        setCurrentLanguage(detectedLanguage);
      }
    }
  }, []);

  const setLanguage = async (language: Language) => {
    setIsLoading(true);
    
    // Simulate API call delay for translation loading
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
    
    // Update document direction for RTL languages
    document.documentElement.dir = language.rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language.code;
    
    setIsLoading(false);
  };

  const translate = (key: string, fallback?: string): string => {
    const languageTranslations = translations[currentLanguage.code] || translations.en;
    return languageTranslations[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      isLoading,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { translate } = useLanguage();
  return { t: translate };
};