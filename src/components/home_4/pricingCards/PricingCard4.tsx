'use client';
import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface Package {
  title: string;
  price: string;
  features: string[];
  gradient: string;
}

const seoPackages: Package[] = [
  {
    title: '📍 State Level SEO',
    price: 'Rs.30,000',
    features: [
      'Website Audit',
      '300 Hidden Pages + Keyword Research',
      '300 Titles & Descriptions',
      'Image Optimization',
      'Google Search Console, Tag Manager & Analytics Setup',
      'Sitemap & Robots.txt Optimization',
      'Monthly SEO Report',
    ],
    gradient: 'from-green-400 to-green-600',
  },
  {
    title: '🌐 Country Level SEO',
    price: 'Rs.60,000',
    features: [
      'Website Audit',
      '600 Hidden Pages + Keyword Research',
      '600 Titles & Descriptions',
      'Image Optimization',
      'Google Tools Setup',
      'Sitemap & Robots.txt Optimization',
      'Monthly SEO Report',
    ],
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: '🌍 Global Level SEO',
    price: 'Rs.90,000',
    features: [
      'Website Audit',
      '900 Hidden Pages + Keyword Research',
      '900 Titles & Descriptions',
      'Image Optimization',
      'Google Tools Setup',
      'Sitemap & Robots.txt Optimization',
      'Monthly SEO Report',
    ],
    gradient: 'from-cyan-500 to-teal-600',
  },
];

const SEOPackages: React.FC = () => {
  // Add keyframe animation for the gradient
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
      return undefined;
    };
  }, []);

  return (
    <section className="my-16">
     <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
  2. SEO Packages
</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {seoPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border"
          >
            <div className={`h-2 rounded-t-xl bg-gradient-to-r ${pkg.gradient}`} />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-700">
  {pkg.title}
</h3>

              {/* <p className="text-pink-600 text-lg font-bold mb-4">{pkg.price}</p> */}
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link 
                href="/home/contact"
                className="relative inline-flex items-center justify-center w-full py-3 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s ease infinite',
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEOPackages;
