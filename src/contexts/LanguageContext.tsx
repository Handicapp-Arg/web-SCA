import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import type { Language, TranslationKeys } from '@/types';
import { translations } from '@/data/translations';

/**
 * Language Context Interface
 */
interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

/**
 * Language Context
 */
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * Language Provider Props
 */
interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

/**
 * Language Provider Component
 * Manages the current language state and provides translation function
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'en' 
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  /**
   * Set language with localStorage persistence
   */
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sca-language', lang);
    }
  }, []);

  /**
   * Translation function
   * Returns the translated string for the given key
   */
  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  /**
   * Memoized context value to prevent unnecessary re-renders
   */
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to use the Language Context
 * Must be used within a LanguageProvider
 */
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
