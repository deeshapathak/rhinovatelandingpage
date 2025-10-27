import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
              Terms of <span className="text-rhinovate-600">Service</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              Last updated: May, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Rhinovate's AI-powered 3D visualization platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">Rhinovate provides:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>AI-powered 3D facial visualization technology</li>
              <li>Surgical outcome prediction tools</li>
              <li>Patient consultation and communication features</li>
              <li>Healing timeline visualization</li>
              <li>Related software and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Account Creation</h3>
            <p className="text-gray-600 mb-4">To use our Service, you must:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Be at least 18 years of age</li>
              <li>Have appropriate medical credentials (for healthcare providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Account Responsibilities</h3>
            <p className="text-gray-600 mb-6">
              You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-gray-700 font-semibold mb-2">Important Medical Notice:</p>
              <p className="text-gray-700">
                Rhinovate's visualizations are for informational and consultation purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers regarding medical conditions and treatments.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Acceptable Use</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Permitted Uses</h3>
            <p className="text-gray-600 mb-4">You may use our Service to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide patient consultations and education</li>
              <li>Plan and discuss surgical procedures</li>
              <li>Communicate with patients about potential outcomes</li>
              <li>Conduct research and development (with proper authorization)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Prohibited Uses</h3>
            <p className="text-gray-600 mb-4">You may not use our Service to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any unlawful or prohibited purpose</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">The Service and its original content, features, and functionality are owned by Rhinovate and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            <p className="text-gray-600 mb-6">You may not modify, distribute, or create derivative works based on our Service without our express written permission.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to complying with applicable data protection laws, including HIPAA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1 Fees</h3>
            <p className="text-gray-600 mb-4">Access to certain features of our Service may require payment of fees. All fees are non-refundable unless otherwise specified.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2 Billing</h3>
            <p className="text-gray-600 mb-6">
              Fees will be billed in advance on a recurring basis. You authorize us to charge your payment method for all applicable fees.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Rhinovate shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to defend, indemnify, and hold harmless Rhinovate and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Termination</h2>
            <p className="text-gray-600 mb-4">We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p className="text-gray-600 mb-6">Upon termination, your right to use the Service will cease immediately.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved in the courts of San Francisco, California.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
