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
          backgroundImage: 'url(/images/image1.webp)',
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
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 uppercase"
          >
            {(() => {
              const title = t('hero_title');
              const parts = title.split('OEM');
              const firstPart = parts[0].trim();
              const words = firstPart.split(' ');
              const firstLine = words[0];
              const secondLine = words.slice(1).join(' ');
              return (
                <>
                  <span className="block text-white">{firstLine}</span>
                  <span className="block text-white">
                    {secondLine}{' '}
                    <span className="text-accent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                      OEM
                    </span>
                  </span>
                </>
              );
            })()}
          </motion.h1>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 mb-6 md:origin-left justify-center md:justify-start"
          >
            <div className="flex-1 md:flex-none md:w-16 h-0.5 bg-gradient-to-r from-transparent md:from-accent to-accent rounded-full shadow-lg shadow-accent/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-lg shadow-accent/50 flex-shrink-0" />
            <div className="flex-1 md:flex-none md:w-10 h-0.5 bg-gradient-to-l from-transparent md:from-accent/30 to-accent/30 rounded-full" />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Sustainability Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8"
          >
            <div className="inline-flex flex-wrap items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                {t('hero_sustainability_title')}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto md:mx-0">
              {[
                { key: 'hero_facility_feat_1', icon: 'fa-layer-group' },
                { key: 'hero_facility_feat_2', icon: 'fa-lightbulb' },
                { key: 'hero_facility_feat_3', icon: 'fa-recycle' },
                { key: 'hero_facility_feat_4', icon: 'fa-leaf' },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                >
                  <i className={`fas ${feat.icon} text-accent text-sm`} />
                  <span className="text-white text-xs font-medium">{t(feat.key)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CEO Unique Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-10 p-4 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent rounded-r-lg max-w-2xl mx-auto md:mx-0"
          >
            <p className="text-white/90 text-sm md:text-base font-medium italic leading-relaxed">
              {t('hero_ceo_unique')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
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
              <span>{t('hero_brands_btn')}</span>
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
          className="absolute bottom-16 sm:bottom-8 left-0 right-0 flex justify-center z-20"
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
