import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const { text, gstinLabel, gstin, addressLabel, address } = CONTENT[lang].footer;
  const { nav } = CONTENT[lang];

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
           {/* Brand Info */}
           <div>
              <h3 className="text-xl font-bold mb-4 text-brand-yellow">MS Udaipur Dental Clinic</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Providing top-quality dental care in Rajasthan. Dedicated to your smile and hygiene.</p>
           </div>
           
           {/* Links */}
           <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <div className="flex flex-col space-y-2 text-gray-300">
                <a href="#home" className="hover:text-brand-yellow transition">{nav.home}</a>
                <a href="#services" className="hover:text-brand-yellow transition">{nav.services}</a>
                <a href="#locations" className="hover:text-brand-yellow transition">{nav.locations}</a>
              </div>
           </div>

           {/* Contact */}
           <div>
             <h3 className="text-lg font-bold mb-4">Contact</h3>
             <a href="tel:+918209215744" className="text-xl font-bold text-brand-coral hover:text-white transition block mb-2">
               +91 82092 15744
             </a>
             <p className="text-gray-400 text-sm">Call us for appointments and inquiries.</p>
           </div>

           {/* Legal & Address */}
           <div>
             <h3 className="text-lg font-bold mb-4">{addressLabel}</h3>
             <p className="text-gray-300 text-sm mb-4 leading-relaxed">
               {address}
             </p>
             <div className="text-sm text-gray-400">
               <span className="font-semibold text-gray-300">{gstinLabel}:</span> {gstin}
             </div>
           </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs">
          {text}
        </div>
      </div>
    </footer>
  );
};