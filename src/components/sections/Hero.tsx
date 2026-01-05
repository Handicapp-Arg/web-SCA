import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui';

/**
 * Hero Section Component
 * Full-screen hero with background image and CTA
 */
export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/image1.jpeg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-slide-in-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white uppercase">
            {t('hero_title').split('OEM')[0]}
            <span className="text-accent">OEM</span>
            {t('hero_title').split('OEM')[1]}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
            {t('hero_subtitle')}
          </p>

          <button onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <Button size="lg" className="w-full md:w-auto">
              {t('hero_cta')}
            </Button>
          </button>
        </div>
      </div>
    </section>
  );
};
