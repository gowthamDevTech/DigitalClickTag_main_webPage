import React from 'react';
import ButtonLinearGradient1 from '@/components/home_4/buttons/button1';

const Card1 = () => {
  const bonusAddons = [
    "Instagram Growth Audit & Setup: FREE",
    "YouTube Channel Audit & Setup: FREE",
    "Google My Business Audit & Setup: FREE",
    "Competitor Database: FREE",
    "Marketing Trends Report: FREE",
    "Content Creation using Smartphone + Raw Footage Delivery + On-Spot Video Background Setup Ideas: FREE (🚫 No need for a videography team or expensive studio setup)"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">
          <span role="img" aria-label="puzzle piece">🧩</span> Bonus Add-ons (Available for All Plans)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusAddons.map((addon, index) => (
            <div key={index} className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-lg font-medium text-gray-700">{addon}</p>
            </div>
          ))}
        </div>
        <ButtonLinearGradient1 text={'Get a Free Consultation'}/>
        
      </div>
    </section>
  );
};

export default Card1;
