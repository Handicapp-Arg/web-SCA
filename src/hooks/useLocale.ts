import { useParams, useNavigate } from 'react-router-dom';
import type { Language } from '@/types';

/**
 * Valid locale codes
 */
const VALID_LOCALES: Language[] = ['en', 'es', 'de'];
const DEFAULT_LOCALE: Language = 'en';

/**
 * Custom hook for managing locale from URL parameters
 * @returns Current locale and navigation helper
 */
export const useLocale = () => {
  const { locale } = useParams<{ locale: Language }>();
  const navigate = useNavigate();

  /**
   * Get current locale from URL or default
   */
  const currentLocale: Language = 
    locale && VALID_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  /**
   * Navigate to a different locale while preserving current path
   * @param newLocale - Target locale
   */
  const changeLocale = (newLocale: Language) => {
    if (!VALID_LOCALES.includes(newLocale)) {
      console.warn(`Invalid locale: ${newLocale}. Falling back to ${DEFAULT_LOCALE}`);
      return;
    }

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Remove current locale prefix if exists, preserve rest of path
    const pathWithoutLocale = currentPath.replace(/^\/(en|es|de)/, '') || '';
    
    // Ensure path starts with / if not empty
    const cleanPath = pathWithoutLocale && !pathWithoutLocale.startsWith('/') 
      ? `/${pathWithoutLocale}` 
      : pathWithoutLocale;
    
    // Navigate to new locale with same path and hash
    navigate(`/${newLocale}${cleanPath}${currentHash}`);
  };

  /**
   * Get localized path
   * @param path - Path without locale prefix
   * @returns Localized path
   */
  const getLocalizedPath = (path: string): string => {
    return `/${currentLocale}${path}`;
  };

  return {
    locale: currentLocale,
    changeLocale,
    getLocalizedPath,
    isValidLocale: (lang: string): lang is Language => 
      VALID_LOCALES.includes(lang as Language),
  };
};
