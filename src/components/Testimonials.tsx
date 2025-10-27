import React, { useRef, useEffect, useCallback } from 'react';

interface ScrollState {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
}

interface TestimonialsProps {
  onScrollStateChange?: (scrollState: ScrollState) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onScrollStateChange }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      id: 1,
      text: "Great service as always, Mr. Marko Petrovic did an excellent job cleaning my car and made sure all stains are gone!",
      rating: 5,
      name: "Ana Stojanovic",
      platform: "on App Store"
    },
    {
      id: 2,
      text: "I ordered external and internal car wash. The guy who did it was so pleasant and the job was perfectly done. I am absolutely impressed",
      rating: 5,
      name: "Stefan Nikolic",
      platform: "on Play Store"
    },
    {
      id: 3,
      text: "We've been using CarTap for 3 years now and it's really a blessing, helping us fuel the car when needed and the drivers are very professional and provide amazing services.",
      rating: 5,
      name: "Milica Jovanovic",
      platform: "on App Store"
    },
    {
      id: 4,
      text: "Very good service, fast fuel delivery. I recommend it to everyone who wants quality and reliable service for their car.",
      rating: 4,
      name: "Dejan Markovic",
      platform: "on Play Store"
    },
    {
      id: 5,
      text: "CarTap has changed the way I take care of my car. Simple, fast and professional!",
      rating: 5,
      name: "Jovana Radovic",
      platform: "on App Store"
    }
  ];

  const scrollLeft = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: -320, // Width of one card + gap
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollRight = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: 320, // Width of one card + gap
        behavior: 'smooth'
      });
    }
  }, []);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const newCanScrollLeft = container.scrollLeft > 0;
      const newCanScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
      
      // Pass scroll state to parent component
      if (onScrollStateChange) {
        onScrollStateChange({
          canScrollLeft: newCanScrollLeft,
          canScrollRight: newCanScrollRight,
          scrollLeft: scrollLeft,
          scrollRight: scrollRight
        });
      }
    }
  }, [onScrollStateChange, scrollLeft, scrollRight]);

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [checkScrollButtons]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-cyan-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiences
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          onScroll={checkScrollButtons}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-80 bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>

              {/* Reviewer Info */}
              <div className="text-gray-400 text-sm">
                <span className="font-medium">{testimonial.name}</span>
                <span className="ml-1">{testimonial.platform}</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
