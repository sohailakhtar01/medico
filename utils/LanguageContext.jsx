"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Base English content - सिर्फ English में लिखना है
const baseContent = {
  // Navbar
  brandName: "Medico",
  features: "Features",
  howItWorks: "How It Works",
  benefits: "Benefits",
  faq: "FAQ", 
  contact: "Contact",
  signIn: "Sign In",
  getStarted: "Get Started",
  needHelp: "Need Help?",
  selectLanguage: "Select Language",
  currentLanguage: "Current",
  
  // Hero Section  
  transformingHealthcare: "Transforming Rural Healthcare",
  healthcareTitle: "Healthcare",
  accessibleText: "Accessible", 
  toEveryone: "to Everyone",
  heroDescription: "Connect with qualified doctors, manage health records digitally, and get quality healthcare from anywhere in India. Built specifically for rural and underserved communities.",
  startFreeConsultation: "Start Free Consultation",
  watchDemo: "Watch Demo",
  hipaaCompliant: "HIPAA Compliant",
  isoCertified: "ISO 27001 Certified",
  
  // Features
  comprehensiveHealthcare: "Comprehensive Healthcare Solutions",
  featuresDescription: "Everything you need for quality healthcare delivery, from appointment booking to digital records management.",
  smartAppointment: "Smart Appointment Booking",
  smartAppointmentDesc: "AI-powered scheduling system that matches patients with available doctors based on specialty, location, and urgency.",
  hdConsultations: "HD Video Consultations", 
  hdConsultationsDesc: "Crystal clear video calls with screen sharing, digital prescription, and real-time health monitoring capabilities.",
  digitalRecords: "Digital Health Records",
  digitalRecordsDesc: "Secure, encrypted storage of medical history, lab reports, prescriptions, and treatment plans accessible anywhere.",
  aiAssistant: "AI Health Assistant",
  aiAssistantDesc: "Multilingual AI chatbot for symptom checking, medication reminders, and 24/7 health guidance.",
  mobileFirst: "Mobile-First Design", 
  mobileFirstDesc: "Optimized for smartphones with offline capabilities for areas with limited internet connectivity.",
  multilingualSupport: "Multilingual Support",
  multilingualSupportDesc: "Available in Hindi, English, and 10+ regional languages to serve diverse rural communities across India.",
  
  // How It Works
  howItWorksTitle: "How It Works",
  howItWorksDesc: "Get started with quality healthcare in just three simple steps.", 
  step1Title: "Register & Profile",
  step1Desc: "Create your account with Aadhaar verification and complete your medical profile for personalized care.",
  step2Title: "Book Consultation",
  step2Desc: "Choose your doctor, select appointment time, and get instant confirmation with video call details.",
  step3Title: "Get Treatment",
  step3Desc: "Attend video consultation, receive digital prescription, and access all records in your health dashboard.",
  
  // Benefits
  benefitsTitle: "Benefits for Everyone",
  benefitsDesc: "HealthConnect Pro delivers value to patients, doctors, and healthcare institutions.",
  forPatients: "For Patients",
  forDoctors: "For Doctors", 
  forHealthcare: "For Healthcare Centers",
  
  // Benefits Items
  patientBenefit1: "Access to specialist doctors from anywhere",
  patientBenefit2: "Save travel time and costs",
  patientBenefit3: "24/7 emergency consultation", 
  patientBenefit4: "Secure health record storage",
  patientBenefit5: "Medication reminders and health tips",
  doctorBenefit1: "Expand practice to rural areas",
  doctorBenefit2: "Flexible consultation hours",
  doctorBenefit3: "Digital prescription tools",
  doctorBenefit4: "Patient history at fingertips", 
  doctorBenefit5: "Secure communication platform",
  healthcareBenefit1: "Reduce patient wait times",
  healthcareBenefit2: "Efficient resource management",
  healthcareBenefit3: "Digital record keeping",
  healthcareBenefit4: "Remote specialist consultations",
  healthcareBenefit5: "Analytics and reporting tools",
  
  // FAQ
  faqTitle: "Frequently Asked Questions",
  faqDesc: "Get answers to common questions about HealthConnect Pro.",
  faq1Q: "How secure is my medical data on HealthConnect Pro?",
  faq1A: "We use bank-grade encryption and comply with all healthcare data protection regulations. Your medical records are stored securely and only accessible by authorized healthcare providers.",
  faq2Q: "Can I use HealthConnect Pro without internet connectivity?", 
  faq2A: "Yes, our mobile app has offline capabilities. You can access your health records, medication reminders, and basic features even without internet. Data syncs automatically when you're back online.",
  faq3Q: "How do I book an appointment with a specialist doctor?",
  faq3A: "Simply select the medical specialty, choose your preferred doctor, pick an available time slot, and confirm your appointment. You'll receive confirmation via SMS and email.",
  faq4Q: "Is HealthConnect Pro available in my local language?",
  faq4A: "Yes, we support Hindi, English, and 10+ regional Indian languages including Tamil, Telugu, Bengali, Marathi, and more. You can switch languages anytime in the app.",
  faq5Q: "What if I need emergency medical consultation?",
  faq5A: "Our platform offers 24/7 emergency consultation services. Click the emergency button to connect with the next available doctor within minutes.",
  faq6Q: "How much does it cost to use HealthConnect Pro?",
  faq6A: "Basic registration is free. Video consultations start from ₹199, which is significantly cheaper than visiting specialists in cities. We also accept government health insurance.",
  
  // CTA
  ctaTitle: "Ready to Transform Healthcare Access?",
  ctaDesc: "Join thousands of patients and doctors already using HealthConnect Pro to deliver quality healthcare to rural communities across India.",
  getStartedToday: "Get Started Today",
  scheduleDemo: "Schedule Demo",
  
  // Contact
  supportEmail: "support@medico.com", 
  supportPhone: "+91 1800-123-HEALTH",
  emergencySupport: "24/7 Emergency Support"
};

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translations, setTranslations] = useState({ en: baseContent });

  const indianLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' }
  ];

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLang);
  }, []);

  const t = (key) => {
    return translations[currentLanguage]?.[key] || baseContent[key] || key;
  };

  const getCurrentLanguage = () => {
    return indianLanguages.find(lang => lang.code === currentLanguage) || indianLanguages[0];
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      languages: indianLanguages,
      getCurrentLanguage,
      t // Translation function
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
