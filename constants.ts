import { ContentData } from './types';
import { Syringe, Smile, Anchor, Scissors, Zap, Activity, Shield, Users } from 'lucide-react';

export const COLORS = {
  bannerYellow: '#FED967',
  headingBlue: '#004A99',
  popsicleCoral: '#F57C7C',
  corporateNavy: '#2B4162',
  bodyGrey: '#4A4A4A',
  cleanWhite: '#FFFFFF',
};

export const CONTENT: Record<'en' | 'hi', ContentData> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      locations: "Locations",
      about: "About Doctor",
      contact: "Contact",
      bookNow: "Call Now"
    },
    hero: {
      title: "Your Smile, Our Priority",
      subtitle: "Expert Dental Care in Jhadol & Phalasiya by Dr. Nagendra Pratap Singh",
      cta: "Book Appointment",
      phone: "+91 82092 15744"
    },
    services: {
      title: "Our Treatments",
      items: [
        { id: 1, title: "Fixed Teeth & Molars (Implants)", icon: "Anchor" },
        { id: 2, title: "Orthodontics (Braces)", icon: "Smile" },
        { id: 3, title: "Fixed Dentures (Implants)", icon: "Users" },
        { id: 4, title: "Pediatric Dentistry", icon: "Smile" },
        { id: 5, title: "Ultrasonic Cleaning", icon: "Zap" },
        { id: 6, title: "Tooth Coloured Filling", icon: "Syringe" },
        { id: 7, title: "Root Canal Treatment (RCT)", icon: "Activity" },
        { id: 8, title: "Painless Extraction", icon: "Scissors" },
        { id: 9, title: "Crowns & Bridges", icon: "Shield" },
        { id: 10, title: "Gum Surgery (Pyorrhea)", icon: "Activity" },
        { id: 11, title: "Wisdom Tooth Surgery", icon: "Scissors" },
      ]
    },
    locations: {
      title: "Clinic Locations & Timings",
      phalasiya: {
        name: "AVS Udaipur Dental Clinic",
        time: "8:00 AM – 1:30 PM",
        address: "Main Bus Stand, Phalasiya",
        mapLink: "https://maps.app.goo.gl/1eerU6jzr9daQ1J28?g_st=ipc",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
      },
      jhadol: {
        name: "MS Udaipur Dental Clinic",
        time: "2:00 PM – 7:00 PM",
        address: "Leelawas Road, Jhadol",
        mapLink: "https://maps.app.goo.gl/oiC3xVTW1iQQveWG8?g_st=ipc",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
      }
    },
    about: {
      title: "Meet Your Doctor",
      doctorName: "Dr. Nagendra Pratap Singh",
      degree: "BDS (Oro Surgeon)",
      description: "Dr. Nagendra Pratap Singh is a dedicated dental surgeon providing comprehensive dental care. He is now available at both Phalasiya and Jhadol to ensure the best oral health for the community."
    },
    footer: {
      text: "© 2024 MS Udaipur Dental Clinic. All Rights Reserved.",
      gstinLabel: "GSTIN",
      gstin: "08DKOPB5497M2ZB",
      addressLabel: "Registered Address",
      address: "0, Leelawas Chouraha-Pooja Nagar Colony, Leelawas, Jhadol, Udaipur, Rajasthan, 313702"
    },
    chat: {
      title: "Need Help?",
      subtitle: "Connect with us directly for quick support.",
      whatsapp: "Chat on WhatsApp",
      call: "Call Clinic"
    }
  },
  hi: {
    nav: {
      home: "होम",
      services: "सेवाएं",
      locations: "क्लिनिक का समय",
      about: "डॉक्टर के बारे में",
      contact: "संपर्क",
      bookNow: "कॉल करें"
    },
    hero: {
      title: "आपकी मुस्कान, हमारी प्राथमिकता",
      subtitle: "डॉ नागेंद्र प्रताप सिंह द्वारा झाड़ोल और फलासिया में विशेषज्ञ दंत चिकित्सा",
      cta: "अपॉइंटमेंट लें",
      phone: "+91 82092 15744"
    },
    services: {
      title: "उपलब्ध ईलाज",
      items: [
        { id: 1, title: "डेन्टल इम्प्लांट द्वारा फिक्स दाढ एवं दाँत", icon: "Anchor" },
        { id: 2, title: "टेडेमेढ़े दाँतों का ईलाज", icon: "Smile" },
        { id: 3, title: "डेन्टल इम्प्लांट द्वारा फिक्स बत्तीसी", icon: "Users" },
        { id: 4, title: "बच्चों के सभी दन्त रोगों का ईलाज", icon: "Smile" },
        { id: 5, title: "अमेरिकन अल्ट्रा सोनिक मशीन से सफाई", icon: "Zap" },
        { id: 6, title: "दाँतों के कलर की फिलिंग (जर्मन लाईट क्योर)", icon: "Syringe" },
        { id: 7, title: "दांत की नसों का ईलाज (RCT)", icon: "Activity" },
        { id: 8, title: "बिना दर्द दाँत निकालने की सुविधा", icon: "Scissors" },
        { id: 9, title: "परमानेन्ट फिक्स दाँत (क्राउन एण्ड ब्रिज)", icon: "Shield" },
        { id: 10, title: "पायरिया का उपचार, मसूड़ों की सर्जरी", icon: "Activity" },
        { id: 11, title: "अक्कल दाढ़ निकलवानें की सुविधा", icon: "Scissors" },
      ]
    },
    locations: {
      title: "क्लिनिक का स्थान और समय",
      phalasiya: {
        name: "AVS उदयपुर डेंटल क्लिनिक",
        time: "सुबह 8:00 – दोपहर 1:30",
        address: "मेन बस स्टैंड, फलासिया",
        mapLink: "https://maps.app.goo.gl/1eerU6jzr9daQ1J28?g_st=ipc",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
      },
      jhadol: {
        name: "MS उदयपुर डेंटल क्लिनिक",
        time: "दोपहर 2:00 – शाम 7:00",
        address: "लीलावास रोड, झाड़ोल",
        mapLink: "https://maps.app.goo.gl/oiC3xVTW1iQQveWG8?g_st=ipc",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
      }
    },
    about: {
      title: "डॉक्टर परिचय",
      doctorName: "डॉ. नागेंद्र प्रताप सिंह",
      degree: "BDS (Oro Surgeon)",
      description: "डॉ. नागेंद्र प्रताप सिंह अब झाड़ोल और फलासिया दोनों ही जगह अपनी सेवा दे रहे है। यहाँ दाँतों से सम्बंधित सभी रोगों के ईलाज की सुविधा उपलब्ध है।"
    },
    footer: {
      text: "© 2024 MS उदयपुर डेंटल क्लिनिक। सर्वाधिकार सुरक्षित।",
      gstinLabel: "GSTIN",
      gstin: "08DKOPB5497M2ZB",
      addressLabel: "पंजीकृत पता",
      address: "0, लीलावास चौराहा-पूजा नगर कॉलोनी, लीलावास, झाड़ोल, उदयपुर, राजस्थान, 313702"
    },
    chat: {
      title: "संपर्क करें",
      subtitle: "त्वरित सहायता के लिए हमसे सीधे जुड़ें।",
      whatsapp: "व्हाट्सएप पर चैट करें",
      call: "कॉल करें"
    }
  }
};