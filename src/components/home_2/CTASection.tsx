// src/components/home/CTASection.tsx
import Image from "next/image";
import team5 from "@/assets/bg/team5.webp";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-[var(--primary)] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={team5}
          alt="Team background"
          fill
          priority
          quality={80}
          className="object-contain w-full h-full scale-125"
          style={{ zIndex: 0 }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 " />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* First Column */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        </div>
        {/* Second Column: (empty, or could add a logo/graphic if desired) */}
        <div className="flex-1 flex justify-center"></div>
        {/* Third Column */}
        <div className="flex-1 flex flex-col items-center ">
          <p className="mb-6 text-lg max-w-sm">Let our team of digital experts help you create a strategy that drives success.</p>
          <a href="/home/contact" className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}


