import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

/**
 * Hero Section - Premium Marketing Focused
 * Designed for luxury, exclusivity, and conversion
 * UX: Single viewport, clear hierarchy, engaging interactions
 */
export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: 'url(/images/image1.webp)' }}
        />
        {/* Triple Layer Vignette - Creates Focus */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/80" />
      </div>

      {/* Luxury Gold Accent Lines - Subtle Prestige */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Content - Strategic Hierarchy (100vh optimized) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16">
          
          {/* LEFT COLUMN - Main Message */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Elite Badge - Creates Exclusivity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-transparent border border-accent/40 rounded-full backdrop-blur-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bold text-xs uppercase tracking-widest">
                  Elite Argentine Craftsmanship
                </span>
              </div>
            </motion.div>

            {/* Power Headline - Compact & Punchy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-display font-black uppercase leading-[1.05] tracking-tight">
                <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
                  Where Champions
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="relative inline-block">
                    <span className="text-accent">Ride</span>
                    <div className="absolute inset-0 blur-2xl bg-accent/30 -z-10" />
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Value Proposition - Clear & Concise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-xl">
                Premium OEM saddles crafted by 
                <span className="text-accent font-semibold"> the only manufacturer with a riding CEO</span>
                —trusted by elite riders worldwide.
              </p>
            </motion.div>

            {/* Dual CTA - Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-accent text-black font-black text-sm sm:text-base uppercase tracking-wider rounded-full overflow-hidden shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Partnership
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-sm" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-accent/60 hover:border-accent text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Brands
                  <i className="fas fa-chevron-right text-sm" />
                </span>
              </button>
            </motion.div>

            {/* Sustainability Pills - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-2 text-xs pt-2"
            >
              <i className="fas fa-leaf text-accent" />
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                LED Facility
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                Vegetable Tanned
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                Zero Waste
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Social Proof & Stats */}
          <div className="space-y-6">
            
            {/* Stats Grid - Interactive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { metric: '5', label: 'Premium Brands', icon: 'fa-award' },
                { metric: '100%', label: 'Handcrafted', icon: 'fa-hands' },
                { metric: '2', label: 'Continents', icon: 'fa-globe-americas' },
                { metric: '30+', label: 'Years', icon: 'fa-certificate' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative cursor-pointer"
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center group-hover:border-accent/40 group-hover:bg-white/10 transition-all duration-300">
                    <i className={`fas ${item.icon} text-accent text-lg sm:text-xl mb-2 group-hover:scale-110 transition-transform`} />
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                      {item.metric}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CEO Quote - Trust Anchor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent rounded-full" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/30 rounded-full blur-sm" />
              
              <div className="pl-5 pr-4 py-4 bg-gradient-to-r from-accent/10 to-transparent rounded-r-xl hover:from-accent/15 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <i className="fas fa-quote-right text-accent text-xs" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-2">
                      "{t('hero_ceo_unique')}"
                    </p>
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">
                      CEO Santiago Salerno
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <motion.i 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="fas fa-chevron-down text-accent text-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};
