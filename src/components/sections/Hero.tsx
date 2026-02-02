import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-black overflow-hidden"
      aria-label="Hero Section"
    >
      {/* ===== VIDEO BACKGROUND ===== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] saturate-[0.6] contrast-[0.85]"
        >
          <source
            src="https://res.cloudinary.com/dh2m9ychv/video/upload/v1770062526/Sca_web_pkoshs.mov"
            type="video/mp4"
          />
        </video>

        {/* Overlay único y elegante */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4
                      flex flex-col items-center text-center gap-8">

        {/* Badge */}
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            font-display font-black uppercase
            leading-[0.9] tracking-tight
            text-white
            text-4xl sm:text-5xl md:text-6xl
            drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
        >
          {t('hero_title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
            text-gray-100
            text-base sm:text-lg md:text-xl
            leading-relaxed font-normal
            max-w-2xl
            drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]
          "
        >
          {t('hero_subtitle')}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() =>
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label={t('hero_cta')}
          className="
            group relative px-8 py-4
            bg-accent text-black
            font-black text-base uppercase tracking-wider
            rounded-full
            shadow-2xl shadow-accent/40
            hover:shadow-accent/60 hover:scale-110
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-accent
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            {t('hero_cta')}
            <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};
