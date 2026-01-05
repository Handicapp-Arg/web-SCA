import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * LocaleRedirect Component
 * Redirects root path to default locale
 */
export const LocaleRedirect: React.FC = () => {
  // Detect browser language preference
  const browserLang = navigator.language.split('-')[0];
  const supportedLocales = ['en', 'es', 'de'];
  
  // Use browser language if supported, otherwise default to English
  const defaultLocale = supportedLocales.includes(browserLang) ? browserLang : 'en';
  
  return <Navigate to={`/${defaultLocale}`} replace />;
};
