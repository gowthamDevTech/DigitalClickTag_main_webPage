import React from "react";
import WebsitePackages from "@/components/home_4/pricingCards/PricingCard3";
import SEOPackages from "@/components/home_4/pricingCards/PricingCard4";
import GoogleAdsPackages from "@/components/home_4/pricingCards/PricingCard5";
import Header from "@/components/home_4/home/Header";
import Hero1 from "@/components/home_4/heroSections/hero1";
import { CallToAction } from "@/components/home_4/yearly-service-components/yearlyServiceComponents";

const WebsiteAndSeoPage = () => {
  return (
    <div className=" ">
      <Hero1 />
     
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
