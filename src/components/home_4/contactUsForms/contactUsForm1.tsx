'use client';
// components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm1: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    postalPincode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend or an API
    console.log('Form submitted:', formData);
    // You might want to add a success message or clear the form here
    alert('Thank you for your submission! We will get back to you shortly.'); // Using alert for demo, replace with custom modal in production
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      postalPincode: '',
    });
  };

  return (
    <div className="mx-auto max-w-lg rounded-xl bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
        Tailored Marketing Plans for Your Business
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g., +91 9876543210"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Your Business Name"
            required
          />
        </div>

        <div>
          <label htmlFor="postalPincode" className="mb-2 block text-sm font-medium text-gray-700">
            Postal Pincode
          </label>
          <input
            type="text" // Use type="text" for pincode, as it can contain non-numeric characters in some regions
            id="postalPincode"
            name="postalPincode"
            value={formData.postalPincode}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g., 641001"
            required
          />
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-lg font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm1;
