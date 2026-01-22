import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import type { TranslationKeys } from '@/types';

interface Rider {
  name: string;
  discipline: string;
  achievements: string;
  placeholderLabel: string;
}

/**
 * Elite Riders & Validations Section
 * Showcases professional riders using SCA saddles and German validation
 */
export const EliteRiders: React.FC = () => {
  const { t } = useLanguage();

  const riders: Rider[] = [
    {
      name: 'Carlos Milthaler',
      discipline: t('rider_milthaler_discipline' as keyof TranslationKeys),
      achievements: t('rider_milthaler_achievements' as keyof TranslationKeys),
      placeholderLabel: 'Carlos Milthaler',
    },
    {
      name: 'Vitor Teixeira',
      discipline: t('rider_teixeira_discipline' as keyof TranslationKeys),
      achievements: t('rider_teixeira_achievements' as keyof TranslationKeys),
      placeholderLabel: 'Vitor Teixeira',
    },
  ];

  const validations = [
    {
      icon: 'fa-certificate',
      titleKey: 'validation_german_title',
      descKey: 'validation_german_desc',
    },
    {
      icon: 'fa-users',
      titleKey: 'validation_fitters_title',
      descKey: 'validation_fitters_desc',
    },
    {
      icon: 'fa-trophy',
      titleKey: 'validation_riders_title',
      descKey: 'validation_riders_desc',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Header */}
        <RevealWrapper>
          <SectionHeader title={t('validation_title' as keyof TranslationKeys)} />
          <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto mb-20 leading-relaxed">
            {t('validation_subtitle' as keyof TranslationKeys)}
          </p>
        </RevealWrapper>

        {/* German Validation - DESTACADO */}
        <RevealWrapper delay={100}>
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary via-primary/95 to-gray-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 border-4 border-accent/40 text-accent text-4xl mb-6 mx-auto shadow-lg shadow-accent/20">
                  <i className="fas fa-certificate" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('validation_german_title' as keyof TranslationKeys)}
                </h3>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
                  {t('validation_german_desc' as keyof TranslationKeys)}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-white font-semibold">🇩🇪 German Standard</span>
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-white font-semibold">✓ Certified Quality</span>
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-white font-semibold">🏆 International Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Other Validations */}
        {/* Other Validations */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
          {validations.slice(1).map((validation, index) => (
            <RevealWrapper key={index} delay={200 + index * 100}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                  <i className={`fas ${validation.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-4">
                  {t(validation.titleKey as keyof TranslationKeys)}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {t(validation.descKey as keyof TranslationKeys)}
                </p>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>

        {/* Elite Riders */}
        <RevealWrapper delay={300}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('riders_title' as keyof TranslationKeys)}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('riders_subtitle' as keyof TranslationKeys)}
            </p>
          </div>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {riders.map((rider, index) => (
            <RevealWrapper key={index} delay={400 + index * 100}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImagePlaceholder
                    aspectRatio={4 / 5}
                    label={rider.placeholderLabel}
                    icon="fa-horse"
                    gradient="from-primary/20 to-accent/20"
                    className="rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{rider.name}</h4>
                  <p className="text-accent font-semibold mb-2">{rider.discipline}</p>
                  <p className="text-sm text-gray-200">{rider.achievements}</p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
