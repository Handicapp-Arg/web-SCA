import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';

interface ProcessItem {
  titleKey: string;
  descKey: string;
  icon: string;
  mediaType: 'image' | 'video';
  placeholderLabel: string;
}

/**
 * Manufacturing Process Section
 * Showcases SCA's unique manufacturing processes with visual media
 */
export const ManufacturingProcess: React.FC = () => {
  const { t } = useLanguage();

  const processes: ProcessItem[] = [
    {
      titleKey: 'process_steam_title',
      descKey: 'process_steam_desc',
      icon: 'fa-fire',
      mediaType: 'video',
      placeholderLabel: 'Steam Fitting Process Video',
    },
    {
      titleKey: 'process_trees_title',
      descKey: 'process_trees_desc',
      icon: 'fa-hammer',
      mediaType: 'image',
      placeholderLabel: 'Saddle Tree Manufacturing',
    },
    {
      titleKey: 'process_quality_title',
      descKey: 'process_quality_desc',
      icon: 'fa-check-circle',
      mediaType: 'image',
      placeholderLabel: 'Quality Control Technology',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader 
            title={t('manufacturing_title')} 
          />
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            {t('manufacturing_subtitle')}
          </p>
          <p className="text-center text-accent font-bold text-xl max-w-3xl mx-auto mb-16">
            {t('manufacturing_craftsmen')}
          </p>
        </RevealWrapper>

        {/* Process Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {processes.map((process, index) => (
            <RevealWrapper key={index} delay={index * 100}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* Media */}
                <div className="mb-6 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  {index === 0 && (
                    <img src="/images/vapor.jpg" alt="Vapor" className="w-full h-auto object-cover aspect-[4/3]" />
                  )}
                  {index === 1 && (
                    <img src="/images/armazones.JPG" alt="Armazones" className="w-full h-auto object-cover aspect-[4/3]" />
                  )}
                  {index === 2 && (
                    <img src="/images/calidad.JPG" alt="Calidad" className="w-full h-auto object-cover aspect-[4/3]" />
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${process.icon} text-xl`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {t(process.titleKey as keyof TranslationKeys)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(process.descKey as keyof TranslationKeys)}
                  </p>
                </div>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
