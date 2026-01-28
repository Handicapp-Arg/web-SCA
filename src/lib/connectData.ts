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
  website: 'https://www.saddlecompanyargentina.com/en',
  address: 'Cochabamba 476, Villa Martelli, Buenos Aires, Argentina',
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
  whatsappPopup: {
    en: `Hi, I'll be at SPOGA HORSE 2026 and would like to schedule a meeting at your stand.`,
    de: `Hallo, ich werde auf der SPOGA HORSE 2026 sein und würde gerne ein Treffen an Ihrem Stand vereinbaren.`,
    es: `Hola, estaré en SPOGA HORSE 2026 y me gustaría coordinar una reunión en su stand.`,
  },
  email: {
    subject: `${eventInfo.name} ${eventInfo.year} - Information Request`,
    body: `Hi,\n\nWe met at ${eventInfo.name} in ${eventInfo.location}.\n\nI'd like to learn more about your OEM saddle manufacturing services.\n\nBest regards,`,
  },
};

/**
 * PDF catalog path
 */
export const catalogPDF = '/documents/SCA_Catalog.pdf';
