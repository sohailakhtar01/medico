"use client";

import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      nativeName: 'English', 
      flag: '🇺🇸' 
    },
    { 
      code: 'hi', 
      name: 'Hindi', 
      nativeName: 'हिन्दी', 
      flag: '🇮🇳' 
    },
    { 
      code: 'kn', 
      name: 'Kannada', 
      nativeName: 'ಕನ್ನಡ', 
      flag: '🇮🇳' 
    },
    { 
      code: 'pa', 
      name: 'Punjabi', 
      nativeName: 'ਪੰਜਾਬੀ', 
      flag: '🇮🇳' 
    }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const value = {
    t,
    currentLanguage: i18n.language,
    changeLanguage,
    languages,
    getCurrentLanguage,
    isLoading: false // i18next handles loading internally
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
