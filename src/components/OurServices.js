import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Dry Wash",
      description: "Quick and efficient cleaning without using water",
      icon: "🚿",
      features: ["Water-free cleaning", "Quick service", "Eco-friendly"]
    },
    {
      id: 2,
      title: "Wax",
      description: "Extra protection for a glossy and durable finish",
      icon: "✨",
      features: ["Glossy finish", "UV protection", "Long-lasting"]
    },
    {
      id: 3,
      title: "Premium Wash",
      description: "Comprehensive care for a spotless exterior and interior shine",
      icon: "💎",
      features: ["Interior & exterior", "Complete detailing", "Premium quality"]
    }
  ];

  return (
    <section id="our-services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CarTap offers three tailored cleaning services to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
