import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { contacts } from '@/data/constants';
import type { ContactInfo } from '@/types';

/**
 * Contact Card Component
 */
interface ContactCardProps {
  contact: ContactInfo;
  delay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, delay = 0 }) => {
  const { t } = useLanguage();

  return (
    <RevealWrapper delay={delay}>
      <div className="h-full bg-white/5 backdrop-blur-sm border-t-4 border-accent p-8 md:p-10 rounded-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
          <span className="text-5xl">{contact.flag}</span>
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-1">
              {t(contact.titleKey)}
            </h3>
            <span className="text-sm text-accent font-bold uppercase tracking-wider">
              {contact.location}
            </span>
          </div>
        </div>

        {/* Person Info */}
        <div className="mb-8">
          <span className="block text-xl md:text-2xl font-display font-bold text-white mb-1">
            {contact.name}
          </span>
          <span className="text-xs uppercase tracking-wider text-gray-400">
            {t(contact.roleKey)}
          </span>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 flex-grow">
          {/* Address */}
          <div className="flex items-start gap-4 text-gray-300">
            <i className="fas fa-map-marker-alt text-accent mt-1 w-5" />
            <span className="whitespace-pre-line leading-relaxed">
              {contact.address}
            </span>
          </div>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-4 text-gray-300 hover:text-white hover:pl-2 transition-all"
          >
            <i className="fas fa-phone text-accent w-5" />
            <span>{contact.phone}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 text-gray-300 hover:text-white hover:pl-2 transition-all break-all"
          >
            <i className="fas fa-envelope text-accent w-5" />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>
    </RevealWrapper>
  );
};

/**
 * Contact Section Component
 * Displays global contact information
 */
export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 text-white"
      style={{
        backgroundColor: '#0f0f0f',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(/images/care_04.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader title={t('contact_title')} light />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 items-stretch">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};
