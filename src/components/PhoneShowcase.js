import React from 'react';

const PhoneShowcase = () => {
  return (
    <section id="phone-showcase" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Phone */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* 3D Phone Container */}
              <div className="relative w-80 h-96 perspective-1000">
                <div className="absolute inset-0 transform-gpu animate-spin-slow">
                  {/* Phone Body */}
                  <div className="w-72 h-96 bg-gray-800 rounded-3xl shadow-2xl relative mx-auto">
                    {/* Phone Screen - Full Screen Splash */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                      {/* Full Screen Logo */}
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="relative">
                          <img 
                            src="/cartap-logo.svg" 
                            alt="CarTap Logo" 
                            className="h-40 w-auto mb-6 drop-shadow-2xl filter brightness-110"
                          />
                          {/* Glow effect */}
                          <div className="absolute inset-0 h-40 w-auto mb-6 opacity-30">
                            <img 
                              src="/cartap-logo.svg" 
                              alt="CarTap Logo Glow" 
                              className="h-full w-auto blur-sm"
                            />
                          </div>
                        </div>
                        <div className="text-white text-lg font-light opacity-90 animate-pulse">
                          Loading...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-cyan-400 mb-6 leading-tight">
              The everything app for your car
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Fuel delivery, car wash, servicing and more – just tap and we'll roll to wherever you are. 
              I mean, who still goes to the petrol station or the garage for vehicle services anymore? 
              It's 2025 – where CarTapW comes to you.
            </p>
            
            {/* QR Code Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  {/* QR Code */}
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-900 rounded grid grid-cols-8 gap-1 p-2">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-sm ${
                            Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">CarTapW</h3>
                    <p className="text-gray-300 text-sm">Scan to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PhoneShowcase;
