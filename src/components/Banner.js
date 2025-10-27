import React from 'react';

const Banner = () => {
  return (
    <div className="relative mt-8 py-8 flex justify-center">
      <div className="w-full max-w-7xl mx-4">
      {/* Main Banner Card */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rise and shine. Your car deserves a spa day too.
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 mb-8 leading-relaxed">
              Give your ride the glow it's worthy of. Allow our specialist car wash team to come to you and sparkle up your day.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Discover our App</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D Car Wash Items */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                {/* Spray Bottle */}
                <div className="relative mb-6">
                  <div className="w-16 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full rounded-b-2xl shadow-lg">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-t-full rounded-b-xl"></div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  {/* Spray */}
                  <div className="absolute -right-2 top-4">
                    <div className="w-8 h-8 bg-cyan-300/30 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Microfiber Cloth */}
                <div className="relative">
                  <div className="w-20 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform rotate-12">
                    <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-md"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-200 rounded-full"></div>
                    <div className="absolute top-3 left-3 w-1 h-1 bg-yellow-200 rounded-full"></div>
                    <div className="absolute top-5 left-2 w-1 h-1 bg-yellow-200 rounded-full"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/40 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-300/40 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
