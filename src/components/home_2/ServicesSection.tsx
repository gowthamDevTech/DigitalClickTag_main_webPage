import bg from "@/assets/bg/bg-1.jpg";
import BackgroundImage from "../home_4/commonComponents/background/backgroundImage";
import BackgroundHover from "../home_4/commonComponents/background/backgroundhover";

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
    <section id="services" className="relative min-h-screen">
      <BackgroundImage image={bg.src} />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Sticky Section */}
          <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
            <p className="text-gray-200 mb-8 text-lg">
              We offer a comprehensive suite of digital marketing services designed to grow your business and enhance your online presence. Our expert team delivers tailored solutions to meet your specific needs.
            </p>
          </div>

          {/* Right Column - Scrollable Services */}
          <div className="lg:w-2/3 space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className=" relative bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
      <BackgroundHover />

                <div className=" p-8 flex flex-col md:flex-row items-center gap-6">

                  <div className="flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
