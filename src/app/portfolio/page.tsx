import React from 'react';

export const metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of successful projects',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Project image will go here */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Project Name</h2>
              <p className="text-gray-600">
                Brief description of the project and its key features.
              </p>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </main>
  );
} 