import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
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
              About Rhinovate
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance">
              Revolutionizing <span className="text-rhinovate-600">Rhinoplasty</span> Through AI
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              We're on a mission to transform the plastic surgery industry by providing surgeons and patients with unprecedented clarity and confidence through AI-powered 3D visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To eliminate uncertainty in rhinoplasty procedures by providing hyper-realistic 3D visualizations that help both surgeons and patients make informed decisions with complete confidence.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every patient deserves to see their potential results before committing to surgery, and every surgeon should have the tools to deliver exceptional outcomes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/realistic.png"
                  alt="AI Visualization Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-rhinovate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-rhinovate-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-rhinovate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision</h3>
              <p className="text-gray-600">
                We deliver hyper-accurate 3D models that capture every detail, ensuring surgeons and patients have complete confidence in the visualization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-rhinovate-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-rhinovate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient-Centric</h3>
              <p className="text-gray-600">
                Every feature we build prioritizes the patient experience, making complex medical procedures more accessible and understandable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-rhinovate-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-rhinovate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with AI and 3D technology to revolutionize the plastic surgery industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Rhinovate was born from a simple observation: too many patients undergo rhinoplasty procedures without truly understanding what their results will look like. This uncertainty leads to anxiety, unrealistic expectations, and sometimes disappointing outcomes.
            </p>
            <p className="text-lg mb-6">
              Our founders, combining expertise in AI, 3D visualization, and medical technology, set out to solve this problem. We developed cutting-edge algorithms that can generate hyper-realistic 3D models from simple phone photos, showing patients exactly how they'll look after surgery.
            </p>
            <p className="text-lg mb-6">
              Today, we're proud to partner with leading plastic surgeons and clinics worldwide, helping them provide better patient experiences and achieve superior surgical outcomes. Our technology has already helped thousands of patients make confident decisions about their procedures.
            </p>
            <p className="text-lg">
              We're just getting started. The future of plastic surgery is clear, and we're leading the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rhinovate-600 to-rhinovate-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-rhinovate-100 mb-8">
            Join the surgeons who are already using Rhinovate to deliver exceptional patient experiences.
          </p>
            <a href="#contact" className="inline-flex items-center bg-white text-rhinovate-600 px-8 py-4 rounded-lg font-semibold hover:bg-rhinovate-50 transition-colors">
              Start Your Demo Today
              
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
