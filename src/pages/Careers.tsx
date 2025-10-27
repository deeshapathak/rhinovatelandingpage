import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, MapPin, Clock, Users, Zap, Heart } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Competitive Equity",
      description: "Meaningful ownership in a fast-growing company"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Unlimited PTO",
      description: "Take time off when you need it"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Lead development of our core AI algorithms for 3D facial reconstruction and visualization."
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time", 
      description: "Build beautiful, responsive user interfaces for our web and mobile applications."
    },
    {
      title: "Medical Technology Advisor",
      location: "Remote",
      type: "Part-time",
      description: "Provide clinical expertise and guidance on medical accuracy and safety standards."
    },
    {
      title: "Product Manager",
      location: "Remote",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI-powered visualization platform."
    }
  ];

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
              Join Our Team
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance">
              Build the Future of <span className="text-rhinovate-600">Plastic Surgery</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              Help us revolutionize how surgeons and patients approach rhinoplasty through cutting-edge AI and 3D visualization technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Why Join Rhinovate?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a mission-driven team that's transforming healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rhinovate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-rhinovate-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-rhinovate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next role and help us build the future of medical technology
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <a href="mailto:deesha@rhinovate.ai" className="mt-4 md:mt-0 inline-flex items-center bg-rhinovate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rhinovate-700 transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Rhinovate, we believe that the best products come from diverse teams working together with shared purpose. We're building a culture where everyone can do their best work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rhinovate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">We value curiosity, creativity, and collaboration</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rhinovate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">We encourage ownership and initiative at every level</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rhinovate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">We're committed to diversity, equity, and inclusion</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rhinovate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">We believe in work-life balance and personal growth</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/dashboard-preview.png"
                  alt="Rhinovate Team Culture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rhinovate-600 to-rhinovate-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-rhinovate-100 mb-8">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
          </p>
          <a href="mailto:deesha@rhinovate.ai" className="inline-flex items-center bg-white text-rhinovate-600 px-8 py-4 rounded-lg font-semibold hover:bg-rhinovate-50 transition-colors">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
