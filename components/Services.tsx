import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import { Smile, Anchor, Scissors, Zap, Activity, Shield, Users, Syringe } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Anchor': return <Anchor size={32} />;
    case 'Smile': return <Smile size={32} />;
    case 'Users': return <Users size={32} />;
    case 'Zap': return <Zap size={32} />;
    case 'Syringe': return <Syringe size={32} />;
    case 'Activity': return <Activity size={32} />;
    case 'Scissors': return <Scissors size={32} />;
    case 'Shield': return <Shield size={32} />;
    default: return <Smile size={32} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const { title, items } = CONTENT[lang].services;

  return (
    <section id="services" className="py-16 bg-brand-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-blue text-center mb-12 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-coral">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-lg font-semibold text-brand-grey group-hover:text-brand-navy">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};