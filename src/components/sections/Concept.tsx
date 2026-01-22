import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper, TechTooltip } from '@/components/ui';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
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
              
              <div className="text-lg text-gray-600 mb-8 leading-relaxed">
                <p>
                  {t('concept_desc').split('saddle fitters')[0]}
                  <TechTooltip 
                    term={t('term_fitter_title')}
                    definition={t('term_fitter_desc')}
                  >
                    saddle fitters
                  </TechTooltip>
                  {t('concept_desc').split('saddle fitters')[1]}
                </p>
              </div>

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
                src="/images/care_02.webp"
                alt="Saddle Craftsmanship"
                className="rounded-sm shadow-2xl w-full h-auto object-cover"
                style={{ boxShadow: '30px 30px 0px rgba(0,0,0,0.05)' }}
              />
            </div>
          </RevealWrapper>
        </div>

        {/* Facility Showcase */}
        <RevealWrapper delay={300}>
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {t('hero_sustainability_title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <ImagePlaceholder
                  aspectRatio={4 / 3}
                  label="Factory Exterior"
                  icon="fa-industry"
                  gradient="from-primary/10 to-accent/10"
                />
                <p className="text-center text-sm font-semibold text-gray-700">
                  Model Facility
                </p>
              </div>
              <div className="space-y-3">
                <ImagePlaceholder
                  aspectRatio={4 / 3}
                  label="Modern Offices"
                  icon="fa-building"
                  gradient="from-accent/10 to-primary/10"
                />
                <p className="text-center text-sm font-semibold text-gray-700">
                  Professional Workspace
                </p>
              </div>
              <div className="space-y-3">
                <ImagePlaceholder
                  aspectRatio={4 / 3}
                  label="Team Working"
                  icon="fa-users"
                  gradient="from-primary/10 to-accent/10"
                />
                <p className="text-center text-sm font-semibold text-gray-700">
                  Expert Craftsmen
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
