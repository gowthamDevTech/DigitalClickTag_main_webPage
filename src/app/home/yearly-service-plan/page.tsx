import Hero1 from "@/components/home_4/heroSections/hero1";
import Footer from "@/components/home_4/home/Footer";
import Header from "@/components/home_4/home/Header";
import TrustedBrands from "@/components/home_4/home/TrustedBrands";
import React from "react";
import {
  BonusAddonsSection,
  YearlyPricing,
  CallToAction,
  SocialMediaPosters,
} from "@/components/home_4/yearly-service-components/yearlyServiceComponents";
import HeadingDescription1 from "@/components/home_4/commonComponents/heading-description/headingDescription1";

export default function YearlySercicePlanPage() {
  const socialMediaTitle = "Engaging Social Media Posters";
  const socialMediadescription =
    "Explore a selection of our captivating social media poster designs. Click on an image to view it in full screen.";
  return (
    <>
      <Hero1 />
      <TrustedBrands />
      <BonusAddonsSection />
      <YearlyPricing />
      <HeadingDescription1
        title={socialMediaTitle}
        description={socialMediadescription}
      />
     

      <SocialMediaPosters />

      <CallToAction />
    </>
  );
}
