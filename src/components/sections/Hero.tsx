import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * Full-screen hero with background image and CTA
 */
export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [showScroll, setShowScroll] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/image1.jpeg)',
        }}
      />
      
      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-white uppercase"
          >
            {t('hero_title').split('OEM')[0]}
            <span className="inline-block bg-gradient-to-r from-accent via-yellow-500 to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              OEM
            </span>
            {t('hero_title').split('OEM')[1]}
          </motion.h1>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 mb-6 origin-left"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full shadow-lg shadow-accent/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
            <div className="w-10 h-0.5 bg-accent/30 rounded-full" />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 font-light leading-relaxed max-w-2xl"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-sm md:text-base uppercase tracking-wide shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              <span>{t('hero_cta')}</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('brands');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white rounded-full font-bold text-sm md:text-base uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-star text-accent text-sm" />
              <span>Nuestras Marcas</span>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 rounded-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
