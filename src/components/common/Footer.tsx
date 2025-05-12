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
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
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
