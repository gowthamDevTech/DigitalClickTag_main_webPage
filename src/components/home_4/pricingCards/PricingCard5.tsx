'use client';
import React from 'react';

interface Package {
  title: string;
  price: string;
  features: string[];
  gradient: string;
}

const adsPackages: Package[] = [
  {
    title: '🎯 Starter',
    price: 'Rs.5,000',
    features: [
      'Google Business Profile Optimization + Verification',
      '1 Search Ad Campaign',
      'Basic Keywords Research',
      'Ad Copywriting',
      'Monthly Report',
      'Google Ads Payment: Additional',
    ],
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    title: '📈 Growth',
    price: 'Rs.10,000',
    features: [
      'GMB + Tag Manager + Analytics Setup',
      '2 Campaigns',
      'Conversion Tracking',
      'Competitor Keyword Analysis',
      'Ad Optimization (2 revisions/month)',
      'Bi-weekly Reports',
      'Google Ads Payment: Additional',
    ],
    gradient: 'from-purple-400 to-fuchsia-600',
  },
  {
    title: '🚀 Pro',
    price: 'Rs.20,000',
    features: [
      'All Growth Features + Search Console Integration',
      'Landing Page Design Suggestions',
      '4 Campaigns',
      'Conversion Tracking Setup',
      'Ad Optimization (2 revisions/month)',
      'Bi-weekly Reports',
      'Google Ads Payment: Additional',
    ],
    gradient: 'from-red-500 to-pink-500',
  },
];

const GoogleAdsPackages: React.FC = () => {
  return (
    <section className="my-16">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
  3. Google Ads Packages
</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {adsPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border"
          >
            <div className={`h-2 rounded-t-xl bg-gradient-to-r ${pkg.gradient}`} />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-700">
  {pkg.title}
</h3>

              {/* <p className="text-pink-600 text-lg font-bold mb-4">{pkg.price}</p> */}
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAdsPackages;
