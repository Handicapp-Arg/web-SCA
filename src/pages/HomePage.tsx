import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Hero, Concept, Services, Expertise, Brands, Contact } from '@/components/sections';
import { EventPopup } from '@/components/ui';

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
        <Expertise />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <EventPopup delay={1000} />
    </>
  );
};
