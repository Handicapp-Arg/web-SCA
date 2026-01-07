import React, { useState } from 'react';
import { createPortal } from 'react-dom';

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
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const handleMobileClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  // Cerrar al hacer click fuera
  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <span className="relative inline-block group" ref={tooltipRef}>
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleMobileClick}
        className="border-b-2 border-dotted border-accent cursor-help text-accent hover:text-accent/80 transition-colors duration-200 font-semibold select-none"
      >
        {children || term}
      </span>

      {/* Desktop Tooltip */}
      {isVisible && (
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 pointer-events-none" style={{ zIndex: 999999 }}>
          <div className="bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-accent relative w-[320px] pointer-events-auto">
            {/* Content */}
            <div className="text-accent font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
              <i className="fas fa-book-open" />
              <span>{term}</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {definition}
            </p>
            
            {/* Arrow pointing DOWN to the word */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px]">
              <div className="w-4 h-4 bg-gray-900 border-b-2 border-r-2 border-accent transform rotate-45" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Modal - using Portal */}
      {isVisible && typeof window !== 'undefined' && createPortal(
        <div className="sm:hidden fixed inset-0 bg-black/60 flex items-center justify-center px-4" style={{ zIndex: 999998 }} onClick={() => setIsVisible(false)}>
          <div 
            className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl border-2 border-accent relative max-w-[320px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            >
              <i className="fas fa-times text-xs" />
            </button>
            
            {/* Content */}
            <div className="text-accent font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2 pr-6">
              <i className="fas fa-book-open" />
              <span className="truncate">{term}</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {definition}
            </p>
          </div>
        </div>,
        document.body
      )}
    </span>
  );
};
