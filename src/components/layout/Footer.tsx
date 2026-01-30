import React from 'react';

/**
 * Footer Component
 * Simple, professional footer with copyright info
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-500 py-10 text-center border-t border-gray-800" role="contentinfo" aria-label="SCA Footer">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} <span className="font-semibold text-gray-400">SCA - Saddle Company Argentina</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
