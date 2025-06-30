'use client';
import React from 'react';

interface Package {
  title: string;
  price: string;
  features: string[];
  gradient: string;
}

const websitePackages: Package[] = [
  {
    title: '🛠 Basic Website',
    price: 'Rs.10,000',
    features: [
      '5-Page Website',
      'Customize Design',
      'Mobile & SEO-Friendly',
      'Contact Form & Google Map Integration',
      'Basic Speed Optimization',
      '5 Revision',
      'Delivery: 7 Days',
      'Platform: Godaddy (Domain & Hosting Plan Additional Charges)',
      'Hosting Details: Website Builder',
    ],
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    title: '🚀 Standard Website',
    price: 'Rs.15,000',
    features: [
      'Up to 10 Pages (Fully Custom)',
      'Advanced UI/UX Design',
      'Speed & Performance Optimization',
      'Advanced SEO Setup',
      'WhatsApp Integration',
      'Blog Setup & Content Upload',
      'Google Analytics & Search Console Setup',
      '5 Revisions',
      'Delivery: 15–20 Days',
      'Platform: Godaddy',
      'Hosting Details: Website Builder',
    ],
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: '🛒 E-Commerce Website',
    price: 'Rs.50,000',
    features: [
      'Shopify',
      'Product Upload (Up to 25 Products)',
      'Razorpay Payment Gateway Integration',
      'Advanced SEO Setup',
      'Product SEO Optimization',
      'Image SEO (Alt Text & Compression)',
      'Google Tools Integration',
      'Speed Optimization',
      'Social Media & WhatsApp Integration',
      'Training Session',
      '10 Revisions',
      'Delivery: 20–35 Days',
      'Platform: Shopify',
      'Hosting Details: Shopify',
    ],
    gradient: 'from-pink-500 to-red-500',
  },
];

const WebsitePackages: React.FC = () => {
  return (
    <section className="my-16">
  <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
  1. Website Design & Development Packages
</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {websitePackages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border"
          >
            <div className={`h-2 rounded-t-xl bg-gradient-to-r ${pkg.gradient}`} />
            <div className="p-6">
             <h3 className="text-xl font-bold mb-2 text-indigo-700">
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

export default WebsitePackages;
