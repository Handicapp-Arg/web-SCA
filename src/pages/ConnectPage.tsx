import React from 'react';
import { ActionButton } from '@/components/ui';
import { downloadVCard, getWhatsAppLink, getMailtoLink } from '@/lib/contactUtils';
import { companyContact, contactMessages, catalogPDF, eventInfo } from '@/lib/connectData';

/**
 * Connect Page Component
 * Mobile-first landing page for QR code at events
 * No navigation, no footer - just quick actions
 */
export const ConnectPage: React.FC = () => {
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
   * Handle view catalog
   */
  const handleViewCatalog = () => {
    window.open(catalogPDF, '_blank');
  };

  /**
   * Handle visit website
   */
  const handleVisitWebsite = () => {
    window.location.href = '/';
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
                src="/images/logoSCA - blanco.png"
                alt="SCA Logo"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <h1 className="text-white text-lg md:text-xl font-display font-bold mb-2">
              Global OEM Saddle Manufacturing
            </h1>
            <p className="text-white/80 text-sm font-light mb-4">
              Premium craftsmanship from Argentina to the world
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
              label="Save Contact"
              onClick={handleSaveContact}
              variant="primary"
            />

            {/* WhatsApp */}
            <ActionButton
              icon="fa-brands fa-whatsapp"
              label="WhatsApp"
              onClick={handleWhatsApp}
              variant="whatsapp"
            />

            {/* Email */}
            <ActionButton
              icon="fa-envelope"
              label="Send Email"
              onClick={handleEmail}
              variant="email"
            />

            {/* View Catalog */}
            <ActionButton
              icon="fa-file-pdf"
              label="View Catalog"
              onClick={handleViewCatalog}
              variant="secondary"
            />

            {/* Visit Website */}
            <ActionButton
              icon="fa-globe"
              label="Visit Website"
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

        {/* Bottom Note */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            Tap any button to connect with us instantly
          </p>
        </div>
      </div>
    </div>
  );
};
