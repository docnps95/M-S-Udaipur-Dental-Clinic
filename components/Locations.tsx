import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import { MapPin, Clock } from 'lucide-react';

interface LocationsProps {
  lang: Language;
}

export const Locations: React.FC<LocationsProps> = ({ lang }) => {
  const { title, phalasiya, jhadol } = CONTENT[lang].locations;

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-blue text-center mb-12 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-coral">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phalasiya Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-brand-yellow transform transition hover:-translate-y-2 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={phalasiya.image} 
                alt={phalasiya.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white text-xl font-bold shadow-sm">{phalasiya.name}</h3>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-start mb-4">
                <Clock className="text-brand-coral mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-grey text-sm uppercase tracking-wide opacity-70">Timings / समय</p>
                  <p className="text-lg font-medium text-brand-navy">{phalasiya.time}</p>
                </div>
              </div>

              <div className="flex items-start mb-6 flex-grow">
                <MapPin className="text-brand-coral mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-grey text-sm uppercase tracking-wide opacity-70">Address / पता</p>
                  <p className="text-lg font-medium text-brand-navy">{phalasiya.address}</p>
                </div>
              </div>

              <a 
                href={phalasiya.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Jhadol Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-brand-navy transform transition hover:-translate-y-2 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={jhadol.image} 
                alt={jhadol.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white text-xl font-bold shadow-sm">{jhadol.name}</h3>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-start mb-4">
                <Clock className="text-brand-coral mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-grey text-sm uppercase tracking-wide opacity-70">Timings / समय</p>
                  <p className="text-lg font-medium text-brand-navy">{jhadol.time}</p>
                </div>
              </div>

              <div className="flex items-start mb-6 flex-grow">
                <MapPin className="text-brand-coral mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-grey text-sm uppercase tracking-wide opacity-70">Address / पता</p>
                  <p className="text-lg font-medium text-brand-navy">{jhadol.address}</p>
                </div>
              </div>

              <a 
                href={jhadol.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};