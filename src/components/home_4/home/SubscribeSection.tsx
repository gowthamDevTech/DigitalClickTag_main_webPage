import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Subscribe</h2>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-300">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;