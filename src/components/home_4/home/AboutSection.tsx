
// components/AboutUsSection.jsx
import React from 'react';

const teamMembers = [
  {
    name: 'S.Mohanraj',
    role: 'Founder & CEO - Digital Singam',
    image: '/Region-1.jpg',
    description: [
      '10+ Years of Industry Experience',
      'Specialist in Digital Marketing, Business Growth & Branding',
      'Visionary behind Tamil Nadu\'s first result-driven digital ecosystem',
      '"I don\'t just service or teach marketing - I build brands that roar"'
    ]
  },
  {
    name: 'T.Pavithra',
    role: 'Project Manager (Women Entrepreneur Support) - Digital Singam',
    image: '/Region-1.jpg',
    description: [
      '7+ Years Experience in Client Delivery, Strategy & Execution',
      'Expert in SEO, Funnel Management, Social Campaigns',
      'Known for turning ideas into impactful results with precision',
      '"Every project I handle is driven by clarity, speed, and ROI."'
    ]
  },
  {
    name: 'D.Raja Pandi',
    role: 'Video Editor (Creative Storyteller) - Digital Singam',
    image: '/Region-1.jpg',
    description: [
      '2+ Years Experience in Video Editing, Reels & Brand Storytelling',
      'Expert in Adobe Premiere Pro & Filmora',
      'Specialized in Instagram Reels, YouTube Shorts, Corporate Videos & Promo Videos',
      '"Every frame I cut is crafted to captivate, connect, and convert."'
    ]
  },
];

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Meet the Roaring Team Behind Digital Singam</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className={`absolute inset-0 ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-green-400' : 'bg-pink-400'} opacity-75`}></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <ul className="text-gray-700 text-sm list-disc list-inside">
                    {member.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;


