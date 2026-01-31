import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';

interface ProcessItem {
  titleKey: string;
  descKey: string;
  icon: string;
  videoUrl: string;
}

/**
 * Manufacturing Process Section
 * Showcases SCA's unique manufacturing processes with video carousel
 */
export const ManufacturingProcess: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const processes: ProcessItem[] = [
    {
      titleKey: 'process_steam_title',
      descKey: 'process_steam_desc',
      icon: 'fa-fire',
      videoUrl: 'https://res.cloudinary.com/dh2m9ychv/video/upload/v1769806322/video_vapor_onhsie.mp4',
    },
    {
      titleKey: 'process_trees_title',
      descKey: 'process_trees_desc',
      icon: 'fa-hammer',
      videoUrl: 'https://res.cloudinary.com/dh2m9ychv/video/upload/v1769802081/Armazone_vl7gmw.mp4',
    },
    {
      titleKey: 'process_quality_title',
      descKey: 'process_quality_desc',
      icon: 'fa-check-circle',
      videoUrl: 'https://res.cloudinary.com/dh2m9ychv/video/upload/v1769801924/CalidadControl_euymej.mp4',
    },
  ];

  // Reproducir video cuando cambia el index o se carga el componente
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          // Navegador bloqueó autoplay
          console.log('Autoplay blocked');
        }
      }
    };
    
    playVideo();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % processes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length);
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const videoWidth = rect.width;
    
    // Si el click es en la mitad izquierda, ir al anterior; si es en la derecha, al siguiente
    if (clickX < videoWidth / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
    
    // Toggle description solo en móvil
    if (window.innerWidth < 768) {
      setShowDescription(!showDescription);
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader 
            title={t('manufacturing_title')} 
          />
          <p className="text-center text-cyan-600 font-bold text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
            {t('manufacturing_craftsmen')}
          </p>
          
          {/* EFS - Easy Fit System - Minimalista */}
          <div className="max-w-3xl mx-auto mb-10 md:mb-16 text-center px-4">
            <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
              {t('process_efs_title')}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {t('process_efs_desc')}
            </p>
          </div>
        </RevealWrapper>

        {/* Modern Video Carousel */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Video Title Above */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentIndex}`}
              className="mb-4 md:mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 md:gap-4 justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <i className={`fas ${processes[currentIndex].icon} text-white text-xs md:text-base`} />
                </div>
                <h3 className="text-base md:text-2xl font-bold text-gray-900">
                  {t(processes[currentIndex].titleKey as keyof TranslationKeys)}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Video Container */}
          <div 
            className="relative aspect-video md:rounded-3xl overflow-hidden shadow-2xl bg-black cursor-pointer"
            onClick={handleVideoClick}
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={currentIndex}
                ref={videoRef}
                src={processes[currentIndex].videoUrl}
                muted
                playsInline
                preload="auto"
                onEnded={nextSlide}
                onLoadedData={() => videoRef.current?.play()}
                className="w-full h-full object-contain md:object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>

            {/* Gradient Overlay - más sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none hidden md:block" />

            {/* Navigation Arrows - escondidos en móvil */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Previous video"
            >
              <i className="fas fa-chevron-left group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Next video"
            >
              <i className="fas fa-chevron-right group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Content Info - móvil: al hacer click, desktop: siempre visible */}
            <AnimatePresence>
              {(showDescription || window.innerWidth >= 768) && (
                <motion.div
                  key={`content-${currentIndex}`}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/40 md:from-black/70 md:to-transparent p-4 md:p-8 backdrop-blur-sm"
                  initial={{ y: window.innerWidth < 768 ? '100%' : 0, opacity: window.innerWidth < 768 ? 0 : 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: window.innerWidth < 768 ? '100%' : 0, opacity: window.innerWidth < 768 ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Description Text Only */}
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed drop-shadow-md">
                    {t(processes[currentIndex].descKey as keyof TranslationKeys)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tap indicator en móvil */}
            {!showDescription && (
              <motion.div
                className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-semibold"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Toca para ver detalles
              </motion.div>
            )}
          </div>

            {/* Dots Navigation */}
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
              {processes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-cyan-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`} />
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-500"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ scale: 2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Thumbnails Below */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
              {processes.map((process, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative group rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-4 ring-cyan-500 shadow-lg scale-105' 
                      : 'ring-2 ring-gray-200 hover:ring-cyan-300'
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.05 : 1.03 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 relative overflow-hidden">
                    <video
                      src={process.videoUrl}
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      index === currentIndex 
                        ? 'bg-cyan-500/20' 
                        : 'bg-black/50 group-hover:bg-black/30'
                    }`} />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 md:p-2">
                    <p className={`text-xs font-semibold text-center transition-colors ${
                      index === currentIndex ? 'text-cyan-300' : 'text-white'
                    }`}>
                      {t(process.titleKey as keyof TranslationKeys)}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
