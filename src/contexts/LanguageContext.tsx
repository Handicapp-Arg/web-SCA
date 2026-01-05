import React, { createContext, useContext, useCallback, useMemo, ReactNode } from 'react';
import type { Language, TranslationKeys } from '@/types';
import { translations } from '@/data/translations';
import { useParams } from 'react-router-dom';

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
}

/**
 * Language Provider Component
 * Manages language state synchronized with URL locale parameter
 * MUST be used inside React Router to access useParams
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { locale } = useParams<{ locale: string }>();
  
  // Valid locales
  const validLocales: Language[] = ['en', 'es', 'de'];
  const defaultLocale: Language = 'en';
  
  // Get language from URL or default
  const language: Language = 
    locale && validLocales.includes(locale as Language) 
      ? (locale as Language) 
      : defaultLocale;

  /**
   * Set language (deprecated - use navigation instead)
   */
  const setLanguage = useCallback((_lang: Language) => {
    console.log('setLanguage is deprecated. Use navigation to change locale.');
  }, []);

  /**
   * Translation function
   * Returns the translated string for the given key
   */
  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return translations[language]?.[key] || key;
    },
    [language]
  );

  /**
   * Memoized context value
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
