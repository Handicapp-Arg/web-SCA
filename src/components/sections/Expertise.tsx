import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper, TechTooltip } from '@/components/ui';
import type { TranslationKeys } from '@/types';
import { motion } from 'framer-motion';

/**
 * Expertise Section Component
 * Premium showcase: Technical excellence, manufacturing process, and product gallery
 */
export const Expertise: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredProduct, setHoveredProduct] = React.useState<number | null>(null);

  const features: Array<{ icon: string; titleKey: keyof TranslationKeys; descKey: keyof TranslationKeys }> = [
    { icon: 'fa-certificate', titleKey: 'exp_german_title', descKey: 'exp_german_desc' },
    { icon: 'fa-wind', titleKey: 'exp_steam_title', descKey: 'exp_steam_desc' },
    { icon: 'fa-tools', titleKey: 'exp_trees_title', descKey: 'exp_trees_desc' },
  ];

  return (
    <section
      id="expertise"
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <RevealWrapper>
          <SectionHeader title={t('expertise_title')} />
        </RevealWrapper>

        {/* Premium Features Grid */}
        <RevealWrapper delay={100}>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg" />
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        {/* CEO Spotlight - Enhanced */}
        <RevealWrapper delay={200}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-10 md:p-12 mb-20 overflow-hidden shadow-2xl"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <img 
                  src="/images/profile.webp" 
                  alt="Santiago A. Salerno" 
                  className="w-full h-full object-cover object-[60%_center]"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Santiago A. Salerno
                </h3>
                <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs uppercase tracking-wider font-bold rounded-full mb-6">
                  {t('role_partner')}
                </span>
                <p className="text-lg md:text-xl text-white/90 italic leading-relaxed max-w-3xl">
                  "{t('ceo_bio')}"
                </p>
              </div>
            </div>
          </motion.div>
        </RevealWrapper>

        {/* Nuestras Líneas de Producto - Unified Section */}
        <RevealWrapper delay={300}>
          <div className="mb-20">
            {/* Main Section Header */}
            <SectionHeader title={t('products_title')} />
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                {t('expertise_subtitle')}
              </p>
              <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                {t('expertise_description')}{' '}
                <TechTooltip 
                  term={t('term_fitter_title')}
                  definition={t('term_fitter_desc')}
                >
                  {t('term_fitter_title')}
                </TechTooltip>
                {' '}{t('expertise_certified')}{' '}
                <TechTooltip 
                  term={t('term_panel_title')}
                  definition={t('term_panel_desc')}
                >
                  {t('term_panel_title')}
                </TechTooltip>
                {' '}{t('expertise_fit_perfectly')}
              </p>
            </div>
            
            {/* Manufacturing Process Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[1, 2, 3, 4].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent overflow-hidden"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      {num}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                      {t(`products_desc_${num}` as keyof TranslationKeys)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Product Images Gallery */}
            <div className="text-center mb-10">
              <p className="text-gray-600 text-lg">
                {t('product_lines_subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: '/images/montura_salto.webp', key: 'cat_jumping' },
                { img: '/images/montura_adistramiento.webp', key: 'cat_dressage' },
                { img: '/images/montura_todoproposito.webp', key: 'cat_eventing' },
                { img: '/images/montura_trekking.webp', key: 'cat_polo' }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  animate={{
                    scale: hoveredProduct === null ? 1 : hoveredProduct === index ? 1.15 : 0.85,
                    y: hoveredProduct === index ? -15 : 0,
                    opacity: 1
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-xl group aspect-square shadow-lg cursor-pointer"
                >
                  <img
                    src={product.img}
                    alt={t(product.key as keyof TranslationKeys)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6 transition-all duration-500">
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                        {t(product.key as keyof TranslationKeys)}
                      </h4>
                      <div className="w-0 group-hover:w-12 h-1 bg-accent transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Accent Border on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
