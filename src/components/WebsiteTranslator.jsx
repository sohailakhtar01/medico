"use client";

import { useState } from 'react';
import { Languages, ExternalLink, ChevronDown } from 'lucide-react';

const WebsiteTranslator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const translatePage = (targetLang) => {
    if (targetLang === 'en') {
      // Go back to original
      window.location.href = window.location.origin + window.location.pathname;
    } else {
      // Use Google Translate redirect
      const currentUrl = window.location.href;
      window.open(`https://translate.google.com/translate?sl=auto&tl=${targetLang}&u=${encodeURIComponent(currentUrl)}`, '_self');
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-300 transition-all duration-200"
      >
        <Languages className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700">Translate Page</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full mt-2 right-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Languages className="w-4 h-4 text-green-600" />
                Choose Your Language
              </h3>
              <p className="text-xs text-gray-600 mt-1">Translate the entire page instantly</p>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              <div className="p-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => translatePage(language.code)}
                    className="w-full text-left px-3 py-3 rounded-lg hover:bg-green-50 flex items-center justify-between group transition-colors duration-150"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{language.flag}</span>
                      <div>
                        <div className="font-medium text-gray-900">{language.name}</div>
                        <div className="text-xs text-gray-500">{language.code.toUpperCase()}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-green-600" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Powered by Google Translate
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

export default WebsiteTranslator;
