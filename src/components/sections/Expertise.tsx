import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';
import { motion } from 'framer-motion';

/**
 * Sustainable Model Plant Section
 * Showcases CEO expertise and sustainable facility features
 */
export const Expertise: React.FC = () => {
  const { t } = useLanguage();

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
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
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
            {t('sustainable_plant_subtitle')}
          </p>
        </RevealWrapper>

        {/* CEO Expertise Card */}
        <RevealWrapper delay={100}>
          <div className="mb-20">
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto min-h-[400px]">
                  <img 
                    src="/images/profile.webp" 
                    alt="CEO Santiago A. Salerno"
                    className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* CEO Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/60 to-transparent lg:hidden">
                    <h3 className="text-2xl font-bold text-white">Santiago A. Salerno</h3>
                    <p className="text-white/90 text-sm uppercase tracking-wider">{t('role_partner')}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="hidden lg:block mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Santiago A. Salerno</h3>
                    <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs uppercase tracking-wider font-bold rounded-full">
                      {t('role_partner')}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 lg:mt-0 mt-4">
                    {t('sustainable_plant_ceo_title')}
                  </h4>
                  
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {t('sustainable_plant_ceo_desc')}
                  </p>

                  {/* Credentials Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        <span className="text-white text-sm font-medium">
                          {t(credential.textKey as keyof TranslationKeys)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Sustainable Facility Section */}
        <RevealWrapper delay={200}>
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              {t('sustainable_plant_facility_title')}
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('sustainable_plant_facility_desc')}
            </p>
          </div>

          {/* Sustainability Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityFeatures.map((feature, index) => (
              <RevealWrapper key={index} delay={index * 100}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
