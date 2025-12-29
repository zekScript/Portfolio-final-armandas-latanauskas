"use client"
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center pt-100 flex-col z-50">
      <h1 
        className={`text-4xl z-50 md:text-7xl font-serif uppercase text-white leading-none text-shadow-lg transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '0.2s'
        }}
      >
        Armandas Latanauskas
      </h1>
      
      <p 
        className={`text-md md:text-3xl uppercase tracking-widest text-[#E7B070] z-10 mt-6 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '0.6s'
        }}
      >
        Junior Web developer
      </p>
      
      {/* Decorative animated line */}
      <div 
        className={`mt-8 h-px bg-gradient-to-r from-transparent via-[#E7B070] to-transparent transition-all duration-[100] ease-out ${
          isVisible 
            ? 'opacity-100 w-64' 
            : 'opacity-0 w-0'
        }`}
        style={{
          transitionDelay: '1s'
        }}
      />
    </div>
  );
};

export default HeroSection;