"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { 
  ArrowRight, 
  Play, 
  Check,
  Users,
  Heart,
  Clock,
  Shield,
  Smartphone,
  FileText,
  Video,
  MessageCircle,
  Calendar,
  Globe,
  ChevronDown,
  ChevronUp,
  Star,
  Activity,
  Stethoscope
} from "lucide-react";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Appointment Booking",
      description: "AI-powered scheduling system that matches patients with available doctors based on specialty, location, and urgency."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "HD Video Consultations",
      description: "Crystal clear video calls with screen sharing, digital prescription, and real-time health monitoring capabilities."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Health Records",
      description: "Secure, encrypted storage of medical history, lab reports, prescriptions, and treatment plans accessible anywhere."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Health Assistant",
      description: "Multilingual AI chatbot for symptom checking, medication reminders, and 24/7 health guidance."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline capabilities for areas with limited internet connectivity."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Available in Hindi, English, and 10+ regional languages to serve diverse rural communities across India."
    }
  ];

  const benefits = [
    {
      title: "For Patients",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Access to specialist doctors from anywhere",
        "Save travel time and costs",
        "24/7 emergency consultation",
        "Secure health record storage",
        "Medication reminders and health tips"
      ]
    },
    {
      title: "For Doctors",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Expand practice to rural areas",
        "Flexible consultation hours",
        "Digital prescription tools",
        "Patient history at fingertips",
        "Secure communication platform"
      ]
    },
    {
      title: "For Healthcare Centers",
      icon: <Shield className="w-8 h-8" />,
      items: [
        "Reduce patient wait times",
        "Efficient resource management",
        "Digital record keeping",
        "Remote specialist consultations",
        "Analytics and reporting tools"
      ]
    }
  ];

  const faqs = [
    {
      question: "How secure is my medical data on HealthConnect Pro?",
      answer: "We use bank-grade encryption and comply with all healthcare data protection regulations. Your medical records are stored securely and only accessible by authorized healthcare providers."
    },
    {
      question: "Can I use HealthConnect Pro without internet connectivity?",
      answer: "Yes, our mobile app has offline capabilities. You can access your health records, medication reminders, and basic features even without internet. Data syncs automatically when you're back online."
    },
    {
      question: "How do I book an appointment with a specialist doctor?",
      answer: "Simply select the medical specialty, choose your preferred doctor, pick an available time slot, and confirm your appointment. You'll receive confirmation via SMS and email."
    },
    {
      question: "Is HealthConnect Pro available in my local language?",
      answer: "Yes, we support Hindi, English, and 10+ regional Indian languages including Tamil, Telugu, Bengali, Marathi, and more. You can switch languages anytime in the app."
    },
    {
      question: "What if I need emergency medical consultation?",
      answer: "Our platform offers 24/7 emergency consultation services. Click the emergency button to connect with the next available doctor within minutes."
    },
    {
      question: "How much does it cost to use HealthConnect Pro?",
      answer: "Basic registration is free. Video consultations start from ₹199, which is significantly cheaper than visiting specialists in cities. We also accept government health insurance."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <SessionProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-16 pb-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
  <svg
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
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
              {/* Content */}
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Transforming Rural Healthcare
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Healthcare 
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Accessible</span>
                  <br />
                  to Everyone
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Connect with qualified doctors, manage health records digitally, and get quality healthcare 
                  from anywhere in India. Built specifically for rural and underserved communities.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform  shadow-lg hover:shadow-xl flex items-center justify-center">
                    Start Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="border-2 border-green-600 text-green-600 cursor-pointer hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    HIPAA Compliant
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    ISO 27001 Certified
                  </div>
                </div>
              </div>

              {/* Hero Image */}
             <div className="mb-22 relative col-span-6 flex items-center sm:mx-auto sm:max-w-lg lg:mx-0 lg:max-w-6xl">
  <figure className="relative mx-auto w-full max-w-5xl rounded-lg shadow-3xl">
    <div className="overflow-hidden rounded-lg relative">
      {/* Image */}
      <img
        className="w-full"
        src="/landing.png"
        alt="Three healthcare professionals ready to assist patients"
      />

      {/* Bottom green shadow line */}
      <div className="relative bottom-0 mt-1 left-0 w-full h-[6px] bg-transparent shadow-[0_-4px_10px_0_rgba(34,197,94,0.8)]"></div>
    </div>
  </figure>
</div>


            </div>
          </div>
        </section>

        {/* Stats Section */}
        

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for quality healthcare delivery, from appointment booking to digital records management.
              </p>
            </div>

            {/* Features Grid */}
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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with quality healthcare in just three simple steps.
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Register & Profile</h3>
                <p className="text-gray-600">
                  Create your account with Aadhaar verification and complete your medical profile for personalized care.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book Consultation</h3>
                <p className="text-gray-600">
                  Choose your doctor, select appointment time, and get instant confirmation with video call details.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Treatment</h3>
                <p className="text-gray-600">
                  Attend video consultation, receive digital prescription, and access all records in your health dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Benefits for Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                HealthConnect Pro delivers value to patients, doctors, and healthcare institutions.
              </p>
            </div>

            {/* Benefits Grid */}
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

        {/* Testimonials Section */}
        

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about HealthConnect Pro.
              </p>
            </div>

            {/* FAQ Items */}
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

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Access?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of patients and doctors already using HealthConnect Pro 
              to deliver quality healthcare to rural communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white cursor-pointer text-green-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SessionProvider>
  );
};

export default Home;
