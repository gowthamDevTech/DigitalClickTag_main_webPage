
// components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/Main → Section.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Digital Singam</h1>
      </div>
    </section>
  );
};

export default HeroSection;