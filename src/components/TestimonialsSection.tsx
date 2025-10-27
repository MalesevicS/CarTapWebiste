import React, { useState, useRef, useEffect } from 'react';
import Testimonials from './Testimonials';
import TestimonialArrows from './TestimonialArrows';

interface ScrollState {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: (() => void) | null;
  scrollRight: (() => void) | null;
}

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollState, setScrollState] = useState<ScrollState>({
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

  const handleScrollStateChange = (newScrollState: ScrollState) => {
    setScrollState(newScrollState);
  };

  return (
    <div ref={sectionRef} className="relative">
      <Testimonials onScrollStateChange={handleScrollStateChange} />
      {isVisible && scrollState.scrollLeft && scrollState.scrollRight && (
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
