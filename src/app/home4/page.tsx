import Header from "@/components/home_4/home/Header";
import HeroSection from "@/components/home_4/home/heroSection";
import AboutUsSection from "@/components/home_4/home/AboutSection";
import ServicePlans from "@/components/home_4/home/ServicePlans";
import TrustedBrands from "@/components/home_4/home/TrustedBrands";
import Testimonials from "@/components/home_4/home/Testimonials";
import SubscribeSection from "@/components/home_4/home/SubscribeSection";
import BlogSection from "@/components/home_4/home/BlogSection";
import Footer from "@/components/home_4/home/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicePlans />
      <TrustedBrands />
      <Testimonials />
      <SubscribeSection />
      <BlogSection />
    </div>
  );
};

export default Home;
