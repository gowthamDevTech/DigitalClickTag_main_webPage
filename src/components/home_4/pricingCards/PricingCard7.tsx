"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const pricingData = {
  websites: [
    {
      title: "Simple Website",
      price: "₹10,000 – ₹25,000",
      features: [
        "3–5 pages",
        "Responsive design",
        "Basic SEO",
        "Contact form",
      ],
      ideal: ["Portfolios", "Freelancers", "Local shops", "Coaching centers"],
    },
    {
      title: "Business Website",
      price: "₹25,000 – ₹75,000",
      features: [
        "5–15 dynamic pages",
        "CMS integration",
        "Blog/news module",
        "Advanced forms",
      ],
      ideal: [
        "Startups",
        "Agencies",
        "Clinics",
        "Real estate firms",
        "Service companies",
      ],
    },
    {
      title: "E-Commerce Website",
      price: "₹75,000 – ₹2,00,000",
      features: [
        "Product catalog",
        "Cart & Checkout",
        "Payment gateway",
        "Admin dashboard",
      ],
      ideal: ["Online stores", "Restaurants", "Fashion brands", "Retail shops"],
    },
    {
      title: "Custom Web App / SaaS",
      price: "₹2,00,000+",
      features: [
        "Custom dashboards",
        "User roles",
        "API integrations",
        "Real-time features",
      ],
      ideal: [
        "Marketplaces",
        "CRMs",
        "ERPs",
        "SaaS platforms",
        "Learning systems",
      ],
    },
  ],
  apps: [
    {
      title: "Simple App",
      price: "₹30,000 – ₹1,00,000",
      features: ["4–5 screens", "Basic UI/UX", "Firebase backend"],
      ideal: ["Event apps", "Info apps", "Digital brochures"],
    },
    {
      title: "Standard App",
      price: "₹1,00,000 – ₹2,50,000",
      features: [
        "8–15 screens",
        "Login/Register",
        "Push notifications",
        "Payment gateway",
      ],
      ideal: ["Food ordering", "Fitness apps", "Booking apps", "Small e-shops"],
    },
    {
      title: "Complex App",
      price: "₹2,50,000 +",
      features: [
        "20+ screens",
        "Real-time chat",
        "GPS tracking",
        "iOS + Android",
      ],
      ideal: [
        "Ride-sharing",
        "Delivery apps",
        "Healthcare apps",
        "Fintech",
        "Marketplaces",
      ],
    },
  ],
};

const WebsitePrice2 = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Pricing Plans
        </h2>

        {/* Websites Section */}
        <h3 className="text-2xl font-semibold mb-6">🌐 Websites</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingData.websites.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              {/* <p className="text-lg font-bold text-indigo-600 mb-4">
                {item.price}
              </p> */}
              <ul className="text-gray-600 text-sm mb-4 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-6">
                <span className="font-medium text-gray-700">Ideal For:</span>{" "}
                {item.ideal.join(", ")}
              </p>
              <Link 
                href="/home/contact"
                className="relative inline-flex items-center justify-center w-full py-3 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s ease infinite',
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Apps Section */}
        <h3 className="text-2xl font-semibold mb-6">📱 Mobile Apps</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.apps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              {/* <p className="text-lg font-bold text-indigo-600 mb-4">
                {item.price}
              </p> */}
              <ul className="text-gray-600 text-sm mb-4 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-6">
                <span className="font-medium text-gray-700">Ideal For:</span>{" "}
                {item.ideal.join(", ")}
              </p>
              <Link 
                href="/home/contact"
                className="relative inline-flex items-center justify-center w-full py-3 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s ease infinite',
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePrice2;
