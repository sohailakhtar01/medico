"use client";

import { useState } from 'react';
import { Languages, ChevronDown, Loader, CheckCircle } from 'lucide-react';

const WorkingTranslator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' });
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationStatus, setTranslationStatus] = useState('');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' }
  ];

  // Free Translation API using MyMemory
  const translateText = async (text, targetLang) => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
      );
      const data = await response.json();
      return data.responseData.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  // Translate all text elements on page
  const translatePageContent = async (targetLang) => {
    if (targetLang === 'en') {
      // Reload original page
      window.location.reload();
      return;
    }

    setIsTranslating(true);
    setTranslationStatus('Translating page content...');

    try {
      // Get all text elements
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, button, a, div');
      const translations = new Map();

      for (let element of elements) {
        const text = element.textContent?.trim();
        if (text && text.length > 0 && text.length < 500 && !text.match(/^\d+$/) && !text.includes('@')) {
          if (!translations.has(text)) {
            const translated = await translateText(text, targetLang);
            translations.set(text, translated);
            await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
          }
          element.textContent = translations.get(text);
        }
      }

      setTranslationStatus(`✓ Translated to ${languages.find(l => l.code === targetLang)?.name}`);
      setTimeout(() => setTranslationStatus(''), 3000);
    } catch (error) {
      console.error('Translation failed:', error);
      setTranslationStatus('Translation failed. Please try again.');
      setTimeout(() => setTranslationStatus(''), 3000);
    }

    setIsTranslating(false);
  };

  const handleLanguageChange = (language) => {
    setCurrentLang(language);
    setIsOpen(false);
    translatePageContent(language.code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating}
        className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-300 transition-all duration-200 disabled:opacity-50"
      >
        {isTranslating ? (
          <Loader className="w-4 h-4 text-green-600 animate-spin" />
        ) : (
          <Languages className="w-4 h-4 text-green-600" />
        )}
        <span className="text-sm font-medium text-gray-700">
          {isTranslating ? 'Translating...' : currentLang.flag + ' ' + currentLang.name}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Translation Status */}
      {translationStatus && (
        <div className="absolute top-full mt-1 right-0 bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs whitespace-nowrap z-60">
          {translationStatus}
        </div>
      )}

      {isOpen && !isTranslating && (
        <>
          <div className="absolute top-full mt-2 right-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Languages className="w-4 h-4 text-green-600" />
                Choose Your Language
              </h3>
              <p className="text-xs text-gray-600 mt-1">Translate page content instantly</p>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              <div className="p-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={`w-full text-left px-3 py-3 rounded-lg hover:bg-green-50 flex items-center justify-between group transition-colors duration-150 ${
                      currentLang.code === language.code ? 'bg-green-50 border-l-4 border-green-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{language.flag}</span>
                      <div>
                        <div className="font-medium text-gray-900">{language.name}</div>
                        <div className="text-xs text-gray-500">{language.nativeName}</div>
                      </div>
                    </div>
                    {currentLang.code === language.code && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Free Translation Service • Works on Localhost
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

export default WorkingTranslator;
