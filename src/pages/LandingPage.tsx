import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-deep-blue overflow-hidden">
        {/* Movement Lines */}
        <div className="absolute w-[3px] h-[300px] bg-cyan/30 top-[10%] left-[15%] rotate-[15deg]" />
        <div className="absolute w-[2px] h-[200px] bg-cyan/30 top-[40%] right-[10%] rotate-[-30deg]" />
        <div className="absolute w-[4px] h-[150px] bg-cyan/30 bottom-[10%] left-[20%] rotate-[45deg]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen items-center justify-center">
          <div className="relative z-10 flex max-w-7xl w-full items-center justify-between">
            {/* Hero Text */}
            <div className="max-w-2xl text-center md:text-left md:mt-0 transform -translate-x-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-deep-blue to-cyan mb-4">
                IACIO
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Launch configurations with precision and orchestrate environment variables at lightning speed
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="bg-cyan text-deep-blue px-6 py-3 rounded-full font-medium hover:bg-cyan/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  Get Started
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Mascot */}
            <div className="relative z-10">
              <img
                src="/assets/logo.svg"
                alt="IACIO Mascot"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-cyan" />
              <div className="flex items-center justify-center w-16 h-16 bg-cyan/10 rounded-full mb-6">
                <div className="w-8 h-8 bg-cyan rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4 flex items-center">
                Instant Configuration Launch
              </h3>
              <p className="text-dark-gray/80">
                Deploy your configurations across environments with zero downtime and maximum reliability.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-cyan" />
              <div className="flex items-center justify-center w-16 h-16 bg-cyan/10 rounded-full mb-6">
                <div className="w-8 h-8 bg-cyan rounded-full rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4 flex items-center">
                Environment Variable Orchestration
              </h3>
              <p className="text-dark-gray/80">
                Manage complex variable dependencies and secrets across all your services seamlessly.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-cyan" />
              <div className="flex items-center justify-center w-16 h-16 bg-cyan/10 rounded-full mb-6">
                <div className="w-8 h-8 bg-cyan rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4 flex items-center">
                Real-time Monitoring & Analytics
              </h3>
              <p className="text-dark-gray/80">
                Track performance, usage, and errors with detailed insights and customizable dashboards.
              </p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-cyan" />
              <div className="flex items-center justify-center w-16 h-16 bg-cyan/10 rounded-full mb-6">
                <div className="w-8 h-8 bg-cyan rounded-full rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4 flex items-center">
                Enterprise-Grade Security
              </h3>
              <p className="text-dark-gray/80">
                Zero-trust architecture with end-to-end encryption and SOC 2 compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-tr from-deep-blue to-cyan py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join thousands of teams who trust IACIO to streamline their configuration management and deploy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-deep-blue px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <img
                src="/assets/logo.svg"
                alt="IACIO Mascot"
                className="w-12 h-12 mb-4"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-deep-blue to-cyan">
                IACIO
              </span>
              <p className="text-center text-white/80 mt-4 max-w-xs">
                Launch configurations with precision. Orchestrate environment variables at scale.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white/90 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cyan transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white/90 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white/90 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cyan transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">API Reference</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70 text-sm">
            &copy; 2026 IACIO. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;