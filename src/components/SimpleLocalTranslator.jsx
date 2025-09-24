"use client";

import { useState } from 'react';
import { Languages, ChevronDown, CheckCircle } from 'lucide-react';

const SimpleLocalTranslator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  // Basic translations for common healthcare terms
  const translations = {
    en: {
      'Healthcare': 'Healthcare',
      'Features': 'Features',
      'How It Works': 'How It Works',
      'Benefits': 'Benefits',
      'FAQ': 'FAQ',
      'Contact': 'Contact',
      'Medico': 'Medico',
      'Accessible': 'Accessible',
      'to Everyone': 'to Everyone',
      'Get Started': 'Get Started',
      'Watch Demo': 'Watch Demo'
    },
    hi: {
      'Healthcare': 'स्वास्थ्य सेवा',
      'Features': 'विशेषताएं',
      'How It Works': 'यह कैसे काम करता है',
      'Benefits': 'लाभ',
      'FAQ': 'अक्सर पूछे जाने वाले प्रश्न',
      'Contact': 'संपर्क',
      'Medico': 'मेडिको',
      'Accessible': 'सुलभ',
      'to Everyone': 'सभी के लिए',
      'Get Started': 'शुरू करें',
      'Watch Demo': 'डेमो देखें'
    },
    kn: {
      'Healthcare': 'ಆರೋಗ್ಯ ಸೇವೆ',
      'Features': 'ವೈಶಿಷ್ಟ್ಯಗಳು',
      'How It Works': 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      'Benefits': 'ಪ್ರಯೋಜನಗಳು',
      'FAQ': 'ಆಗಾಗ್ಗೆ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು',
      'Contact': 'ಸಂಪರ್ಕ',
      'Medico': 'ಮೆಡಿಕೋ',
      'Accessible': 'ಪ್ರವೇಶಿಸಬಹುದಾದ',
      'to Everyone': 'ಎಲ್ಲರಿಗೂ',
      'Get Started': 'ಪ್ರಾರಂಭಿಸಿ',
      'Watch Demo': 'ಡೆಮೊ ನೋಡಿ'
    }
  };

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Simple text replacement for demo
    if (translations[langCode]) {
      const elements = document.querySelectorAll('[data-translate]');
      elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[langCode][key]) {
          element.textContent = translations[langCode][key];
        }
      });
    }
  };

  const currentLanguage = getCurrentLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-300 transition-all duration-200"
      >
        <Languages className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm">Select Language</h3>
            </div>
            
            <div className="p-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 flex items-center justify-between transition-colors duration-150 ${
                    currentLang === language.code ? 'bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{language.flag}</span>
                    <div>
                      <div className="font-medium text-sm text-gray-900">{language.name}</div>
                      <div className="text-xs text-gray-500">{language.nativeName}</div>
                    </div>
                  </div>
                  {currentLang === language.code && (
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Localhost Compatible
              </p>
            </div>
          </div>
          
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default SimpleLocalTranslator;
