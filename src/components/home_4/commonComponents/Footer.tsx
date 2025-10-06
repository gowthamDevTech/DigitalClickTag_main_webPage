import Link from "next/link";
import HoverText from "./animations/text animations/hovertext/hovertext";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-white mb-4">Digital Click Tag</div>
          <p className="text-gray-50">
            A digital agency providing innovative marketing solutions and web design that help businesses grow and succeed online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { path: "/home", label: "Home" },
              { path: "/home/aboutus", label: "About Us" },
              { path: "/home/yearly-service-plan", label: "Yearly Service Plan" },
              { path: "/home/monthly-service-plan", label: "Monthly Service Plan" },
              { path: "/home/website-and-seo", label: "Website and SEO" },
              { path: "/home/video-production", label: "Video Production" },
              { path: "/home/careers", label: "Careers" },
              { path: "/home/contact", label: "Contact" }
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="">
                              <HoverText text={link.label} gradient={["black", "white"]}/>
                
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */} 
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-100">
            {[
              { icon: '✉️', text: 'Digitalclicktag@gmail.com' },
              { icon: '📞', text: '+91 98765 43210' },
              { icon: '📍', text: 'Electronic city, Bengaluru' }
            ].map((contact, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-white">{contact.icon}</span>
                <span>{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-white text-xs">
        © {new Date().getFullYear()} Digital Click Tag Agency. All rights reserved.
      </div>
    </footer>
  );
}
