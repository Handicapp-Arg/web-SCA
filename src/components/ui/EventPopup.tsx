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

  useEffect(() => {
    // Show popup on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
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

            <div className="flex flex-col md:flex-row">
              {/* Visual Section - Image */}
              <div className="w-full md:w-6/12 h-80 md:h-auto relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=600&h=800&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-1.5 bg-accent text-white text-xs uppercase tracking-wider font-bold rounded">
                    {t('event_badge')}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {t('event_title')}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed"
                >
                  {t('event_description')}
                </motion.p>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                >
                  <button
                    onClick={handleBookMeeting}
                    className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-accent/50"
                  >
                    {t('event_cta_button')}
                  </button>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-sm">{t('event_location')}</span>
                    <span className="text-gray-400 text-xs">{t('event_dates')}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
