import React from 'react';

const EcoFriendly = () => {
  const benefits = [
    {
      title: "Water Conservation",
      description: "Saves over 99% of water compared to traditional car washing",
      icon: "💧",
      stat: "99%+"
    },
    {
      title: "Biodegradable Products",
      description: "Nearly 100% biodegradable cleaning products",
      icon: "🌱",
      stat: "100%"
    },
    {
      title: "CO2 Reduction",
      description: "Reduces CO2 emissions by minimizing travel for vehicle maintenance",
      icon: "🌍",
      stat: "Lower"
    },
    {
      title: "European Green Deal",
      description: "Every cleaned vehicle contributes to the goals of the European Green Deal",
      icon: "🇪🇺",
      stat: "Compliant"
    }
  ];

  return (
    <section id="eco-friendly" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Eco-Friendly Approach</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We use no additional water during the exterior and interior cleaning process! Our proprietary cleaning product is nearly 100% biodegradable, ensuring minimal environmental impact. The result of a CarTap cleaning is a long-lasting protective coating that repels dust and water while also shielding your car from UV radiation, keeping it resilient and radiant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Leader in Sustainable Car Care</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With increasing environmental regulations and growing demand for green services, CarTap positions itself as a leader in eco-friendly vehicle care. We offer more than just a cleaning service – we provide a comprehensive, sustainable, and digital solution tailored to the needs of modern drivers. Our unique technology and dedication to sustainability are shaping the future of car care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;
