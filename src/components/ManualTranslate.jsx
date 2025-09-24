"use client";

import { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

const ManualTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'en', name: 'English' });

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'ur', name: 'اردو' }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLang(language);
    setIsOpen(false);
    
    // Use Google Translate URL redirect method
    if (language.code !== 'en') {
      const currentUrl = window.location.href;
      const translateUrl = `https://translate.google.com/translate?sl=en&tl=${language.code}&u=${encodeURIComponent(currentUrl)}`;
      window.location.href = translateUrl;
    } else {
      // For English, reload original page
      const originalUrl = window.location.href.split('?')[0]; // Remove any translate parameters
      window.location.href = originalUrl;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
      >
        <Languages className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700">Language:</span>
        <span className="text-sm text-gray-900">{selectedLang.name}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
              Select Language
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-green-50 flex justify-between items-center transition-colors ${
                  selectedLang.code === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                }`}
              >
                <div>
                  <div className="font-medium">{language.name}</div>
                  <div className="text-xs text-gray-500">{language.code.toUpperCase()}</div>
                </div>
                {selectedLang.code === language.code && (
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ManualTranslate;
