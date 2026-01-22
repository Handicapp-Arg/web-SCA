import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper, TechTooltip } from '@/components/ui';
import type { TranslationKeys } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Expertise Section Component
 * Premium showcase: Technical excellence, manufacturing process, and product gallery
 */
export const Expertise: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredProduct, setHoveredProduct] = React.useState<number | null>(null);
  const [currentPartner, setCurrentPartner] = React.useState(0);

  const partners = [
    {
      name: 'Santiago A. Salerno',
      role: 'role_partner',
      bio: 'ceo_bio',
      image: '/images/profile.webp',
      imagePosition: 'object-[60%_center]',
    },
    {
      name: 'Partner Name',
      role: 'role_partner_2',
      bio: 'Partner quote about the business, commitment to quality, and vision for the future of SCA.',
      image: null,
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
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextPartner();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

        {/* CEO Spotlight - Carousel */}
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
