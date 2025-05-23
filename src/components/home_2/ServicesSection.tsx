// src/components/home/ServicesSection.tsx
const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost organic rankings and drive qualified traffic with on-page, off-page, and technical SEO strategies.',
    image: '/services/seo.png',
  },
  {
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Maximize ROI through data-driven Google Ads and social media ad campaigns.',
    image: '/services/ppc.png',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage and grow your audience on Facebook, Instagram, LinkedIn, Twitter, and TikTok.',
    image: '/services/social-media.png',
  },
  {
    title: 'Content Strategy & Creation',
    description: 'Craft compelling blog posts, whitepapers, videos, and infographics that resonate with your audience.',
    image: '/services/content.png',
  },
  {
    title: 'Email Marketing & Automation',
    description: 'Nurture leads and retain customers with targeted drip campaigns and personalized newsletters.',
    image: '/services/email.png',
  },
  {
    title: 'Web Design & Conversion Optimization',
    description: 'Design responsive, user-friendly websites and landing pages optimized for conversions.',
    image: '/services/web-design.png',
  },
  {
    title: 'Web Development',
    description: 'Build responsive, scalable websites using modern frameworks and best practices.',
    image: '/services/web-dev.png',
  },
  {
    title: 'Mobile App Development',
    description: 'Design and develop native and cross-platform mobile applications for iOS and Android.',
    image: '/services/mobile-app.png',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track performance with actionable insights and transparent reporting to continuously improve ROI.',
    image: '/services/analytics.png',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-20 w-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
