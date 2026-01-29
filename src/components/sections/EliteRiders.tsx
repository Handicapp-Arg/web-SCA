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
  image?: string;
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
      placeholderLabel: 'Carlos Milthaler - Professional Jumping Rider',
  image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/web-sca/web-sca/CarlosMilthaler.webp`,
    },
    {
      name: 'Vitor Teixeira',
      discipline: t('rider_teixeira_discipline' as keyof TranslationKeys),
      achievements: t('rider_teixeira_achievements' as keyof TranslationKeys),
      placeholderLabel: 'Vitor Teixeira - Olympic Dressage Rider',
  image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/web-sca/web-sca/VitorAlvesTeixeira.webp`,
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
          <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            {t('riders_subtitle' as keyof TranslationKeys)}
          </p>
        </RevealWrapper>

        {/* Elite Riders Grid - Diseño Principal */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {riders.map((rider, index) => (
            <RevealWrapper key={index} delay={100 + index * 100}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-96 md:h-[450px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {rider.image ? (
                    <img
                      src={rider.image}
                      alt={rider.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <ImagePlaceholder
                      aspectRatio={3 / 4}
                      label={rider.placeholderLabel}
                      icon="fa-user-tie"
                      gradient="from-primary/30 to-accent/30"
                      className="rounded-none"
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Decorative Border on Hover */}
                  <motion.div
                    className="absolute inset-0 border-4 border-accent pointer-events-none opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Name */}
                    <h4 className="text-3xl md:text-4xl font-display font-black text-white mb-3 drop-shadow-lg uppercase tracking-wide">
                      {rider.name}
                    </h4>
                    
                    {/* Discipline Badge */}
                    <div className="inline-block px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full mb-4">
                      <p className="text-sm font-bold text-white uppercase tracking-wider">
                        {rider.discipline}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                      {rider.achievements}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className="mt-4 h-1 w-20 bg-accent rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>

        {/* Validation Badge - Discreto al final */}
        <RevealWrapper delay={300}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-certificate text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {t('validation_german_title' as keyof TranslationKeys)}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t('validation_german_desc' as keyof TranslationKeys)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
