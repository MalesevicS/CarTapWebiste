import React, { useState, useRef, useEffect } from 'react';
import Testimonials from './Testimonials';
import TestimonialArrows from './TestimonialArrows';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
    scrollLeft: null,
    scrollRight: null
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const handleScrollStateChange = (newScrollState) => {
    setScrollState(newScrollState);
  };

  return (
    <div ref={sectionRef} className="relative">
      <Testimonials onScrollStateChange={handleScrollStateChange} />
      {isVisible && (
        <TestimonialArrows 
          onScrollLeft={scrollState.scrollLeft}
          onScrollRight={scrollState.scrollRight}
          canScrollLeft={scrollState.canScrollLeft}
          canScrollRight={scrollState.canScrollRight}
        />
      )}
    </div>
  );
};

export default TestimonialsSection;
