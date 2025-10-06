import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Transform Your Digital Presence
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          We help businesses grow by providing innovative digital solutions and
          cutting-edge technology services.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            href="/home/contact"
            className="inline-block bg-blue-600 py-3 px-8 rounded-md font-medium hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="inline-block bg-white text-gray-900 py-3 px-8 rounded-md font-medium hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
} 