
// components/ServicePlans.jsx
import React from 'react';

const servicePlans = [
  {
    title: 'Business Road Map',
    description: 'Startups, entrepreneurs, small business owners',
    image: '/Region-2.jpg',
    buttonText: 'Get Started Now'
  },
  {
    title: 'Yearly Service Plan',
    description: 'For serious business owners who want to commit to long-term brand building',
    image: '/Region-2.jpg',
    buttonText: 'Get Started Now'
  },
  {
    title: 'Website | SEO | Google Ads',
    description: 'Fuel Business growth',
    image: '/Region-2.jpg',
    buttonText: 'Get Started Now'
  }
];

const ServicePlans = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          <span role="img" aria-label="fire">🔥</span> Ready to grow your business
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {servicePlans.map((plan, index) => (
            <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 p-4`}>
              <div className={`rounded-lg shadow-lg overflow-hidden p-6 text-center
                ${index === 0 ? 'bg-green-500 text-white' : index === 1 ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-sm mb-4">{plan.description}</p>
                <img src={plan.image} alt={plan.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                  {plan.buttonText} <span role="img" aria-label="fire">🔥</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;