'use client'
import Footer from "@/components/home_4/commonComponents/Footer";
import Navbar from "@/components/home_4/commonComponents/Navbar";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import ClientsSection from "@/components/home/ClientsSection";
import PricingSection from "@/components/home/PricingSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import ContactBanner from "@/components/home/ContactBanner";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, [router]);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <PortfolioPreview />
        <Testimonials />
        <ClientsSection />
        {/* <PricingSection /> */}
        <BlogPreview />
        <CTASection />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
