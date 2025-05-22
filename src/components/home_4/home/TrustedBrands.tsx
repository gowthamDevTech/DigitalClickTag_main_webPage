
// components/TrustedBrands.jsx
import React from 'react';

const brands = [
  '/Region-3.png',
  '/Region-3.png',
  '/Region-3.png',
  '/Region-3.png',
  '/Region-3.png',
  '/Region-3.png',
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Trusted by Great Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="w-24 h-24 flex items-center justify-center">
              <img src={brand} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;