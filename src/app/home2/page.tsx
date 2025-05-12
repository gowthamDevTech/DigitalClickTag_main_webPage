import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home_2/Hero";
import AboutOverview from "@/components/home_2/AboutOverview";
import ServicesSection from "@/components/home_2/ServicesSection";
import WhyChooseUs from "@/components/home_2/WhyChooseUs";
import PortfolioPreview from "@/components/home_2/PortfolioPreview";
import Testimonials from "@/components/home_2/Testimonials";
import ClientsSection from "@/components/home_2/ClientsSection";
import PricingSection from "@/components/home_2/PricingSection";
import BlogPreview from "@/components/home_2/BlogPreview";
import CTASection from "@/components/home_2/CTASection";
import ContactBanner from "@/components/home_2/ContactBanner";
import GapDivider from "@/components/common/gapDivider";

export default function Home2() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-indigo-600 to-blue-600">

          <Hero />
          <GapDivider/>
          <AboutOverview />
          <GapDivider/>

          <ServicesSection />
          <GapDivider/>

          <WhyChooseUs />
          <GapDivider/>

          <PortfolioPreview />
          <GapDivider/>

          <Testimonials />
          <GapDivider/>

          <ClientsSection />
          <GapDivider/>

          {/* <PricingSection /> */}
          <BlogPreview />
          <GapDivider/>

          <CTASection />
          <GapDivider/>

          <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
