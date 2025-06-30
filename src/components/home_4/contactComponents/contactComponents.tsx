'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Assuming you have lucide-react or similar icon library installed
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';
import bg from '@/assets/bg/bg-15.jpg';

const ContactSection: React.FC = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center">
      {/* Background shapes for a modern touch */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center   rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
        <BackgroundImage image={bg.src}/>
        <div className='p-8 md:p-12 lg:p-16' >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
          Let&apos;s Connect and Create
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you have a groundbreaking idea, a question, or just want to say hello, we&apos;d love to hear from you. Reach out and let&apos;s start the conversation!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="text-left space-y-8 bg-gray-50/10 backdrop-blur-sm p-8 rounded-2xl shadow-inner border border-gray-100 animate-fade-in-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Details</h2>
            <div className="flex items-start space-x-4">
              <MapPin className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                <p className="text-gray-600">Chennai, Tamil Nadu, India </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <a href="mailto:digitalclicktag@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                digitalclicktag@gmail.com
                </a>
              </div>
            </div>
            {/* <div className="flex items-start space-x-4">
              <Phone className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <a href="tel:+919876543210" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <form className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6 text-left border border-gray-100 animate-fade-in-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" " // Important for floating label
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" " // Important for floating label
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                placeholder=" " // Important for floating label
                rows={5}
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800 resize-y"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-6 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                Your Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;