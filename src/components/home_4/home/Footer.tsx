'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiInstagram } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <nav className="flex flex-wrap justify-center space-x-6 mb-8">
         <Link href="/home4" className="hover:text-white">Home</Link>
<Link href="/home4/aboutus" className="hover:text-white">About Us</Link>
<Link href="/home4/yearly-service-plan" className="hover:text-white">Yearly Service Plan</Link>
<Link href="/home4/monthly-service-plan" className="hover:text-white">Monthly Service Plan</Link>
<Link href="/home4/website-and-seo" className="hover:text-white">Website and SEO</Link>
<Link href="/home4/video-production" className="hover:text-white">Video Production</Link>
<Link href="/home4/careers" className="hover:text-white">Careers</Link>
<Link href="/home4/contact" className="hover:text-white">Contact</Link>

        </nav>

        <div className="flex space-x-6 mb-8">
          <Link href="https://www.instagram.com"  className="text-gray-400 hover:text-white">
            <Image src="/Footer.png" alt="Instagram" width={32} height={32} />
            <CiInstagram width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
            <Image src="/Footer.png" alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://www.youtube.com" className="text-gray-400 hover:text-white">
            <Image src="/Footer.png" alt="YouTube" width={32} height={32} />
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-xl font-bold text-white">டிஜிட்டல்</p>
          <p className="text-xl font-bold text-white">சிங்கம்</p>
        </div>

        <p className="text-sm mb-8">
          630 A/2, Annamalainagar, Nagal, Sivaganga, Tamil Nadu 630561, India
        </p>

        <div className="flex flex-col md:flex-row justify-between w-full text-center md:text-left gap-2">
          <p className="text-xs">Copyright ® 2025 Digital Singam - All Rights Reserved.</p>
          <p className="text-xs">Powered by டிஜிட்டல் சிங்கம்</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
