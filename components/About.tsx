import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const { title, doctorName, degree, description } = CONTENT[lang].about;

  return (
    <section id="about" className="py-16 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-yellow/10 rounded-3xl p-8 md:p-12 border border-brand-yellow/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-white shadow-xl">
                 <img src="https://picsum.photos/400/400" alt={doctorName} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-brand-blue mb-2">{title}</h2>
              <h3 className="text-2xl font-semibold text-brand-navy">{doctorName}</h3>
              <p className="text-brand-coral font-bold text-lg mb-4">{degree}</p>
              <div className="w-16 h-1 bg-brand-blue mx-auto md:mx-0 mb-6"></div>
              <p className="text-brand-grey text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};