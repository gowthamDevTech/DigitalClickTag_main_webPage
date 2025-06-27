import Hero from "@/components/home_2/Hero";
import AboutOverview from "@/components/home_2/AboutOverview";
import ServicesSection from "@/components/home_2/ServicesSection";
import WhyChooseUs from "@/components/home_2/WhyChooseUs";
import PortfolioPreview from "@/components/home_2/PortfolioPreview";
import Testimonials from "@/components/home_2/Testimonials";
import ClientsSection from "@/components/home_2/ClientsSection";
import BlogPreview from "@/components/home_2/BlogPreview";
import CTASection from "@/components/home_2/CTASection";
import ContactBanner from "@/components/home_2/ContactBanner";
import GapDivider from "@/components/home_4/commonComponents/gapDivider";

const Home = () => {
  return (
    <div>
      <main className="bg-[var(--primary)]">
        <Hero />
        <AboutOverview />

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
      <></>
    </div>
  );
};

export default Home;
