// components/PricingCard.tsx
import React from 'react';
import { MonthlyPricingPlan } from '@/types/pricingCardTypes'; // Import the interface

interface PricingCardProps {
  plan: MonthlyPricingPlan;
}

const PricingCard2: React.FC<PricingCardProps> = ({ plan }) => {
  const {
    name,
    tagline,
    price,
    features,
    videoEditingDetails,
    campaignDetails,
    campaignMetaAdsPayment,
    isHighlighted,
  } = plan;

  return (
    <div
      className={`relative flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
        isHighlighted ? 'border-purple-600 ring-4 ring-purple-300' : ''
      }`}
    >
      {isHighlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{name}</h3>
      <p className="mb-6 text-gray-600">{tagline}</p>
      <div className="mb-6">
        {/* <span className="text-5xl font-extrabold text-gray-900">₹{price}</span> */}
        {/* <span className="text-xl font-medium text-gray-500">/month</span> */}
      </div>
      <ul className="mb-8 flex-grow space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg
              className="mr-2 h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
        {videoEditingDetails && (
          <li className="flex items-center text-gray-700">
            <svg
              className="mr-2 h-5 w-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            {videoEditingDetails}
          </li>
        )}
        {campaignDetails && (
          <li className="flex items-center text-gray-700">
            <svg
              className="mr-2 h-5 w-5 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8A7 7 0 0110 7a7 7 0 017-7h.001C17.5 0 17.5 0 17.5 0h.001z"
              ></path>
            </svg>
            {campaignDetails}
          </li>
        )}
        {campaignMetaAdsPayment && (
          <li className="flex items-center text-gray-700">
            <svg
              className="mr-2 h-5 w-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            {campaignMetaAdsPayment}
          </li>
        )}
      </ul>
      <button className="mt-auto block w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard2;