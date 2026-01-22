import React from 'react';
import { motion } from 'framer-motion';

interface ImagePlaceholderProps {
  /** Aspect ratio (w/h) */
  aspectRatio?: number;
  /** Optional description for placeholder */
  label?: string;
  /** Icon class (Font Awesome) */
  icon?: string;
  /** Background gradient classes */
  gradient?: string;
  /** Additional classes */
  className?: string;
}

/**
 * ImagePlaceholder Component
 * Professional placeholder for images to be loaded later
 * Maintains aspect ratio and provides visual feedback
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = 16 / 9,
  label,
  icon = 'fa-image',
  gradient = 'from-gray-200 to-gray-300',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full bg-gradient-to-br ${gradient} rounded-lg overflow-hidden ${className}`}
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <i className={`fas ${icon} text-5xl text-gray-400 mb-4`} />
          {label && (
            <p className="text-sm text-gray-500 font-medium">{label}</p>
          )}
        </motion.div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-dashed border-gray-400 opacity-30 rounded-lg" />
      </div>
    </div>
  );
};
