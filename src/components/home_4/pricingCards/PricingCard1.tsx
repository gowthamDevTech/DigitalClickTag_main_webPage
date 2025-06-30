import React from 'react';

const PricingCard1 = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "Rs.1,00,000",
      duration: "1 Year",
      monthlyPrice: "(Rs.8333x12 Months)",
      target: "(For Small Businesses & Startups)",
      features: [
        "Social Media Management (Youtube, Facebook & Instagram)",
        "4 Video Reel (30 sec) - Per Reels Guarantee Views (5000-10000) (1 Month)",
        "High-Quality Editing - Script Not Available",
        "Raw Footage Provided by Client",
        "Monthly Performance Report",
        "1 Year - (48 Video Reels)"
      ],
      bgColor: "bg-green-500",
      hoverBgColor: "hover:bg-green-600"
    },
    {
      name: "Growth Package",
      price: "Rs.1,30,000",
      duration: "1 Year",
      monthlyPrice: "(Rs.10,833x12 Months)",
      target: "(For Expanding Businesses)",
      features: [
        "Social Media Management (Linkedin, Twitter, Youtube, Facebook & Instagram)",
        "8 Video Reels (30 sec each) Per Reels Guarantee Views (5,000-10,000)",
        "High-Quality Editing - Script Not Available",
        "Raw Footage Provided by Client",
        "1 Year - (96 Video Reels)"
      ],
      bgColor: "bg-blue-500",
      hoverBgColor: "hover:bg-blue-600"
    },
    {
      name: "Premium Package",
      price: "Rs.1,60,000",
      duration: "1 Year",
      monthlyPrice: "(Rs.13,333x12 Months)",
      target: "(For Serious Growth & ROI)",
      features: [
        "Social Media Management (Linkedin, Twitter, Youtube, Facebook & Instagram)",
        "10 Video Reels (30 sec each) Per Reels Guarantee Views (5,000-10,000) + 10 Videos Content Strategy & Scripting Every Month.",
        "High-Quality Editing",
        "Raw Footage Provided by Client",
        "Competitor Analysis Report",
        "1 Year - (120 Video Reels)"
      ],
      bgColor: "bg-red-500",
      hoverBgColor: "hover:bg-red-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">
          Social Media Marketing Service Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 ${pkg.bgColor} text-white`}>
              <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full transform rotate-12 shadow-md">
                {pkg.duration}
              </div>
              <h3 className="text-3xl font-extrabold mb-2">{pkg.name}</h3>
              {/* <p className="text-xl font-semibold mb-1">{pkg.price}</p> */}
              {/* <p className="text-sm mb-4">{pkg.monthlyPrice}</p> */}
              <p className="text-md mb-6 opacity-90">{pkg.target}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full text-lg font-bold bg-white text-gray-800 shadow-md ${pkg.hoverBgColor} hover:text-white transition duration-300`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard1;
