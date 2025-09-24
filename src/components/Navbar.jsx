"use client";

import { SessionProvider } from "next-auth/react";
import UserButton from "@/components/user-button";
import { useState } from "react";
import { Menu, X, Heart, Languages, ChevronDown, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { t, currentLanguage, changeLanguage, languages, getCurrentLanguage } = useLanguage();

  const navigation = [
    { name: t('navbar.features'), href: '#features' },
    { name: t('navbar.howItWorks'), href: '#how-it-works' },
    { name: t('navbar.benefits'), href: '#benefits' },
    { name: t('navbar.faq'), href: '#faq' },
    { name: t('navbar.contact'), href: '#contact' }
  ];

  const currentLang = getCurrentLanguage();

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex cursor-pointer items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {t('navbar.brandName')}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop: Language Selector + User Button */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-300 transition-all duration-200"
                >
                  <Languages className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{t('navbar.language')}:</span>
                  <span className="text-sm font-medium text-gray-900">{currentLang.flag} {currentLang.nativeName}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {languageDropdownOpen && (
                  <>
                    <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                      <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-sm">Select Language</h3>
                        <p className="text-xs text-gray-600 mt-1">Switch to your preferred language</p>
                      </div>
                      
                      <div className="p-2">
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => {
                              changeLanguage(language.code);
                              setLanguageDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-3 rounded-lg hover:bg-green-50 flex items-center justify-between transition-colors duration-150 ${
                              currentLanguage === language.code ? 'bg-green-50 border-l-4 border-green-500' : ''
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{language.flag}</span>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{language.name}</div>
                                <div className="text-xs text-gray-500">{language.nativeName}</div>
                              </div>
                            </div>
                            {currentLanguage === language.code && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setLanguageDropdownOpen(false)}
                    />
                  </>
                )}
              </div>

              <SessionProvider>
                <UserButton className="bg-green-400" />
              </SessionProvider>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 hover:text-green-600 p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {t('navbar.brandName')}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Language Selector */}
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <div className="mb-3">
                <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 mb-3">
                  <Languages className="w-4 h-4 text-green-600" />
                  <span>Choose Language</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Current: {currentLang.nativeName}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      changeLanguage(language.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 p-3 bg-white rounded-lg border hover:border-green-300 hover:bg-green-50 transition-colors duration-150 ${
                      currentLanguage === language.code ? 'border-green-500 bg-green-50' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 text-xs">{language.name}</div>
                      <div className="text-xs text-gray-500">{language.nativeName}</div>
                    </div>
                    {currentLanguage === language.code && (
                      <CheckCircle className="w-3 h-3 text-green-600 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="py-6 px-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <SessionProvider>
                  <UserButton />
                </SessionProvider>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
