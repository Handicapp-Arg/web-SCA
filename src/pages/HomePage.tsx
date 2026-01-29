import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { 
  Hero, 
  Concept, 
  Services, 
  ManufacturingProcess,
  Expertise, 
  EliteRiders,
  Bespoke,
  Brands, 
  Contact,
  Products 
} from '@/components/sections';
import { EventPopup } from '@/components/ui';
import { useSEO } from '@/hooks/useSEO';

/**
 * Home Page
 * Main website with all sections
 */
export const HomePage: React.FC = () => {
  useSEO({
    title: 'SCA | Saddle Company Argentina - Global OEM Manufacturing',
    description: 'SCA - Saddle Company Argentina | Global OEM Saddle Manufacturing. Your strategic partner bridging Argentine craftsmanship with European market demands.',
    image: 'https://res.cloudinary.com/dh2m9ychv/image/upload/web-sca/og-sca.webp',
    url: typeof window !== 'undefined' ? window.location.href : 'https://sca.com.ar/',
    lang: 'en', // O usar el idioma actual si está disponible
  });
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Expertise />
        <ManufacturingProcess />
        <Products />
        <Services />
        <EliteRiders />
        <Bespoke />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <EventPopup delay={1000} />
    </>
  );
};
