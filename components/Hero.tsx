import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import { Phone } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const text = CONTENT[lang].hero;

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-yellow relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-coral opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            {text.title}
          </h1>
          <p className="text-brand-navy text-lg md:text-xl mb-8 font-medium">
            {text.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="tel:+918209215744" 
              className="bg-brand-coral text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-red-500 transition transform hover:-translate-y-1 flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              {text.cta}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
           {/* Placeholder for a clinic or doctor image */}
           <div className="w-full max-w-md h-64 md:h-80 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white flex items-center justify-center relative">
              <img 
                src="https://picsum.photos/600/400" 
                alt="Clinic" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 w-full bg-brand-navy bg-opacity-80 p-4 text-white text-center">
                 <p className="font-bold text-lg">Dr. Nagendra Pratap Singh</p>
                 <p className="text-sm opacity-90">BDS (Oro Surgeon)</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};