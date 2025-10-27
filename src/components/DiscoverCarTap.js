import React from 'react';

const DiscoverCarTap = () => {
  const cards = [
    {
      id: 1,
      title: "Our Services",
      description: "CarTap offers three tailored cleaning services to meet your needs: Dry Wash, Wax, and Premium Wash",
      highlight: "Our Services",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Eco-Friendly Approach",
      description: "We use no additional water during cleaning! Our proprietary cleaning product is nearly 100% biodegradable",
      highlight: "Eco-Friendly",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Benefits of CarTap",
      description: "Saves over 99% of water compared to traditional car washing, significantly reducing your environmental footprint",
      highlight: "Benefits",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Leader in Sustainable Car Care",
      description: "We offer more than just a cleaning service – we provide a comprehensive, sustainable, and digital solution",
      highlight: "Sustainable Car Care",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="discover-cartap" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Discover CarTap</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              {/* Card Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-white transition-colors duration-300">
                  {card.title.split(card.highlight).map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {card.highlight && index < card.title.split(card.highlight).length - 1 && (
                        <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{card.highlight}</span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{card.description}</p>
              </div>
              
              {/* Arrow Icon with enhanced animation */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 hover:bg-cyan-500/20">
                <svg className="w-4 h-4 text-white group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-500/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverCarTap;
