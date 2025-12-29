/**
 * Language Types
 */
export type Language = 'en' | 'de' | 'es';

/**
 * Translation Keys Interface
 */
export interface TranslationKeys {
  // Navigation
  nav_concept: string;
  nav_services: string;
  nav_contact: string;

  // Hero Section
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;

  // Concept Section
  concept_title: string;
  concept_subtitle: string;
  concept_desc: string;
  feat_1: string;
  feat_2: string;
  feat_3: string;
  feat_4: string;

  // Services Section
  services_title: string;
  srv_1_title: string;
  srv_1_desc: string;
  srv_2_title: string;
  srv_2_desc: string;
  srv_3_title: string;
  srv_3_desc: string;

  // Contact Section
  contact_title: string;
  contact_arg_title: string;
  contact_de_title: string;
  role_partner: string;
  role_partner_2: string;

  // Footer
  footer: string;
}

/**
 * Translations Object
 */
export type Translations = Record<Language, TranslationKeys>;

/**
 * Service Card Interface
 */
export interface Service {
  icon: string;
  titleKey: keyof TranslationKeys;
  descKey: keyof TranslationKeys;
}

/**
 * Contact Information Interface
 */
export interface ContactInfo {
  country: string;
  flag: string;
  titleKey: keyof TranslationKeys;
  location: string;
  name: string;
  roleKey: keyof TranslationKeys;
  address: string;
  phone: string;
  email: string;
}

/**
 * Feature Item Interface
 */
export interface Feature {
  icon: string;
  textKey: keyof TranslationKeys;
}
