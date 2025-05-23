import React from "react";
import WebsitePackages from "@/components/home_4/pricingCards/PricingCard3";
import SEOPackages from "@/components/home_4/pricingCards/PricingCard4";
import GoogleAdsPackages from "@/components/home_4/pricingCards/PricingCard5";
import Header from "@/components/home_4/home/Header";
import Hero1 from "@/components/home_4/heroSections/hero1";
import TrustedBrands from "@/components/home_4/home/TrustedBrands";
import { CallToAction } from "@/components/home_4/yearly-service-components/yearlyServiceComponents";
import Footer from "@/components/home_4/home/Footer";

const WebsiteAndSeoPage = () => {
  return (
    <div className=" ">
      <Hero1 />
      <TrustedBrands />
      <h1 className="text-4xl font-bold text-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
        Website Design & SEO Packages
      </h1>
      <div className=" px-4  max-w-7xl mx-auto space-y-16">
        <WebsitePackages />
        <SEOPackages />
        <GoogleAdsPackages />
      </div>

      <CallToAction />
    </div>
  );
};

export default WebsiteAndSeoPage;
