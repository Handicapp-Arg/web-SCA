import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Outlet } from 'react-router-dom';

/**
 * MainLayout: Layout global con Navbar y Footer para toda la web
 */
export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
