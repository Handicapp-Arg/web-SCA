import { useEffect, useState, RefObject } from 'react';

/**
 * Options for the useScrollReveal hook
 */
interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook to reveal elements on scroll
 * Uses Intersection Observer API for better performance
 * 
 * @param ref - Reference to the element to observe
 * @param options - Intersection Observer options
 * @returns boolean indicating if element is visible
 */
export const useScrollReveal = (
  ref: RefObject<HTMLElement>,
  options: UseScrollRevealOptions = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.2, rootMargin = '50px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (performance optimization)
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return isVisible;
};
