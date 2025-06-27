'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import digitalClickTagLogo from '@/assets/official images/company images/digitalclicktaglogo.png';
import Link from 'next/link';
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'About Us', href: '/home/aboutus' },
    { label: 'Yearly Service Plan', href: '/home/yearly-service-plan' },
    { label: 'Monthly Service Plan', href: '/home/monthly-service-plan' },
    { label: 'Website and SEO', href: '/home/website-and-seo' },
    { label: 'Video Production', href: '/home/video-production' },
    { label: 'Careers', href: '/home/careers' },
    { label: 'Contact', href: '/home/contact' },
  ];

  return (
    
    <div className={`${isScrolled ? 'sticky' : 'fixed'} top-0 z-20 w-full bg-amber-600 ${isScrolled ?   'bg-violet-700' : 'bg-transparent'}`}> 
      <div className={` max-w-7xl mx-auto px-4 py-0 flex justify-between items-center 
      `}
      >
        {/* <BackgroundImage image="/images/poster1.jpg" /> */}
        {/* Logo image */}
        <Link href="/home">
        <Image
          src={digitalClickTagLogo}
          alt="Digital Click Tag Logo"
          width={isScrolled ? 55 : 75}
          height={isScrolled ? 55 : 75}
          className={`object-cover transition-all duration-300 ${isScrolled ? 'sm:w-[55px] sm:h-[55px]' : 'sm:w-[75px] sm:h-[75px]'}`}
          priority
        />
                  </Link>
        {/* <div className="text-2xl font-bold text-indigo-600">DigitalClickTag</div> */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden shadow px-4 pb-5">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
