import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocale } from '@/hooks/useLocale';
import { ActionButton } from '@/components/ui';
import { useSEO } from '@/hooks/useSEO';
import { downloadVCard, getWhatsAppLink, getMailtoLink } from '@/lib/contactUtils';
import { companyContact, contactMessages, eventInfo } from '@/lib/connectData';

/**
 * Connect Page Component
 * Mobile-first landing page for QR code at events
 * No navigation, no footer - just quick actions
 */
export const ConnectPage: React.FC = () => {
  useSEO({
    title: 'SCA | Connect - Contacto rápido',
    description: 'Conecta con SCA en eventos: guarda contacto, WhatsApp, email y más. OEM Saddle Manufacturing.',
    image: 'https://res.cloudinary.com/dh2m9ychv/image/upload/web-sca/og-sca.webp',
    url: typeof window !== 'undefined' ? window.location.href : 'https://sca.com.ar/connect',
    lang: 'en',
  });
  const { t } = useLanguage();
  const { getLocalizedPath } = useLocale();

  /**
   * Handle save contact (download vCard)
   */
  const handleSaveContact = () => {
    downloadVCard(companyContact);
  };

  /**
   * Handle WhatsApp contact
   */
  const handleWhatsApp = () => {
    const url = getWhatsAppLink(companyContact.phone, contactMessages.whatsapp);
    window.open(url, '_blank');
  };

  /**
   * Handle email contact
   */
  const handleEmail = () => {
    const url = getMailtoLink(
      companyContact.email,
      contactMessages.email.subject,
      contactMessages.email.body
    );
    window.location.href = url;
  };

  /**
   * Handle visit website
   */
  const handleVisitWebsite = () => {
    window.location.href = getLocalizedPath('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Card Container */}
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-primary to-primary-light p-6 md:p-8 text-center">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <img
                src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/web-sca/web-sca/logoSCA%20-%20blanco.webp`}
                alt="SCA Logo"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <h1 className="text-white text-lg md:text-xl font-display font-bold mb-2">
              {t('connect_tagline')}
            </h1>
            <p className="text-white/80 text-sm font-light mb-4">
              {t('connect_subtitle')}
            </p>

            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="fas fa-calendar-check text-accent text-sm" />
              <span className="text-white text-xs font-semibold">
                {eventInfo.name} {eventInfo.year}
              </span>
            </div>
          </div>

          {/* Actions Section */}
          <div className="p-6 space-y-3">
            {/* Save Contact */}
            <ActionButton
              icon="fa-address-card"
              label={t('connect_save')}
              onClick={handleSaveContact}
              variant="primary"
            />

            {/* WhatsApp */}
            <ActionButton
              icon="fa-brands fa-whatsapp"
              label={t('connect_whatsapp')}
              onClick={handleWhatsApp}
              variant="whatsapp"
            />

            {/* Email */}
            <ActionButton
              icon="fa-envelope"
              label={t('connect_email')}
              onClick={handleEmail}
              variant="email"
            />

            {/* Visit Website */}
            <ActionButton
              icon="fa-globe"
              label={t('connect_website')}
              onClick={handleVisitWebsite}
              variant="secondary"
            />
          </div>

          {/* Footer Info */}
          <div className="px-6 pb-6 pt-2">
            <div className="text-center text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">{companyContact.company}</p>
              <p>{companyContact.address}</p>
              <p className="text-accent font-semibold">{companyContact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
