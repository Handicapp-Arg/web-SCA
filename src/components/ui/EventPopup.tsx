import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/lib/contactUtils';
import { companyContact, contactMessages } from '@/lib/connectData';

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
  const { t, language } = useLanguage();
  const navigate = useNavigate();
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
    
    // Reiniciar video del Hero en móvil cuando se cierra el popup
    setTimeout(() => {
      const video = document.querySelector('video');
      if (video) {
        video.play().catch(() => {
          // Ignorar error si el navegador bloquea autoplay
        });
      }
    }, 300);
    
    onClose?.();
  };

  const handleWhatsApp = () => {
    const message = contactMessages.whatsappPopup[language] || contactMessages.whatsappPopup.en;
    const whatsappLink = getWhatsAppLink(companyContact.phone, message);
    window.open(whatsappLink, '_blank');
    handleClose();
  };

  const handleContact = () => {
    handleClose();
    
    // Check if we're on the home page
    const currentPath = window.location.pathname;
    const isHomePage = currentPath.match(/^\/(en|es|de)\/?$/);
    
    if (isHomePage) {
      // We're on home page, just scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // We're on another page, navigate to home with contact hash
      navigate(`/${language}#contact`);
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-5 sm:p-6 md:p-8 bg-black/45 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[100] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl text-gray-800 transition-all duration-200 hover:scale-110 border border-gray-200"
                aria-label="Close popup"
              >
                <span className="text-xl sm:text-2xl leading-none font-bold">&times;</span>
              </button>

              <div className="flex flex-col md:flex-row relative">
                {/* Logo Section - SPOGA HORSE */}
                <div className="w-full md:w-5/12 p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#000f26' }}>
                  {/* Animated Border Light Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                    <motion.div
                      className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-accent to-transparent"
                      animate={{
                        y: ['-100%', '400%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Logo */}
                  <motion.div 
                    className="w-3/4 sm:w-full mb-2 sm:mb-4 md:mb-6 lg:mb-8 relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <img 
                      src="/images/spogahorse_logo.jpg" 
                      alt="SPOGA HORSE 2026" 
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>

                  {/* Stand Location & Dates with Animation */}
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-4 md:p-5 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-accent/30 shadow-lg relative overflow-hidden z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(201, 169, 97, 0.1), transparent)',
                      }}
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 2,
                      }}
                    />
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 relative z-10">
                      <i className="fas fa-map-marker-alt text-accent text-xs sm:text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="text-white font-bold text-[11px] sm:text-base md:text-lg mb-0 sm:mb-1 leading-tight">Hall 08.1 | G016</div>
                      <div className="text-gray-300 text-[9px] sm:text-sm mb-0 leading-tight hidden sm:block">Visit us at SPOGA HORSE 2026</div>
                      <div className="text-gray-400 text-[9px] sm:text-sm flex items-center gap-1 sm:gap-2 leading-tight">
                        <i className="far fa-calendar" />
                        {t('event_dates')}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="flex-1 p-3 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-center relative bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Location Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-1.5 mb-2 sm:mb-4 md:mb-6"
                    >
                      <div className="flex items-center gap-1.5 text-accent">
                        <i className="fas fa-map-marker-alt text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Colonia, Alemania</span>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 sm:mb-4 md:mb-6 leading-tight"
                    >
                      {t('event_welcome_title')}<br />
                      <span className="text-primary">{t('event_welcome_location')}</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 text-sm sm:text-base md:text-lg mb-1.5 sm:mb-3 md:mb-4 leading-snug"
                    >
                      {t('event_desc_1')} <strong className="text-gray-900">{t('event_collection')}</strong>.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="text-gray-600 text-sm sm:text-base md:text-lg mb-2.5 sm:mb-6 md:mb-10 leading-snug"
                    >
                      {t('event_desc_2')} <strong className="text-accent">{t('event_welcome_pack')}</strong> {t('event_desc_2_end')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      {/* Primary Button - Coordinar Reunión */}
                      <motion.button
                        onClick={handleContact}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary via-primary-dark to-primary text-white font-semibold py-2.5 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl relative overflow-hidden group text-xs sm:text-base"
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          }}
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1,
                          }}
                        />
                        <i className="fas fa-address-card text-sm sm:text-lg relative z-10" />
                        <span className="relative z-10 font-bold">{t('event_contact_btn').toUpperCase()}</span>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                      </motion.button>

                      {/* Secondary Button - WhatsApp */}
                      <motion.button
                        onClick={handleWhatsApp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#25D366] via-[#1ebe5d] to-[#25D366] text-white font-semibold py-2.5 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl relative overflow-hidden group text-xs sm:text-base"
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          }}
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1,
                            delay: 0.5,
                          }}
                        />
                        <i className="fab fa-whatsapp text-sm sm:text-lg relative z-10" />
                        <span className="relative z-10 font-bold">{t('event_whatsapp_btn').toUpperCase()}</span>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {showBubble && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          {/* Animated Pulse Rings */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.4, 1.4, 1],
              opacity: [0.6, 0, 0, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-accent/30 blur-sm" />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.3, 1.3, 1],
              opacity: [0.8, 0, 0, 0.8],
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-accent/40 blur-md" />
          </motion.div>

          {/* Main Floating Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -8, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              scale: { type: 'spring', stiffness: 260, damping: 20 },
              opacity: { duration: 0.3 },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
              transition: { rotate: { duration: 0.5 } }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center rounded-full shadow-2xl w-20 h-20 focus:outline-none overflow-hidden ring-2 ring-white shadow-[0_0_0_3px_rgba(0,0,0,0.15)] group"
            onClick={() => { setIsVisible(true); setShowBubble(false); }}
            aria-label="Abrir evento SPOGA HORSE 2026"
          >
            {/* Golden Glow Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ borderRadius: '50%' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 0.85, 0],
                scale: [0.7, 1.25, 1.5],
                filter: [
                  'blur(0px)',
                  'blur(16px)',
                  'blur(0px)'
                ]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: 'easeInOut',
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,215,0,0.45) 0%, rgba(255,215,0,0.15) 60%, rgba(255,215,0,0.0) 100%)',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <img 
              src="/images/spogahorse_logo.jpg" 
              alt="SPOGA HORSE 2026" 
              className="w-full h-full object-cover scale-105 relative z-10"
            />
            
            {/* Sparkle Effect */}
            <motion.div
              className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-0"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <span
              className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-white text-lg font-bold bg-gray-900/80 hover:bg-gray-900 rounded-full shadow-lg transition-all cursor-pointer z-20"
              style={{ pointerEvents: 'auto' }}
              onClick={e => { e.stopPropagation(); setShowBubble(false); }}
              aria-label="Cerrar globito flotante"
            >
              ×
            </span>
          </motion.button>
        </div>
      )}
    </>
  );
};
