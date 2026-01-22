/**
 * Language Types
 */
export type Language = 'en' | 'de' | 'es';

/**
 * Translation Keys Interface
 */
export interface TranslationKeys {
  // Navigation
  nav_factory: string;
  nav_oem: string;
  nav_quality: string;
  nav_bespoke: string;
  nav_contact: string;
  nav_concept: string;
  nav_services: string;

  // Hero Section
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_brands_btn: string;
  hero_sustainability_title: string;
  hero_facility_feat_1: string;
  hero_facility_feat_2: string;
  hero_facility_feat_3: string;
  hero_facility_feat_4: string;
  hero_ceo_unique: string;

  // Concept Section
  concept_title: string;
  concept_subtitle: string;
  concept_desc: string;
  feat_1: string;
  feat_2: string;
  feat_3: string;
  feat_4: string;
  feat_5: string;

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

  // Brands Section
  brands_title: string;
  brands_subtitle: string;
  brands_subtitle_highlight: string;
  brands_subtitle_end: string;
  brands_stat_brands: string;
  brands_stat_global: string;
  brands_stat_quality: string;
  partner_store_title: string;
  partner_store_desc: string;
  partner_store_btn: string;
  brand_saddlery_tagline: string;
  brand_hbc_tagline: string;
  brand_hilbar_tagline: string;
  brand_maxflex_tagline: string;
  brand_maxbenz_tagline: string;

  // Expertise Section
  expertise_title: string;
  expertise_subtitle: string;
  expertise_description: string;
  expertise_certified: string;
  expertise_ensuring: string;
  expertise_fit_perfectly: string;
  exp_german_title: string;
  exp_german_desc: string;
  exp_steam_title: string;
  exp_steam_desc: string;
  exp_trees_title: string;
  exp_trees_desc: string;
  ceo_bio: string;
  product_lines_title: string;
  product_lines_subtitle: string;
  cat_jumping: string;
  cat_dressage: string;
  cat_eventing: string;
  cat_polo: string;

  // Glossary Section
  glossary_title: string;
  glossary_subtitle: string;
  term_panel_title: string;
  term_panel_desc: string;
  term_fitter_title: string;
  term_fitter_desc: string;
  term_tree_title: string;
  term_tree_desc: string;
  term_oem_title: string;
  term_oem_desc: string;

  // Footer
  footer: string;

  // Connect Page
  connect_tagline: string;
  connect_subtitle: string;
  connect_save: string;
  connect_whatsapp: string;
  connect_email: string;
  connect_catalog: string;
  connect_website: string;

  // Products Section
  products_title: string;
  products_subtitle: string;
  products_desc_1: string;
  products_desc_2: string;
  products_desc_3: string;
  products_desc_4: string;
  product_view_details: string;

  // Event Popup
  event_badge: string;
  event_title: string;
  event_description: string;
  event_cta_button: string;
  event_location: string;
  event_dates: string;

  // Manufacturing Process
  manufacturing_title: string;
  manufacturing_subtitle: string;
  process_steam_title: string;
  process_steam_desc: string;
  process_trees_title: string;
  process_trees_desc: string;
  process_quality_title: string;
  process_quality_desc: string;

  // Product Value Proposition
  product_value_title: string;
  product_value_subtitle: string;
  product_feat_1_title: string;
  product_feat_1_desc: string;
  product_feat_2_title: string;
  product_feat_2_desc: string;
  product_feat_3_title: string;
  product_feat_3_desc: string;
  product_feat_4_title: string;
  product_feat_4_desc: string;

  // Bespoke Section
  bespoke_badge: string;
  bespoke_title: string;
  bespoke_subtitle: string;
  bespoke_feat_1_title: string;
  bespoke_feat_1_desc: string;
  bespoke_feat_2_title: string;
  bespoke_feat_2_desc: string;
  bespoke_feat_3_title: string;
  bespoke_feat_3_desc: string;
  bespoke_cta: string;

  // Elite Riders & Validations
  validation_title: string;
  validation_subtitle: string;
  validation_german_title: string;
  validation_german_desc: string;
  validation_fitters_title: string;
  validation_fitters_desc: string;
  validation_riders_title: string;
  validation_riders_desc: string;
  riders_title: string;
  riders_subtitle: string;
  rider_milthaler_discipline: string;
  rider_milthaler_achievements: string;
  rider_teixeira_discipline: string;
  rider_teixeira_achievements: string;

  // Enhanced OEM Section
  oem_support_title: string;
  oem_support_desc: string;

  // Team Excellence
  team_title: string;
  team_subtitle: string;
  team_experience: string;
  team_training: string;
  team_certification: string;
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

/** * Brand Interface
 */
export interface Brand {
  name: string;
  logo: string;
  url?: string;
}

/** * Feature Item Interface
 */
export interface Feature {
  icon: string;
  textKey: keyof TranslationKeys;
}
