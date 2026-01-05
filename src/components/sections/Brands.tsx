import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RevealWrapper } from '@/components/ui';
import { motion } from 'framer-motion';

/**
 * Brands Section Component
 * Premium showcase of company owned brands with interactive design
 */
export const Brands: React.FC = () => {
  const { t } = useLanguage();

  const brands = [
    { 
      name: 'CANAVES', 
      logo: '/images/canaves.png',
      tagline: 'Tradición y Calidad',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'HBC', 
      logo: '/images/HBC.png',
      tagline: 'Innovación Ecuestre',
      color: 'from-green-600 to-green-800'
    },
    { 
      name: 'HILBAR', 
      logo: '/images/hilbar.png',
      tagline: 'Excelencia Europea',
      color: 'from-purple-600 to-purple-800'
    },
    { 
      name: 'MAXFLEX', 
      logo: '/images/maxflex.png',
      tagline: 'Flexibilidad Premium',
      color: 'from-orange-600 to-orange-800'
    },
    { 
      name: 'MAX BENZ', 
      logo: '/images/maxbenz.png',
      tagline: 'Diseño de Vanguardia',
      color: 'from-red-600 to-red-800'
    },
  ];

  return (
    <section
      id="brands"
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-primary to-gray-900 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm text-accent font-bold text-sm uppercase tracking-widest rounded-full mb-6 border border-accent/30">
                {t('brands_title')}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Nuestras Marcas Propias
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Cinco marcas excepcionales, una pasión compartida: la excelencia ecuestre
              </p>
            </motion.div>
          </div>
        </RevealWrapper>

        {/* Premium Brands Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-accent/50 hover:bg-white/10">
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Brand Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {index + 1}
                  </div>
                  
                  {/* Logo */}
                  <div className="relative z-10 mb-6 transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-[180px] max-h-24 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {brand.name}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-gray-400 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {brand.tagline}
                  </p>
                  
                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Store - Premium CTA */}
        <RevealWrapper delay={200}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-3xl mb-6">
                  <i className="fas fa-handshake" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('partner_store_title')}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t('partner_store_desc')}
                </p>
                
                <a
                  href="https://sattelmanufaktur-bargh.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-4 px-10 py-5 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-base md:text-lg tracking-wide uppercase shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <span>Visitar Tienda Partner</span>
                  <i className="fas fa-arrow-right text-sm group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
                
                <div className="mt-6 text-sm text-gray-400">
                  sattelmanufaktur-bargh.de
                </div>
              </div>
            </div>
          </motion.div>
        </RevealWrapper>
      </div>
    </section>
  );
};