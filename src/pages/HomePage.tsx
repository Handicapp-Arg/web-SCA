import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Hero, Concept, Services, Contact } from '@/components/sections';

/**
 * Home Page
 * Main website with all sections
 */
export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
