import React, { useState } from 'react';

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

  return (
    <span className="relative inline-block group">
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="border-b-2 border-dotted border-accent cursor-help text-accent hover:text-accent/80 transition-colors duration-200 font-semibold"
      >
        {children || term}
      </span>

      {/* Tooltip */}
      {isVisible && (
        <div
          className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 999999 }}
        >
          <div className="bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-accent w-[320px]">
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
    </span>
  );
};
