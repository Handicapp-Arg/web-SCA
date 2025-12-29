/**
 * Contact Information Interface
 */
export interface ContactData {
  name: string;
  company: string;
  position?: string;
  email: string;
  phone: string;
  website?: string;
  address?: string;
}

/**
 * Generate vCard file content (VCF format)
 * @param contact Contact information object
 * @returns vCard formatted string
 */
export const generateVCard = (contact: ContactData): string => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.name}`,
    `ORG:${contact.company}`,
    contact.position ? `TITLE:${contact.position}` : '',
    `EMAIL:${contact.email}`,
    `TEL:${contact.phone}`,
    contact.website ? `URL:${contact.website}` : '',
    contact.address ? `ADR:;;${contact.address}` : '',
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\n');

  return vcard;
};

/**
 * Download vCard file
 * @param contact Contact information
 * @param filename Optional filename (defaults to company name)
 */
export const downloadVCard = (contact: ContactData, filename?: string): void => {
  const vcard = generateVCard(contact);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename || `${contact.company.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Generate WhatsApp link with pre-filled message
 * @param phone Phone number (international format without +)
 * @param message Pre-filled message
 * @returns WhatsApp URL
 */
export const getWhatsAppLink = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

/**
 * Generate mailto link with pre-filled subject and body
 * @param email Email address
 * @param subject Email subject
 * @param body Email body
 * @returns Mailto URL
 */
export const getMailtoLink = (email: string, subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};
