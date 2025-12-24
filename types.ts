export type Language = 'en' | 'hi';

export interface ContentData {
  nav: {
    home: string;
    services: string;
    locations: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    phone: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  locations: {
    title: string;
    phalasiya: LocationDetails;
    jhadol: LocationDetails;
  };
  about: {
    title: string;
    doctorName: string;
    degree: string;
    description: string;
  };
  footer: {
    text: string;
    gstinLabel: string;
    gstin: string;
    addressLabel: string;
    address: string;
  };
  chat: {
    title: string;
    subtitle: string;
    whatsapp: string;
    call: string;
  };
}

export interface ServiceItem {
  id: number;
  title: string;
  icon: string;
}

export interface LocationDetails {
  name: string;
  time: string;
  address: string;
  mapLink: string;
  image: string;
}