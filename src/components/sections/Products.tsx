import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper, TechTooltip } from '@/components/ui';

/**
 * Product Category Interface
 */
interface ProductCategory {
  nameKey: string;
  image: string;
  gradient: string;
}

/**
 * Products Section Component
 * Showcase of 4 main saddle categories with tooltips
 */
export const Products: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // 4 Product Categories
  const productCategories: ProductCategory[] = [
    { 
      nameKey: 'products_cat_jumping', 
      image: '/images/montura_salto.webp',
      gradient: ''
    },
    { 
      nameKey: 'products_cat_dressage', 
      image: '/images/montura_adistramiento.webp',
      gradient: ''
    },
    { 
      nameKey: 'products_cat_allpurpose', 
      image: '/images/montura_todoproposito.webp',
      gradient: ''
    },
    { 
      nameKey: 'products_cat_trekking', 
      image: '/images/montura_trekking.webp',
      gradient: ''
    },
  ];

  // Process features - 4 Puntos Clave de Calidad
  const processFeatures = [
    { 
      descKey: 'products_desc_1',
      icon: 'fa-hands',
    },
    { 
      descKey: 'products_desc_2',
      icon: 'fa-leaf',
    },
    { 
      descKey: 'products_desc_3',
      icon: 'fa-ruler-combined',
    },
    { 
      descKey: 'products_desc_4',
      icon: 'fa-crosshairs',
    },
  ];

  // Parallax for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header with Standard SectionHeader */}
        <RevealWrapper>
          <SectionHeader 
            title={t('products_title')} 
          />
          
          {/* Intro with Tooltips */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t('products_intro')}{' '}
              <TechTooltip
                term={t('term_saddle_fitter_title')}
                definition={t('term_saddle_fitter_def')}
              >
                {t('term_saddle_fitter_title')}
              </TechTooltip>
              {t('products_intro_end')}{' '}
              <TechTooltip
                term={t('term_panels_title')}
                definition={t('term_panels_def')}
              >
                {t('term_panels_title')}
              </TechTooltip>{' '}
              {t('products_intro_final')}
            </p>
          </div>
        </RevealWrapper>

        {/* Process Features Grid - Información destacada */}
        <div className="mb-20">
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border-l-4 border-accent rounded-r-lg p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`fas ${feature.icon} text-accent text-xl group-hover:text-white`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-primary transition-colors">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Product Categories - 4 Main Types */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-primary mb-4">
            {t('products_subtitle')}
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {t('products_subtitle_desc')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/5] bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-900/80 group-hover:ring-2 group-hover:ring-cyan-400 transition-all duration-300">
                  {/* Product Image */}
                  <img
                    src={category.image}
                    alt={t(category.nameKey)}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />

                  {/* Cyan accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Name - Below Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 to-slate-800/80 backdrop-blur-sm py-4 group-hover:from-cyan-900/95 group-hover:to-cyan-800/80 transition-all duration-300">
                    <h4 className="text-white font-bold text-base md:text-lg uppercase tracking-wide text-center">
                      {t(category.nameKey)}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
