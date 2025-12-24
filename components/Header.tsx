import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  toggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const text = CONTENT[lang].nav;

  return (
    <header className="fixed w-full z-50 bg-brand-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo area */}
        <div className="flex items-center space-x-2">
          <div className="bg-brand-blue p-2 rounded-lg">
             {/* Using a simple text logo representation */}
             <span className="text-white font-bold text-xl">MS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-brand-navy leading-tight">Udaipur Dental</span>
            <span className="text-xs text-brand-grey">Clinic</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-brand-navy hover:text-brand-blue font-medium">{text.home}</a>
          <a href="#services" className="text-brand-navy hover:text-brand-blue font-medium">{text.services}</a>
          <a href="#locations" className="text-brand-navy hover:text-brand-blue font-medium">{text.locations}</a>
          <a href="#about" className="text-brand-navy hover:text-brand-blue font-medium">{text.about}</a>
          
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 border border-brand-blue text-brand-blue rounded hover:bg-brand-blue hover:text-white transition"
          >
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>

          <a href="tel:+918209215744" className="bg-brand-coral hover:bg-red-500 text-white px-4 py-2 rounded-full font-semibold flex items-center shadow-lg transition transform hover:scale-105">
            <Phone size={16} className="mr-2" />
            {text.bookNow}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={toggleLanguage}
            className="text-sm font-semibold text-brand-blue"
          >
            {lang === 'en' ? 'HI' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-white border-t border-gray-100 absolute w-full pb-4 shadow-lg">
          <div className="flex flex-col px-4 pt-2 space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy border-b border-gray-100">{text.home}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy border-b border-gray-100">{text.services}</a>
            <a href="#locations" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy border-b border-gray-100">{text.locations}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy border-b border-gray-100">{text.about}</a>
            <a href="tel:+918209215744" className="bg-brand-coral text-white py-3 rounded text-center font-bold mt-2">
              {text.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};