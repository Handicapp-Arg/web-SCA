import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { RevealWrapper, SectionHeader } from '@/components/ui';
import type { TranslationKeys } from '@/types';

/**
 * Bespoke Section Component
 * Showcases custom saddle manufacturing capabilities
 * Premium positioning for high-end clientele
 */
export const Bespoke: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: 'fa-pencil-ruler',
      titleKey: 'bespoke_feat_1_title',
      descKey: 'bespoke_feat_1_desc',
    },
    {
      icon: 'fa-gem',
      titleKey: 'bespoke_feat_2_title',
      descKey: 'bespoke_feat_2_desc',
    },
    {
      icon: 'fa-handshake',
      titleKey: 'bespoke_feat_3_title',
      descKey: 'bespoke_feat_3_desc',
    },
  ];

  return (
    <section id="bespoke" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-primary to-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/50 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {t('bespoke_badge')}
              </span>
            </div>
          </motion.div>
          <SectionHeader 
            title={t('bespoke_title')} 
            subtitle={t('bespoke_subtitle')}
            light
          />
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gallery */}
          <RevealWrapper delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="/images/custom1.JPG"
                    alt="Custom Design 1"
                    className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">Custom Design 1</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="/images/custom2.JPG"
                    alt="Custom Design 2"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">Custom Design 2</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="/images/especialproject.JPG"
                    alt="Special Project"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">Special Project</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="/images/unique.JPG"
                    alt="Unique Creation"
                    className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">Unique Creation</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Content */}
          <RevealWrapper delay={200}>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <i className={`fas ${feature.icon} text-accent group-hover:text-white text-xl transition-colors duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(feature.titleKey as keyof TranslationKeys)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(feature.descKey as keyof TranslationKeys)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-accent/50"
                >
                  {t('bespoke_cta')}
                  <i className="fas fa-arrow-right" />
                </a>
              </motion.div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};
