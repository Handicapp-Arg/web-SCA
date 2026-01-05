import React, { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Reveal Wrapper Props
 */
interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper component that reveals children on scroll
 * Uses Intersection Observer for performance
 */
export const RevealWrapper: React.FC<RevealWrapperProps> = ({ 
  children, 
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
