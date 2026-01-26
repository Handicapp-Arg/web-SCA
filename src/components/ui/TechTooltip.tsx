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
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    // Detectar si es móvil
    setIsMobile(window.innerWidth < 640);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <>
      <span className="relative inline-block group">
        {/* Trigger - Desktop: hover, Mobile: click */}
        <span
          onMouseEnter={() => !isMobile && setIsVisible(true)}
          onMouseLeave={() => !isMobile && setIsVisible(false)}
          onClick={isMobile ? handleToggle : undefined}
          className="border-b-2 border-dotted border-accent cursor-help text-accent hover:text-accent/80 transition-colors duration-200 font-semibold select-none"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {children || term}
        </span>

        {/* Desktop Tooltip - hover */}
        {isVisible && !isMobile && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 pointer-events-none" style={{ zIndex: 50 }}>
            <div className="bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-accent relative w-[320px]">
              <div className="text-accent font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <i className="fas fa-book-open" />
                <span>{term}</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {definition}
              </p>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px]">
                <div className="w-4 h-4 bg-gray-900 border-b-2 border-r-2 border-accent transform rotate-45" />
              </div>
            </div>
          </div>
        )}
      </span>

      {/* Mobile Modal - click */}
      {isVisible && isMobile && typeof window !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50" 
          onClick={handleToggle}
        >
          <div 
            className="bg-gray-900 text-white px-5 py-4 rounded-lg shadow-2xl border-2 border-accent relative max-w-[320px] w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleToggle}
              className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <i className="fas fa-times text-sm" />
            </button>
            
            {/* Content */}
            <div className="text-accent font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2 pr-8">
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
    </>
  );
};
