import React from 'react';

const testimonials = [
  {
    type: 'Professionalism',
    rating: 5,
    quote: '"Mohanraj is doing a great job in this field. He is a through professional! Grea..."',
    author: 'Muthu Krishnan - 12/09/2021',
    icon: 'I' // Placeholder for icon, assuming an image or SVG will be used
  },
  {
    type: 'Responsiveness',
    rating: 5,
    quote: '"Wow Mohanraj is really a good designer, understands well what we need and ha..."',
    author: 'Arun Ramasijam - 10/10/2020',
    icon: 'R' // Placeholder for icon
  },
  {
    type: 'Quality',
    rating: 5,
    quote: '"Good quality and kind service... Keep it up."',
    author: 'Rajalakshmi S - 22/01/2021',
    icon: 'Q' // Placeholder for icon
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'url("/Region-4.jpg")' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Client Testimonials Guaranteed Success & Strong Partnership</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {/* Replace with actual icon if available */}
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                    {testimonial.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.type}</h3>
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 text-sm mb-4">{testimonial.quote}</p>
                <p className="text-gray-500 text-xs">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;