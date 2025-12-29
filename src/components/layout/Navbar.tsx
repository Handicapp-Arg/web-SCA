import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Language } from '@/types';

/**
 * Navbar Component
 * Responsive navigation with language switcher
 */
export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
   * Close mobile menu when clicking on a link
   */
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  /**
   * Handle language change
   */
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
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
          <a href="#" className="flex items-center z-50 transition-transform duration-300 hover:scale-105">
            <img 
              src="/images/logoSCA.png" 
              alt="SCA Logo" 
              className="h-20 lg:h-32 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex gap-8">
                <a
                  href="#concept"
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_concept')}
                </a>
                <a
                  href="#services"
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_services')}
                </a>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-accent font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {t('nav_contact')}
                </a>
              </div>

              {/* Language Switcher */}
              <div className="flex gap-2 pl-6 border-l border-white/20">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-all ${
                      language === lang
                        ? 'bg-accent text-white'
                        : 'bg-transparent text-white/50 border border-white/10 hover:border-accent hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
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
            <a
              href="#concept"
              onClick={handleLinkClick}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_concept')}
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_services')}
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-white text-lg font-semibold uppercase tracking-wider"
            >
              {t('nav_contact')}
            </a>

            {/* Mobile Language Switcher */}
            <div className="flex gap-3 pt-4 border-t border-white/10 w-48">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex-1 px-4 py-2 text-xs font-bold uppercase rounded-full transition-all ${
                    language === lang
                      ? 'bg-accent text-white'
                      : 'bg-transparent text-white/50 border border-white/20'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
