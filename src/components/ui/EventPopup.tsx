import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventPopupProps {
  /** Delay in milliseconds before showing the popup */
  delay?: number;
  /** Optional callback when popup is closed */
  onClose?: () => void;
}

/**
 * EventPopup Component
 * Promotional popup for SPOGA HORSE 2025 event
 * Features localStorage persistence to avoid showing multiple times
 */
export const EventPopup: React.FC<EventPopupProps> = ({ delay = 2000, onClose }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show popup on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    setShowBubble(true);
    onClose?.();
  };

  const handleBookMeeting = () => {
    handleClose();
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
                aria-label="Close popup"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>

              {/* Premium Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0L60 30L30 60L0 30z' stroke='%23C9A961' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }} />
              </div>

              <div className="flex flex-col md:flex-row relative">
                {/* Visual Section - Premium Gradient & Image */}
                <div className="w-full md:w-5/12 h-96 md:h-auto relative overflow-hidden">
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary to-black">
                    <div className="absolute inset-0" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=800&h=1000&fit=crop&q=90')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mixBlendMode: 'overlay',
                      opacity: 0.6
                    }} />
                  </div>
                  
                  {/* Premium Badge on Image */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-gradient-to-r from-accent via-accent to-accent/80 text-white px-6 py-3 rounded-lg shadow-2xl border border-accent/30">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-trophy text-lg" />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest opacity-90">World Premier Event</div>
                          <div className="text-sm font-bold">SPOGA HORSE 2026</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-tl-full" />
                </div>

                {/* Content Section - Enhanced */}
                <div className="flex-1 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
                  {/* Decorative Line */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-transparent" />
                    <span className="text-accent text-xs uppercase tracking-[0.2em] font-bold">Cologne, Germany</span>
                  </div>

                  {/* Title - Enhanced */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
                  >
                    {t('event_title')}
                  </motion.h2>

                  {/* Description - Enhanced */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-light"
                  >
                    {t('event_description')}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 mb-10"
                  >
                    <div className="flex items-center gap-2 text-gray-400">
                      <i className="fas fa-star text-accent" />
                      <span className="text-sm">Premium Saddles</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <i className="fas fa-globe text-accent" />
                      <span className="text-sm">Global Presence</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <i className="fas fa-award text-accent" />
                      <span className="text-sm">Argentine Craftsmanship</span>
                    </div>
                  </motion.div>

                  {/* CTA Section - Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                  >
                    <button
                      onClick={handleBookMeeting}
                      className="group relative px-10 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-accent/50 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3 text-lg">
                        <i className="fas fa-calendar-check" />
                        {t('event_cta_button')}
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                    
                    {/* Location & Dates - Premium */}
                    <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-map-marker-alt text-accent text-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-base">{t('event_location')}</div>
                        <div className="text-gray-400 text-sm flex items-center gap-2">
                          <i className="far fa-calendar" />
                          {t('event_dates')}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {showBubble && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center bg-gradient-to-br from-accent to-yellow-600 text-white rounded-full shadow-2xl w-14 h-14 hover:scale-110 focus:outline-none"
          onClick={() => { setIsVisible(true); setShowBubble(false); }}
          aria-label="Abrir evento SPOGA HORSE 2026"
        >
          <i className="fas fa-trophy text-2xl" />
          <span
            className="absolute -top-2 -right-2 text-gray-200 hover:text-white text-base font-bold transition-colors bg-transparent p-0 border-none"
            style={{ pointerEvents: 'auto' }}
            onClick={e => { e.stopPropagation(); setShowBubble(false); }}
            aria-label="Cerrar globito flotante"
          >
            ×
          </span>
        </motion.button>
      )}
    </>
  );
};
