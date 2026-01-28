import type { Service, ContactInfo, Feature } from '@/types';

/**
 * Services data for the Services section
 */
export const services: Service[] = [
  {
    icon: 'fa-drafting-compass',
    titleKey: 'srv_1_title',
    descKey: 'srv_1_desc',
  },
  {
    icon: 'fa-horse-head',
    titleKey: 'srv_2_title',
    descKey: 'srv_2_desc',
  },
  {
    icon: 'fa-globe-europe',
    titleKey: 'srv_3_title',
    descKey: 'srv_3_desc',
  },
];

/**
 * Contact information for different locations
 */
export const contacts: ContactInfo[] = [
  {
    country: 'Argentina',
    flag: '🇦🇷',
    titleKey: 'contact_arg_title',
    location: 'Buenos Aires, Argentina',
    name: 'Santiago A. Salerno',
    roleKey: 'role_partner',
    address: 'Cochabamba 476, Villa Martelli, BA.',
    phone: '+5401156650533',
    email: 'santiago@horsebrandcompany.com.ar',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    titleKey: 'contact_de_title',
    location: 'Walsrode, Deutschland',
    name: 'Anoush Bargh',
    roleKey: 'role_partner_2',
    address: 'Sieverdingen 4, 29664 Walsrode.',
    phone: '+4905168919811',
    email: 'info@hilbar.de',
  },
];

/**
 * Features for the Concept section
 */
export const features: Feature[] = [
  { icon: 'fa-check-circle', textKey: 'feat_1' },
  { icon: 'fa-check-circle', textKey: 'feat_2' },
  { icon: 'fa-check-circle', textKey: 'feat_3' },
  { icon: 'fa-check-circle', textKey: 'feat_4' },
  { icon: 'fa-check-circle', textKey: 'feat_5' },
];
