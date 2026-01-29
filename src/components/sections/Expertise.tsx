import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Sustainable Model Plant Section
 * Showcases CEO expertise and sustainable facility features
 */
export const Expertise: React.FC = () => {
  const { t } = useLanguage();
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    {
      name: 'Santiago A. Salerno',
      role: 'role_partner',
      bio: 'ceo_bio',
      image: '/images/profile.webp',
      imagePosition: 'object-[60%_center]',
      showCredentials: true,
    },
    {
      name: 'Anoush Bargh',
      role: 'role_partner_2',
      bio: 'partner_quote',
      image: '/images/Anoushbargh.jpg',
      imagePosition: 'object-center',
      showCredentials: false,
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
    }, 6000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const sustainabilityFeatures = [
    {
      icon: 'fa-leaf',
      titleKey: 'sustainable_feat_1_title',
      descKey: 'sustainable_feat_1_desc',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'fa-lightbulb',
      titleKey: 'sustainable_feat_2_title',
      descKey: 'sustainable_feat_2_desc',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: 'fa-recycle',
      titleKey: 'sustainable_feat_3_title',
      descKey: 'sustainable_feat_3_desc',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: 'fa-seedling',
      titleKey: 'sustainable_feat_4_title',
      descKey: 'sustainable_feat_4_desc',
      color: 'from-teal-500 to-green-600'
    },
  ];

  const ceoCredentials = [
    { icon: 'fa-certificate', textKey: 'sustainable_ceo_credential_1' },
    { icon: 'fa-graduation-cap', textKey: 'sustainable_ceo_credential_2' },
    { icon: 'fa-chalkboard-teacher', textKey: 'sustainable_ceo_credential_3' },
    { icon: 'fa-horse', textKey: 'sustainable_ceo_credential_4' },
  ];

  return (
    <section
      id="expertise"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <RevealWrapper>
          <SectionHeader title={t('sustainable_plant_title')} />
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            <span className="font-bold text-accent">{t('sustainable_plant_intro_highlight')}</span> {t('sustainable_plant_intro')}
          </p>
        </RevealWrapper>

        {/* Sustainability Features Grid */}
        <RevealWrapper delay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`fas ${feature.icon} text-2xl`} />
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {t(feature.titleKey as keyof TranslationKeys)}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey as keyof TranslationKeys)}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        {/* Team Section */}
        <RevealWrapper delay={150}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 uppercase">
              {t('sustainable_plant_team_title')}
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('sustainable_plant_team_subtitle')}
            </p>
          </div>
        </RevealWrapper>

        {/* Partners Carousel */}
        <RevealWrapper delay={200}>
          <div className="mb-20 px-6 md:px-10">
            <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-2xl">
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
                >
                  <div className="grid lg:grid-cols-2 gap-0 h-[550px] sm:h-[500px] lg:h-[550px]">
                    {/* Image Side */}
                    <div className="relative h-64 sm:h-80 lg:h-full">
                      <img 
                        src={partners[currentPartner].image} 
                        alt={partners[currentPartner].name}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover ${partners[currentPartner].imagePosition}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent lg:bg-gradient-to-r" />
                      
                      {/* Partner Name Overlay - Mobile */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent lg:hidden">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{partners[currentPartner].name}</h3>
                        <p className="text-white/90 text-xs sm:text-sm uppercase tracking-wider">{t(partners[currentPartner].role as keyof TranslationKeys)}</p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-[286px] sm:h-[220px] lg:h-full overflow-hidden">
                      <div className="hidden lg:block mb-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{partners[currentPartner].name}</h3>
                        <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs uppercase tracking-wider font-bold rounded-full">
                          {t(partners[currentPartner].role as keyof TranslationKeys)}
                        </span>
                      </div>

                      {/* CEO Section with Title */}
                      {partners[currentPartner].showCredentials && (
                        <>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                            {t('sustainable_plant_ceo_title')}
                          </h4>
                          
                          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                            {t('sustainable_plant_ceo_desc')}
                          </p>

                          {/* Credentials Grid - Hidden on mobile */}
                          <div className="hidden sm:grid grid-cols-2 gap-3">
                            {ceoCredentials.map((credential, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                  <i className={`fas ${credential.icon} text-white text-sm`} />
                                </div>
                                <span className="text-white text-sm font-medium leading-tight">
                                  {t(credential.textKey as keyof TranslationKeys)}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Partner Section - Simple Bio */}
                      {!partners[currentPartner].showCredentials && (
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed italic">
                          "{typeof partners[currentPartner].bio === 'string' && partners[currentPartner].bio.includes('_') 
                            ? t(partners[currentPartner].bio as keyof TranslationKeys)
                            : partners[currentPartner].bio}"
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevPartner}
                className="absolute left-2 top-4 sm:top-1/2 sm:-translate-y-1/2 lg:left-4 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-md border-2 border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 shadow-xl"
                aria-label="Previous partner"
              >
                <i className="fas fa-chevron-left text-xs sm:text-sm lg:text-base" />
              </button>
              <button
                onClick={nextPartner}
                className="absolute right-2 top-4 sm:top-1/2 sm:-translate-y-1/2 lg:right-4 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-md border-2 border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 shadow-xl"
                aria-label="Next partner"
              >
                <i className="fas fa-chevron-right text-xs sm:text-sm lg:text-base" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
