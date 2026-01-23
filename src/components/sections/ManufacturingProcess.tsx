import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';
import { useState, useEffect } from 'react';

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
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    {
      name: 'Santiago A. Salerno',
      role: 'role_partner',
      bio: 'ceo_bio',
      image: '/images/profile.webp',
      imagePosition: 'object-[60%_center]',
    },
    {
      name: 'Anoush Bargh',
      role: 'role_partner_2',
      bio: 'Partner quote about the business, commitment to quality, and vision for the future of SCA.',
      image: '/images/Anoushbargh.jpg',
      imagePosition: 'object-center',
    },
  ];

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [partners.length]);

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
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            {t('manufacturing_subtitle')}
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

        {/* Partners Carousel */}
        <RevealWrapper delay={200}>
          <div className="relative mb-20 max-w-7xl mx-auto px-4 md:px-8">
            <div className="relative bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPartner}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12 px-4 md:px-8"
                >
                  <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    {partners[currentPartner].image ? (
                      <img 
                        src={partners[currentPartner].image} 
                        alt={partners[currentPartner].name}
                        className={`w-full h-full object-cover ${partners[currentPartner].imagePosition}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-700">
                        <i className="fas fa-user text-5xl text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left min-h-[180px] md:min-h-[200px] flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                      {partners[currentPartner].name}
                    </h3>
                    <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs uppercase tracking-wider font-bold rounded-full mb-4 md:mb-6 w-fit mx-auto md:mx-0">
                      {t(partners[currentPartner].role as keyof TranslationKeys)}
                    </span>
                    <p className="text-base md:text-lg lg:text-xl text-white/90 italic leading-relaxed">
                      "{typeof partners[currentPartner].bio === 'string' && partners[currentPartner].bio.includes('_') 
                        ? t(partners[currentPartner].bio as keyof TranslationKeys)
                        : partners[currentPartner].bio}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {partners.length > 1 && (
                <>
                  <button
                    onClick={prevPartner}
                    className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 z-10"
                    aria-label="Previous partner"
                  >
                    <i className="fas fa-chevron-left text-sm md:text-base" />
                  </button>
                  <button
                    onClick={nextPartner}
                    className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 z-10"
                    aria-label="Next partner"
                  >
                    <i className="fas fa-chevron-right text-sm md:text-base" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {partners.length > 1 && (
                <div className="flex justify-center gap-3 mt-10">
                  {partners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPartner(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentPartner 
                          ? 'bg-accent w-10 h-3' 
                          : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                      }`}
                      aria-label={`Go to partner ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
