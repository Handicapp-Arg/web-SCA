import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { features } from '@/data/constants';

/**
 * Concept Section Component
 * Explains the hybrid business model
 */
export const Concept: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="concept"
      className="py-20 md:py-32 bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader title={t('concept_title')} />
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <RevealWrapper delay={100}>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 leading-tight">
                {t('concept_subtitle')}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('concept_desc')}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className={`fas ${feature.icon} text-accent text-xl`} />
                    <span className="font-semibold text-primary">
                      {t(feature.textKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Image */}
          <RevealWrapper delay={200}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1612458784263-d73c24e650d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Saddle Craftsmanship"
                className="rounded-sm shadow-2xl"
                style={{ boxShadow: '30px 30px 0px rgba(0,0,0,0.05)' }}
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};
