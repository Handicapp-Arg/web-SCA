import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKeys } from '@/types';

/**
 * Glossary Section Component
 * Technical terms and definitions for the saddle industry
 */
export const Glossary: React.FC = () => {
  const { t } = useLanguage();

  const terms: Array<{ titleKey: keyof TranslationKeys; descKey: keyof TranslationKeys }> = [
    { titleKey: 'term_fitter_title', descKey: 'term_fitter_desc' },
    { titleKey: 'term_panel_title', descKey: 'term_panel_desc' },
  ];

  return (
    <section
      id="glossary"
      className="py-16 md:py-20 bg-[#3a3a3a] isolate"
      style={{ 
        transform: 'translateZ(0)', 
        willChange: 'auto', 
        isolation: 'isolate',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'pan-y'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2 uppercase tracking-wide">
            {t('glossary_title')}
          </h2>
        </div>

        {/* Terms Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {terms.map((term, index) => (
            <div 
              key={index}
              className="select-text pointer-events-auto"
              style={{ 
                transform: 'translateZ(0)',
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'text',
                userSelect: 'text'
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 pointer-events-none">
                {t(term.titleKey)}
              </h3>
              <p className="text-[#d4c5a9] leading-relaxed text-sm md:text-base pointer-events-none">
                {t(term.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
