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
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0, featured = false }) => (
  <RevealWrapper delay={delay}>
    <div className={`h-full backdrop-blur-sm border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 group flex flex-col ${
      featured 
        ? 'bg-gradient-to-br from-accent/20 to-accent/10 border-accent/40 hover:border-accent hover:shadow-2xl hover:shadow-accent/30' 
        : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-accent hover:shadow-lg hover:shadow-accent/20'
    }`}>
      {featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Featured
        </div>
      )}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-all duration-300 ${
        featured 
          ? 'bg-accent text-white' 
          : 'bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white'
      }`}>
        <i className={`fas ${icon} text-3xl`} />
      </div>
      
      <h3 className={`text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors ${
        featured ? 'text-accent' : 'text-white'
      }`}>
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed flex-grow">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              delay={index * 100}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
