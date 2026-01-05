import React from 'react';

/**
 * Section Header Props
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

/**
 * Reusable Section Header Component
 * Used across different sections for consistent styling
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  light = false,
  className = '',
}) => {
  return (
    <div className={`text-center mb-16 md:mb-20 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
