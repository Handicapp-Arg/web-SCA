import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface TechTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

/**
 * TechTooltip Component
 * Interactive tooltip for technical terms with hover effect
 */
export const TechTooltip: React.FC<TechTooltipProps> = ({ term, definition, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current && isVisible) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.left + rect.width / 2 + window.scrollX
        });
      }
    };

    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipContent = isVisible ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15 }}
        className="fixed pointer-events-none"
        style={{
          zIndex: 999999,
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: 'translate(-50%, calc(-100% - 12px))',
        }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-5 py-4 rounded-xl shadow-2xl border border-accent/40 w-[320px]">
          {/* Content */}
          <div className="text-accent font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
            <i className="fas fa-book-open text-xs" />
            <span>{term}</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            {definition}
          </p>
          
          {/* Arrow pointing DOWN to the word */}
          <div className="absolute top-full left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 bg-gray-900 border-b border-r border-accent/40 transform rotate-45 -mt-[9px]" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="border-b-2 border-dotted border-accent/60 cursor-help text-accent hover:text-accent/80 transition-colors duration-200 font-medium inline-block"
      >
        {children || term}
      </span>
      {typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}
    </>
  );
};
