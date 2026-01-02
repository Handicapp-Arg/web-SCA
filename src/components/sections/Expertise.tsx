import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import type { TranslationKeys } from '@/types';

/**
 * Expertise Section Component
 * Technical excellence features, CEO spotlight, and product gallery
 */
export const Expertise: React.FC = () => {
  const { t } = useLanguage();

  const features: Array<{ icon: string; titleKey: keyof TranslationKeys; descKey: keyof TranslationKeys }> = [
    { icon: 'fa-certificate', titleKey: 'exp_german_title', descKey: 'exp_german_desc' },
    { icon: 'fa-wind', titleKey: 'exp_steam_title', descKey: 'exp_steam_desc' },
    { icon: 'fa-tools', titleKey: 'exp_trees_title', descKey: 'exp_trees_desc' },
  ];

  const products: Array<{ imageKey: keyof TranslationKeys; image: string }> = [
    { imageKey: 'cat_jumping', image: '/images/montura_salto.jpg' },
    { imageKey: 'cat_dressage', image: '/images/montura_adistramiento.jpg' },
    { imageKey: 'cat_eventing', image: '/images/montura_todoproposito.jpg' },
    { imageKey: 'cat_polo', image: '/images/montura_trekking.jpg' },
  ];

  return (
    <section
      id="expertise"
      className="py-20 md:py-32 bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader title={t('expertise_title')} />
        </RevealWrapper>

        {/* Features Grid */}
        <RevealWrapper delay={100}>
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-sm p-8 md:p-10 text-center hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 text-3xl">
                  <i className={`fas ${feature.icon}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* CEO Spotlight */}
        <RevealWrapper delay={200}>
          <div className="bg-gray-50 border-t-4 border-accent rounded-sm p-8 md:p-10 mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="text-accent text-5xl md:text-6xl min-w-[60px] text-center">
                <i className="fas fa-user-tie" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Santiago A. Salerno
                </h3>
                <span className="inline-block text-xs uppercase tracking-wider text-accent font-bold mb-4">
                  {t('role_partner')}
                </span>
                <p className="text-base md:text-lg text-gray-600 italic leading-relaxed">
                  {t('ceo_bio')}
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Product Gallery */}
        <RevealWrapper delay={300}>
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            {t('product_lines_title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-sm group aspect-square"
              >
                <img
                  src={product.image}
                  alt={t(product.imageKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-all duration-300 group-hover:from-accent/80">
                  <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {t(product.imageKey)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
