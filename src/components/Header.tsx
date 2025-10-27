import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] max-w-6xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 px-2 sm:px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-cyan-400 text-xl sm:text-2xl font-bold">CarTap</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <button 
              className="text-white hover:text-cyan-400"
              onClick={() => scrollToSection('our-services')}
            >
              Our Services
            </button>
            <button 
              className="text-white hover:text-cyan-400"
              onClick={() => scrollToSection('eco-friendly')}
            >
              Eco-Friendly
            </button>
            <button 
              className="text-white hover:text-cyan-400"
              onClick={() => scrollToSection('discover-cartap')}
            >
              About Us
            </button>
            <button 
              className="text-white hover:text-cyan-400"
              onClick={() => scrollToSection('testimonials')}
            >
              Reviews
            </button>
            <button 
              className="text-white hover:text-cyan-400"
              onClick={() => scrollToSection('faq')}
            >
              FAQs
            </button>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Download App Button */}
            <button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base"
              onClick={() => scrollToSection('download-app')}
            >
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Download</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-cyan-400 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 mt-4 pt-4">
            <div className="px-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('our-services')}
                >
                  Our Services
                </button>
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('eco-friendly')}
                >
                  Eco-Friendly
                </button>
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('discover-cartap')}
                >
                  About Us
                </button>
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('testimonials')}
                >
                  Reviews
                </button>
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('faq')}
                >
                  FAQs
                </button>
                <button 
                  className="block w-full text-left text-white hover:text-cyan-400 py-2"
                  onClick={() => scrollToSection('download-app')}
                >
                  Download App
                </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

