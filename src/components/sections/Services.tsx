import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { services } from '@/data/constants';

/**
 * Service Card Component
 */
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => (
  <RevealWrapper delay={delay}>
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/8 hover:border-accent group">
      <div className="inline-flex items-center justify-center bg-accent/10 text-accent rounded-xl p-4 mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
        <i className={`fas ${icon} text-3xl md:text-4xl`} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </RevealWrapper>
);

/**
 * Services Section Component
 * Dark section showcasing company capabilities
 */
export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-primary overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <SectionHeader title={t('services_title')} light />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
