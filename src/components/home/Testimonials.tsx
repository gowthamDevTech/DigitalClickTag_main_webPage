import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
      author: "John Smith",
      role: "CEO, Tech Company",
      image: "/testimonials/client1.jpg",
    },
    {
      content:
        "The level of professionalism and expertise they bring to the table is unmatched. Highly recommended!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      image: "/testimonials/client2.jpg",
    },
    {
      content:
        "They transformed our digital presence and helped us achieve our business goals. Great team to work with.",
      author: "Michael Brown",
      role: "Founder, Startup",
      image: "/testimonials/client3.jpg",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What our clients say about working with us
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  {/* Replace with actual client images */}
                  <span className="text-gray-500">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 