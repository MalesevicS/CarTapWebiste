import React from 'react';

interface TestimonialArrowsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

const TestimonialArrows: React.FC<TestimonialArrowsProps> = ({ onScrollLeft, onScrollRight, canScrollLeft, canScrollRight }) => {
  return (
    <>
      {/* Left Arrow */}
      <button 
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        className={`absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 z-10 pointer-events-auto ${
          canScrollLeft 
            ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer shadow-lg' 
            : 'bg-gray-800 cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={onScrollRight}
        disabled={!canScrollRight}
        className={`absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 z-10 pointer-events-auto ${
          canScrollRight 
            ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer shadow-lg' 
            : 'bg-gray-800 cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};

export default TestimonialArrows;
