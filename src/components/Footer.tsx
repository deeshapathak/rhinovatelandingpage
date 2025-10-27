
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-rhinovate-900">Rhinovate</span>
            </a>
            <p className="mt-4 text-gray-600 text-sm max-w-xs">
              Revolutionary AI-powered 3D visualization for rhinoplasty, enhancing the surgeon and patient experience.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/rhinovate/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rhinovate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:deesha@rhinovate.ai" 
                className="text-gray-400 hover:text-rhinovate-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-600 hover:text-rhinovate-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Rhinovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
