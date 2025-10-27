import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              Legal Information
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance">
              Privacy <span className="text-rhinovate-600">Policy</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              Last updated: May, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              Rhinovate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered 3D visualization platform for rhinoplasty procedures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Professional information (medical license, clinic affiliation)</li>
              <li>Account credentials and preferences</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Medical Data</h3>
            <p className="text-gray-600 mb-4">In accordance with HIPAA regulations, we may process:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>3D facial scans and photographs</li>
              <li>Medical history and treatment plans</li>
              <li>Surgical outcome predictions and visualizations</li>
              <li>Patient consultation notes and communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide and improve our AI visualization services</li>
              <li>Generate 3D models and surgical outcome predictions</li>
              <li>Communicate with you about our services</li>
              <li>Process payments and manage your account</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Conduct research and development to improve our technology</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. All medical data is processed in compliance with HIPAA requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of certain communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Medical data is retained according to applicable healthcare regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
            </p>

        
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
