import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';

/**
 * Brands Section Component
 * Displays company owned brands and partner store link
 */
export const Brands: React.FC = () => {
  const { t } = useLanguage();

  const brands = [
    { name: 'CANAVES', logo: '/images/canaves.png' },
    { name: 'HBC', logo: '/images/HBC.png' },
    { name: 'HILBAR', logo: '/images/hilbar.png' },
    { name: 'MAXFLEX', logo: '/images/maxflex.png' },
  ];

  return (
    <section
      id="brands"
      className="py-20 md:py-32 bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader title={t('brands_title')} />
        </RevealWrapper>

        {/* Brands Grid */}
        <RevealWrapper delay={100}>
          <div className="max-w-5xl mx-auto mt-12 mb-12">
            {/* First 4 brands in 2x2 grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-sm p-8 flex items-center justify-center min-h-[160px] hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[85%] max-h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* MAX BENZ - Full width centered */}
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-sm p-8 flex items-center justify-center min-h-[160px] hover:border-accent hover:shadow-lg transition-all duration-300 w-full md:w-1/2">
                <img
                  src="/images/maxbenz.png"
                  alt="MAX BENZ"
                  className="max-w-[85%] max-h-32 object-contain brightness-0 opacity-60"
                />
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Partner Store Link - Dark Box */}
        <RevealWrapper delay={200}>
          <div className="max-w-5xl mx-auto bg-primary border-t-4 border-accent rounded-sm p-10 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('partner_store_title')}
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-8">
                {t('partner_store_desc')}
              </p>
              <a
                href="https://sattelmanufaktur-bargh.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 border-2 border-accent text-accent rounded-sm hover:bg-accent hover:text-white transition-all duration-300 font-semibold text-sm md:text-base tracking-wider uppercase"
              >
                <span>sattelmanufaktur-bargh.de</span>
                <i className="fas fa-external-link-alt text-xs" />
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
