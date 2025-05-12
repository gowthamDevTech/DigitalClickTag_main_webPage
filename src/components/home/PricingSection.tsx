import React from 'react';
import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$999',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 Pages Website',
        'Mobile Responsive Design',
        'Contact Form',
        'Basic SEO',
        '1 Month Support',
      ],
    },
    {
      name: 'Professional',
      price: '$1,999',
      description: 'Ideal for growing businesses',
      features: [
        '10 Pages Website',
        'Mobile Responsive Design',
        'Advanced Contact Form',
        'Advanced SEO',
        '3 Months Support',
        'Social Media Integration',
        'Blog Setup',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      description: 'For large businesses with complex needs',
      features: [
        'Unlimited Pages',
        'Custom Design',
        'Advanced Features',
        'Premium SEO',
        '6 Months Support',
        'E-commerce Integration',
        'Custom CMS',
        'API Integration',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /project
                  </span>
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 