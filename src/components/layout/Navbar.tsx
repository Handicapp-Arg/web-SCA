import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocale } from '@/hooks/useLocale';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Language } from '@/types';

/**
 * Navbar Component
 * Responsive navigation with URL-based language switcher
 */
export const Navbar: React.FC = () => {
  const { language, t } = useLanguage();
  const { changeLocale } = useLocale();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  /**
   * Language configuration with names only
   */
  const languageConfig = {
    en: { name: 'English' },
    de: { name: 'Deutsch' },
    es: { name: 'Español' }
  };

  /**
   * Handle scroll effect for navbar
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smooth scroll to section without hash in URL
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  /**
   * Handle language change via URL navigation
   */
  const handleLanguageChange = (lang: Language) => {
    changeLocale(lang);
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  };

  const languages: Language[] = ['en', 'de', 'es'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-primary/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center z-50 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/images/logoSCA - blanco.webp" 
              alt="SCA Logo" 
              className="h-20 lg:h-32 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex gap-8">
                <button
                  onClick={() => scrollToSection('concept')}
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_concept')}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_services')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_contact')}
                </button>
              </div>

              {/* Language Switcher - Ultra Clean */}
              <div className="relative pl-6 border-l border-white/20">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white text-sm font-medium">{language.toUpperCase()}</span>
                  <i className={`fas fa-chevron-down text-accent text-xs transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-primary rounded-md shadow-xl overflow-hidden min-w-[140px] z-50 border border-white/10">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-accent transition-colors"
                      >
                        {languageConfig[lang].name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-between w-7 h-5 z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`absolute top-16 left-0 right-0 bg-primary border-t border-white/10 transition-all duration-300 ${
            isMenuOpen
              ? 'translate-y-0 opacity-100 visible'
              : '-translate-y-4 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8">
            {/* Mobile Nav Links */}
            <button
              onClick={() => scrollToSection('concept')}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_concept')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_services')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_contact')}
            </button>

            {/* Mobile Language Switcher */}
            <div className="pt-6 border-t border-white/10 w-full px-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-medium">
                Language
              </p>
              <div className="flex flex-col gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-4 py-2.5 rounded-md text-left text-sm transition-colors ${
                      language === lang
                        ? 'bg-accent text-white'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {languageConfig[lang].name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
