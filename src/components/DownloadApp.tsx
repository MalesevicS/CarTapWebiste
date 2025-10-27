import React from 'react';

const DownloadApp: React.FC = () => {
  return (
    <section id="download-app" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side - Text and QR Code */}
            <div className="flex-1 mb-8 lg:mb-0 lg:mr-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Download the CarTap App
              </h2>
              <p className="text-white text-lg mb-6 opacity-90">
                Experience a simple, eco-friendly, and efficient way to keep your car looking impeccable!
              </p>
              
              {/* QR Code Section */}
              <div className="bg-white rounded-2xl p-6 max-w-sm">
                <div className="flex items-center space-x-4">
                  {/* QR Code Placeholder */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-lg">Scan to download</p>
                    <p className="text-gray-600 text-sm">CarTap Mobile App</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-3 border border-black rounded-sm">
                          <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-cyan-500 px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">CarTap</h3>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-cyan-500 font-bold text-sm">+</span>
                        </div>
                      </div>
                      <p className="text-white text-sm">My location: New Belgrade</p>
                      <p className="text-white text-sm">Add vehicle (Make & model)</p>
                    </div>

                    {/* Services Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {/* Fuel */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">Fuel</p>
                        </div>

                        {/* Car Wash */}
                        <div className="text-center relative">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 7h-1V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9h1a1 1 0 0 0 0-2zM8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8V4zm8 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9h8v11z"/>
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">10% off</div>
                          <p className="text-xs text-gray-600">Car wash</p>
                        </div>

                        {/* Battery */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M15.67 4H14V2c0-.55-.45-1-1-1s-1 .45-1 1v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">Battery</p>
                        </div>

                        {/* Tyres */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">Tyres</p>
                        </div>

                        {/* Servicing */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">Servicing</p>
                        </div>

                        {/* Cars */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">Cars</p>
                        </div>

                        {/* Rescue Fuel */}
                        <div className="text-center relative">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">!</div>
                          <p className="text-xs text-gray-600">Rescue Fuel</p>
                        </div>

                        {/* More */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">More</p>
                        </div>
                      </div>

                      {/* Bottom Banner */}
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-4 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold">Delivery in 20 mins</span>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 7h-1V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9h1a1 1 0 0 0 0-2zM8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8V4zm8 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9h8v11z"/>
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm">Fuel up anywhere the same price as the petrol station</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadApp;
