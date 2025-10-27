import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-rhinovate-50 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-rhinovate-100 opacity-50 blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-rhinovate-100 px-4 py-1.5 text-sm font-medium text-rhinovate-800 mb-8">
              <span className="mr-1.5 flex h-2 w-2 rounded-full bg-rhinovate-500"></span>
              Get in Touch
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance">
              Let's <span className="text-rhinovate-600">Connect</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              Ready to transform your practice with AI-powered 3D visualization? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-rhinovate-600 py-16 md:py-20 px-6 md:px-16 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-rhinovate-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6 text-balance">
                  Transform your consultations with 3D visualization
                </h2>
                <p className="text-lg text-rhinovate-100 mb-8 text-balance">
                  Join leading plastic surgeons and ENT specialists using Rhinovate to enhance patient
                  consultations, improve decision confidence, and streamline the entire surgical journey.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Free personalized demo for your clinic',
                    'Easy integration with your existing workflow',
                    'Dedicated support team for seamless onboarding',
                    'See results within the first month'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-rhinovate-200" />
                      </div>
                      <span className="ml-3 text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Request a demo</h3>
                  
                  <form
                    action="https://formspree.io/f/mgvareve"
                    method="POST"
                    className="space-y-5"
                  >
                    {/* Hidden field for redirect */}
                    <input 
                      type="hidden" 
                      name="_next" 
                      value={window.location.href}
                    />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                        placeholder="Dr. Jane Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1">
                        Clinic Name
                      </label>
                      <input
                        type="text"
                        id="clinic"
                        name="clinic"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                        placeholder="Advanced Aesthetics Clinic"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    {/* Hidden field for message */}
                    <input 
                      type="hidden" 
                      name="message" 
                      value="New demo request"
                    />
                    
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 group flex items-center justify-center bg-rhinovate-600 hover:bg-rhinovate-700"
                    >
                      Schedule Your Demo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-rhinovate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How accurate are the 3D visualizations?</h3>
              <p className="text-gray-600">Our AI-powered models achieve 95%+ accuracy in predicting surgical outcomes, based on extensive training data from thousands of successful procedures.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What equipment do I need?</h3>
              <p className="text-gray-600">Just a smartphone with a camera. Our technology works with standard phone cameras - no special hardware required.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How long does setup take?</h3>
              <p className="text-gray-600">Most practices are up and running within 24 hours. We provide comprehensive training and ongoing support.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Is my patient data secure?</h3>
              <p className="text-gray-600">Absolutely. We're HIPAA compliant and use enterprise-grade security to protect all patient information.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
