// components/PackageCard.tsx
import React from 'react';

interface PricingCard6Props {
  title: string;
  price: string;
  features: string[];
  notes?: string[];
  highlightColor: string;
}

const PricingCard6: React.FC<PricingCard6Props> = ({ title, price, features, notes, highlightColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl py-10">
      <h3 className={`text-2xl font-semibold mb-2 ${highlightColor}`}>{title}</h3>
      {/* <p className="text-xl font-bold text-gray-800 mb-4">{price}</p> */}
      <ul className="list-disc list-inside space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
      {notes && (
        <div className="mt-4 text-sm text-gray-600">
          {notes.map((note, index) => (
            <p key={index}>🚚 {note}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PricingCard6;
