import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-white mb-4">DigitalClickTag</div>
          <p className="text-gray-400">
            A digital agency providing innovative marketing solutions and web design that help businesses grow and succeed online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/home4" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/home4/aboutus" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/home4/yearly-service-plan" className="hover:text-white">Yearly Service Plan</Link>
            </li>
            <li>
              <Link href="/home4/monthly-service-plan" className="hover:text-white">Monthly Service Plan</Link>
            </li>
            <li>
              <Link href="/home4/website-and-seo" className="hover:text-white">Website and SEO</Link>
            </li>
            <li>
              <Link href="/home4/video-production" className="hover:text-white">Video Production</Link>
            </li>
            <li>
              <Link href="/home4/careers" className="hover:text-white">Careers</Link>
            </li>
            <li>
              <Link href="/home4/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: hello@digitalclicktag.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Electronic city, Bengaluru</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} DigitalClickTag Agency. All rights reserved.
      </div>
    </footer>
  );
}
