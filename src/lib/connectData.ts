import type { ContactData } from '@/lib/contactUtils';

/**
 * Company contact information for SCA
 */
export const companyContact: ContactData = {
  name: 'Santiago A. Salerno',
  company: 'SCA - Saddle Company Argentina',
  position: 'Managing Partner',
  email: 'santiago@horsebrandcompany.com.ar',
  phone: '+5401156650533',
  website: 'https://www.sca-saddles.com',
  address: 'Cochabamba 478, Villa Martelli, Buenos Aires, Argentina',
};

/**
 * Event information
 */
export const eventInfo = {
  name: 'Spoga Horse',
  location: 'Cologne, Germany',
  year: 2026,
};

/**
 * Pre-defined messages for contact
 */
export const contactMessages = {
  whatsapp: `Hi, we met at ${eventInfo.name} ${eventInfo.location}. I'd like more information about SCA products.`,
  email: {
    subject: `${eventInfo.name} ${eventInfo.year} - Information Request`,
    body: `Hi,\n\nWe met at ${eventInfo.name} in ${eventInfo.location}.\n\nI'd like to learn more about your OEM saddle manufacturing services.\n\nBest regards,`,
  },
};

/**
 * PDF catalog path
 */
export const catalogPDF = '/documents/SCA_Catalog.pdf';
