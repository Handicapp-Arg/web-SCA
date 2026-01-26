import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper, TechTooltip } from '@/components/ui';
import { features } from '@/data/constants';

/**
 * Concept Section Component
 * Explains the hybrid business model with premium visual design
 */
export const Concept: React.FC = () => {
  const { t } = useLanguage();

  const featureIcons = [
    'fa-gem',
    'fa-industry', 
    'fa-truck-fast',
    'fa-handshake',
    'fa-certificate'
  ];

  return (
    <section
      id="concept"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <RevealWrapper>
          <SectionHeader title={t('concept_title')} />
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <RevealWrapper delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  {t('concept_subtitle')}
                </h3>
                
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t('concept_desc').split('saddle fitters')[0]}
                    <TechTooltip 
                      term={t('term_fitter_title')}
                      definition={t('term_fitter_desc')}
                    >
                      saddle fitters
                    </TechTooltip>
                    {t('concept_desc').split('saddle fitters')[1]}
                  </p>
                </div>
              </div>

              {/* Features List with Icons */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`fas ${featureIcons[index]} text-white text-lg`} />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="font-bold text-primary text-base md:text-lg group-hover:text-accent transition-colors">
                        {t(feature.textKey)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Images Grid - Diseño Mejorado */}
          <RevealWrapper delay={200}>
            <div className="relative">
              {/* Main Image - Factory Overview - HERO con descripción */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group mb-6">
                <img
                  src="/images/factory_overview.JPG"
                  alt="SCA Factory Overview"
                  className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Text Overlay - Mismo estilo que la de abajo */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg md:text-xl uppercase tracking-wide drop-shadow-lg">
                    {t('concept_img_facility_title')}
                  </p>
                  <p className="text-white/80 text-sm mt-2">{t('concept_img_facility_desc')}</p>
                  <div className="mt-3 w-16 h-1 bg-white/60 rounded-full" />
                </div>
              </div>

              {/* Grid inferior con foto + stats */}
              <div className="grid md:grid-cols-5 gap-6">
                {/* Secondary Image - Craftsmanship */}
                <div className="relative rounded-xl overflow-hidden shadow-xl group md:col-span-3">
                  <img
                    src="/images/craftsmanship_detail.JPG"
                    alt="Handcrafted Quality"
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-base md:text-lg uppercase tracking-wide drop-shadow-lg">
                      {t('concept_img_craftsmanship')}
                    </p>
                    <div className="mt-2 w-16 h-1 bg-white/60 rounded-full" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="md:col-span-2">
                  {/* Argentina Badge con imagen */}
                  <div className="relative rounded-xl overflow-hidden shadow-xl group h-full min-h-[280px]">
                    <img
                      src="/images/argentina_craftsmanship.JPG"
                      alt="Argentine Craftsmanship"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-base md:text-lg uppercase tracking-wide drop-shadow-lg">
                        {t('concept_img_leather')}
                      </p>
                      <div className="mt-2 w-16 h-1 bg-white/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};
