import React from 'react';

export const metadata = {
  title: 'Our Services',
  description: 'Explore the range of services we offer',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
            <p className="text-gray-600">
              Description of service 1 and its benefits.
            </p>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </div>
    </main>
  );
} 