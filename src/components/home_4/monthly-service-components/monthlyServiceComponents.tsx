// pages/index.tsx
import Head from 'next/head';
import PricingCard2 from '@/components/home_4/pricingCards/pricingCard2'; 
import { MonthlyPricingPlan } from '@/types/pricingCardTypes'; // Import the interface

const plans: MonthlyPricingPlan[] = [
  {
    name: 'Starter Plan',
    tagline: 'Great for small shops, local services, and early-stage entrepreneurs.',
    price: 9500,
    features: [
      'Social Media Management (Youtube, Facebook & Instagram)',
      '2 Poster Free',
      'Raw Footage Provided by Client',
      'Monthly Performance Report',
      'Campaign Type: Awareness, Traffic, Engagement, Leads, Sales (Anyone)',
      '5 Script+Content Ideas',
    ],
    videoEditingDetails: '5 Video Reel Editing (30-60 sec) - ₹3000',
    campaignDetails: '5 Campaign Setup & Maintenance - ₹6500',
    campaignMetaAdsPayment: '5 Campaign Meta Ads Payment : Additional',
  },
  {
    name: 'Growth Plan',
    tagline: 'Ideal for wholesalers, restaurants, coaching centers, and product-based businesses.',
    price: 13500,
    features: [
      'Social Media Management (Linkedin, Twitter, Youtube, Facebook & Instagram)',
      '2 Poster Free',
      'Raw Footage Provided by Client',
      'Monthly Performance Report',
      'Campaign Type: Awareness, Traffic, Engagement, Leads, Sales (Anyone)',
      '10 Script+Content Ideas',
    ],
    videoEditingDetails: '10 Video Reel Editing (30-60 sec) - ₹6000',
    campaignDetails: '10 Campaign Setup & Maintenance - ₹7500',
    campaignMetaAdsPayment: '10 Campaign Meta Ads Payment : Additional',
    isHighlighted: true, // Mark this plan as highlighted
  },
  {
    name: 'Pro Plan',
    tagline: 'Best for manufacturers, e-commerce brands, hospitals, resorts and real estate businesses.',
    price: 17500,
    features: [
      'Social Media Management (Linkedin, Twitter, Youtube, Facebook & Instagram)',
      '2 Poster Free',
      'Raw Footage Provided by Client',
      'Monthly Performance Report',
      'Campaign Type: Awareness, Traffic, Engagement, Leads, Sales (Anyone)',
      '15 Script+Content Ideas',
    ],
    videoEditingDetails: '15 Video Reel Editing (30-60 sec) - ₹9000',
    campaignDetails: '15 Campaign Setup & Maintenance - ₹8500',
    campaignMetaAdsPayment: '15 Campaign Meta Ads Payment : Additional',
  },
];

export const MonthlyPricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Maximize Your Online Presence with Digital Singam</title>
        <meta name="description" content="Digital Singam's comprehensive digital marketing plans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Maximize Your Online Presence
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 sm:text-2xl">
            Choose the perfect plan to elevate your business with Digital Singam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard2 key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

