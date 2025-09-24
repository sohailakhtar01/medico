"use client";

import { useEffect } from 'react';
import { Languages } from 'lucide-react';

const SimpleTranslate = () => {
  useEffect(() => {
    // Super simple approach - direct script injection
    const script = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,kn,pa,ta,te,mr,gu,bn,ml,ur',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element_simple');
      }
    `;

    // Inject the callback function
    const scriptTag = document.createElement('script');
    scriptTag.innerHTML = script;
    document.head.appendChild(scriptTag);

    // Load Google Translate
    const googleScript = document.createElement('script');
    googleScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleScript.async = true;
    document.head.appendChild(googleScript);

    return () => {
      // Cleanup
      document.head.removeChild(scriptTag);
      document.head.removeChild(googleScript);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
      <Languages className="w-4 h-4 text-green-600" />
      <span className="text-sm font-medium text-gray-700">Translate:</span>
      <div id="google_translate_element_simple"></div>
      
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0px !important;
        }
        
        .goog-te-combo {
          border: 1px solid #e5e7eb !important;
          border-radius: 6px !important;
          padding: 4px 8px !important;
        }
      `}</style>
    </div>
  );
};

export default SimpleTranslate;
