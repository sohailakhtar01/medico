"use client";

import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { useState, useMemo, useCallback } from "react";
import { 
  ArrowRight, Play, Check, Users, Heart, Shield, Smartphone, 
  FileText, Video, MessageCircle, Calendar, Globe, ChevronDown, 
  ChevronUp, Stethoscope
} from "lucide-react";

const HomeContent = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useLanguage(); // Translation function

  // Now all your content automatically translates!
  const features = useMemo(() => [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: t('features.smartAppointment'),
      description: t('features.smartAppointmentDesc')
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: t('features.hdConsultations'),
      description: t('features.hdConsultationsDesc')
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t('features.digitalRecords'),
      description: t('features.digitalRecordsDesc')
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('features.aiAssistant'),
      description: t('features.aiAssistantDesc')
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('features.mobileFirst'),
      description: t('features.mobileFirstDesc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('features.multilingualSupport'),
      description: t('features.multilingualSupportDesc')
    }
  ], [t]);

  const benefits = useMemo(() => [
    {
      title: t('benefits.forPatients'),
      icon: <Users className="w-8 h-8" />,
      items: [
        t('benefits.patientBenefit1'),
        t('benefits.patientBenefit2'),
        t('benefits.patientBenefit3'),
        t('benefits.patientBenefit4'),
        t('benefits.patientBenefit5')
      ]
    },
    {
      title: t('benefits.forDoctors'),
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        t('benefits.doctorBenefit1'),
        t('benefits.doctorBenefit2'),
        t('benefits.doctorBenefit3'),
        t('benefits.doctorBenefit4'),
        t('benefits.doctorBenefit5')
      ]
    },
    {
      title: t('benefits.forHealthcare'),
      icon: <Shield className="w-8 h-8" />,
      items: [
        t('benefits.healthcareBenefit1'),
        t('benefits.healthcareBenefit2'),
        t('benefits.healthcareBenefit3'),
        t('benefits.healthcareBenefit4'),
        t('benefits.healthcareBenefit5')
      ]
    }
  ], [t]);

  const faqs = useMemo(() => [
    { question: t('faq.faq1Q'), answer: t('faq.faq1A') },
    { question: t('faq.faq2Q'), answer: t('faq.faq2A') },
    { question: t('faq.faq3Q'), answer: t('faq.faq3A') },
    { question: t('faq.faq4Q'), answer: t('faq.faq4A') },
    { question: t('faq.faq5Q'), answer: t('faq.faq5A') },
    { question: t('faq.faq6Q'), answer: t('faq.faq6A') }
  ], [t]);

  const toggleFaq = useCallback((index) => {
    setOpenFaq(openFaq === index ? null : index);
  }, [openFaq]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section - All content now automatically translates! */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-16 pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                {t('hero.transformingHealthcare')}
              </div>

              {/* Headline - Auto translates! */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                {t('hero.healthcareTitle')} 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> {t('hero.accessibleText')}</span>
                <br />
                {t('hero.toEveryone')}
              </h1>

              {/* Description - Auto translates! */}
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                {t('hero.heroDescription')}
              </p>

              {/* CTA Buttons - Auto translates! */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
  {/* Button with route */}
  <Link href="/consultation">
    <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform shadow-lg hover:shadow-xl flex items-center justify-center">
      {t("hero.startFreeConsultation")}
      <ArrowRight className="w-5 h-5 ml-2" />
    </button>
  </Link>

  {/* Button opens video (keep your state) */}
  <button
    onClick={() => setShowVideo(true)}
    className="border-2 border-green-600 text-green-600 cursor-pointer hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
  >
    <Play className="w-5 h-5 mr-2" />
    {t("hero.watchDemo")}
  </button>
</div>

              {/* Trust Indicators - Auto translates! */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  {t('hero.hipaaCompliant')}
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  {t('hero.isoCertified')}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-22 relative col-span-6 flex items-center sm:mx-auto sm:max-w-lg lg:mx-0 lg:max-w-6xl">
              <figure className="relative mx-auto w-full max-w-5xl rounded-lg shadow-3xl">
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full"
                    src="/landing.png"
                    alt="Three healthcare professionals ready to assist patients"
                  />
                  <div className="relative bottom-0 mt-1 left-0 w-full h-[6px] bg-transparent shadow-[0_-4px_10px_0_rgba(34,197,94,0.8)]"></div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Auto translates! */}
      <section id="features" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Auto translates! */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howItWorks.step1Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1Desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howItWorks.step2Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2Desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howItWorks.step3Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Auto translates! */}
      <section id="benefits" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-green-100"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Auto translates! */}
      <section id="faq" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('faq.description')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-green-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full cursor-pointer px-8 py-6 text-left flex justify-between items-center hover:bg-green-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Auto translates! */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-green-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform shadow-lg">
              {t('cta.getStartedToday')}
            </button>
            <button className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
              {t('cta.scheduleDemo')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Home = () => {
  return (
    <SessionProvider>
      <LanguageProvider>
        <HomeContent />
      </LanguageProvider>
    </SessionProvider>
  );
};

export default Home;
