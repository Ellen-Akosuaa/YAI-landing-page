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
      }, 500); // Half of the transition time
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Spices Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pure Spices, Natural Remedies – {' '}
            <span 
              className={`inline-block transition-all duration-1000 ${
                isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
              style={{ color: isFirstText ? '#3B82F6' : '#60A5FA' }}
            >
              {isFirstText ? 'Nourish Your Body' : 'Elevate Your Health'}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Spice Up Your Meals, Boost Your Health – Naturally.
          </p>
          <button className="px-8 py-4 bg-[#1e3a8a] text-white rounded-lg text-lg font-semibold hover:bg-[#152b67] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Shop Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;