import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Product Interface
 */
interface Product {
  name: string;
  image: string;
}

/**
 * Products Section Component
 * Modern showcase of jumping saddles with parallax effects
 */
export const Products: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 });

  // Products list
  const products: Product[] = [
    { name: 'Invictus by Lucas Mesa', image: '/images/montura_salto.webp' },
    { name: 'Malena', image: '/images/montura_adistramiento.webp' },
    { name: 'Tribute', image: '/images/montura_todoproposito.webp' },
    { name: 'Manu by Manuel Chechic', image: '/images/montura_trekking.webp' },
    { name: 'Legacy by Américo Simonetti', image: '/images/montura_salto.webp' },
    { name: 'Almil by Carlos Milthaler', image: '/images/montura_adistramiento.webp' },
    { name: 'Ophelia', image: '/images/montura_todoproposito.webp' },
    { name: 'Sophia', image: '/images/montura_trekking.webp' },
    { name: 'Olympic by Vitor Teixeira', image: '/images/montura_salto.webp' },
    { name: 'Maestro by Vitor Teixeira', image: '/images/montura_adistramiento.webp' },
  ];

  // Process features - Información destacada
  const processFeatures = [
    { 
      text: t('products_desc_1'),
      icon: 'fa-hand-sparkles',
      title: 'Artesanía Premium'
    },
    { 
      text: t('products_desc_2'),
      icon: 'fa-leaf',
      title: 'Curtido Vegetal'
    },
    { 
      text: t('products_desc_3'),
      icon: 'fa-ruler-combined',
      title: 'Control de Simetría'
    },
    { 
      text: t('products_desc_4'),
      icon: 'fa-crosshairs',
      title: 'Verificación Láser'
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
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-4 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products_title')}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-accent font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('products_subtitle')}
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>

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
                className="bg-white border-l-4 border-accent rounded-r-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`fas ${feature.icon} text-accent text-2xl group-hover:text-white`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <p className="text-base text-gray-700 leading-relaxed group-hover:text-primary transition-colors">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] bg-gray-100">
                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Product Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.h3 
                      className="text-white font-bold text-sm md:text-base mb-2 leading-tight"
                      initial={{ y: 10, opacity: 0.8 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.button
                      className="text-accent text-xs font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      {t('product_view_details')}
                      <i className="fas fa-arrow-right text-xs" />
                    </motion.button>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-4 border-accent pointer-events-none rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
