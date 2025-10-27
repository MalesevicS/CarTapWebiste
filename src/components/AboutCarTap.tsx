import React from 'react';

const AboutCarTap: React.FC = () => {
  return (
    <section id="about-car-tap" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Get to know CarTap
        </h2>

        {/* Section 1: Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/images/dryw1.webp" 
              alt="CarTap waterless dry wash car cleaning"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Text */}
          <div className="order-1 lg:order-2 text-left lg:text-right">
            <p className="text-lg text-gray-300 leading-relaxed">
              CarTap has been revolutionizing car cleaning since 2026, with a strong focus on environmental sustainability and efficiency. 
              Our mobile service specializes in exterior car cleaning, using a method that saves over 99% of water compared to traditional 
              vehicle washing. Whether you need a quick dry wash, professional wax application, or a premium exterior detailing, we come 
              to your location – helping you dramatically reduce your environmental footprint while maintaining a spotless vehicle.
            </p>
          </div>
        </div>

        {/* Section 2: Mobile Service Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Text */}
          <div className="text-left">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The CarTap mobile app makes exterior car maintenance effortless. Our specialized cleaning services are designed to enhance 
              and protect your vehicle's exterior finish. You can book Dry Wash, Wax, or Premium Wash services anywhere, anytime – at home, 
              the office, or even while you shop. Our trained technicians arrive with all the equipment needed to deliver a professional-grade 
              exterior clean without using a single drop of water.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By choosing CarTap for your exterior car care, you're not just getting a clean vehicle – you're contributing to environmental 
              protection with our nearly 100% biodegradable cleaning products. Our waterless cleaning method reduces greenhouse gas emissions 
              and supports the European Green Deal goals, all while giving your car a showroom-quality shine that lasts.
            </p>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="/images/dryw2.webp" 
              alt="Professional waterless dry wash car cleaning"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Section 3: Leader in Eco-Friendly Exterior Care */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with call to action */}
          <div>
            <img 
              src="/images/dryw3.webp" 
              alt="CarTap dry wash exterior car cleaning team"
              className="w-full h-80 object-cover rounded-2xl shadow-xl relative"
            />
          </div>
          
          {/* Text */}
          <div className="text-left lg:text-right">
            <p className="text-lg text-gray-300 leading-relaxed">
              With increasing environmental regulations and a growing demand for sustainable vehicle care solutions, CarTap positions itself 
              as a leader in eco-friendly exterior car cleaning services. We offer more than just car washing – we provide a comprehensive, 
              sustainable, and digital car care solution specifically focused on maintaining and protecting your vehicle's exterior. Our 
              unique waterless technology and dedication to environmental sustainability are shaping the future of how we care for our vehicles' 
              exteriors, making professional car cleaning both convenient and environmentally responsible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarTap;

