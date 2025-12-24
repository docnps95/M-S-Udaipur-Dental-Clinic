import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en'); // Default to English

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-white">
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Locations lang={lang} />
        <About lang={lang} />
      </main>
      <Footer lang={lang} />
      <ChatWidget lang={lang} />
    </div>
  );
}