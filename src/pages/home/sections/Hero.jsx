import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isFirstText, setIsFirstText] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsFirstText(prev => !prev);
        setIsAnimating(false);
      }, 500); 
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="relative min-h-[100svh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/ratul-ghosh-NPrWYa69Mz0-unsplash.webp"
          alt="Spices Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 mt-16 md:mt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Pure Spices, Natural Remedies {' '}
            <span 
              className={`inline-block transition-all duration-1000 ${
                isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
              style={{ color: isFirstText ? '#3B82F6' : '#60A5FA' }}
            >
              {isFirstText ? 'Nourish Your Body' : 'Elevate Your Health'}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8">
            Spice Up Your Meals, Boost Your Health – Naturally.
          </p>
          <a 
            href="https://paystack.shop/550-natural-spices-and-teas"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#1e3a8a] text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-[#152b67] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Shop Our Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;