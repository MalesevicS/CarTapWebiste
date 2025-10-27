import React, { useEffect, useState } from 'react';

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animateServices, setAnimateServices] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fullText = "Car Cleaning Revolution";

  useEffect(() => {
    // Trigger main animation
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    
    // Trigger services animation
    const timer2 = setTimeout(() => setAnimateServices(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  const services = [
    {
      title: "Dry Wash",
      description: "Quick and efficient cleaning without using water"
    },
    {
      title: "Wax",
      description: "Extra protection for a glossy and durable finish"
    },
    {
      title: "Premium Wash",
      description: "Comprehensive care for a spotless exterior and interior shine"
    },
    {
      title: "Eco-Friendly",
      description: "Nearly 100% biodegradable cleaning products"
    },
    {
      title: "Water Saving",
      description: "Saves over 99% of water compared to traditional washing"
    },
    {
      title: "Mobile Service",
      description: "We come to you wherever your vehicle is"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Video Background - Full Screen */}
      <div className="relative w-full h-screen">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/yW9OVVNfwG8?autoplay=1&mute=1&loop=1&playlist=yW9OVVNfwG8&controls=0&showinfo=0&rel=0&modestbranding=1&start=0&end=0"
          title="Car Dry Cleaning Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
        
        {/* Main Content Over Video */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              CarTap
            </h1>
            <h2 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-cyan-400 mb-8 leading-tight transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {displayedText}
              <span className="animate-pulse text-cyan-300">|</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Below Video */}
      <div className="relative z-10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  animateServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <h3 className="text-white font-semibold text-sm mb-2">{service.title}</h3>
                <p className="text-gray-400 text-xs">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Main Description */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionizing Car Cleaning
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                CarTap has been transforming car cleaning since 2026, with a strong focus on environmental sustainability and convenience. 
                Our mobile app allows you to order car cleaning services wherever your vehicle is – at home, a shopping mall, a garage, 
                or a restaurant – all from the comfort of your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
