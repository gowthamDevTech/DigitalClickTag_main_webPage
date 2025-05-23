import Hero1 from "@/components/home_4/heroSections/hero1";
import React from "react";
import {
  BonusAddonsSection,
  YearlyPricing,
  CallToAction,
  SocialMediaPosters,
} from "@/components/home_4/yearly-service-components/yearlyServiceComponents";
import {MonthlyPricing} from "@/components/home_4/monthly-service-components/monthlyServiceComponents";
import HeadingDescription1 from "@/components/home_4/commonComponents/heading-description/headingDescription1";
import ContactForm1 from "@/components/home_4/contactUsForms/contactUsForm1";

export default function YearlySercicePlanPage() {
     const socialMediaTitle = "Marketing That Moves You ";
  const socialMediadescription =
    "Transforming engagement into tangible growth for your business";
  return (
    <>
      <Hero1 />
      <BonusAddonsSection />
      <MonthlyPricing />
         <HeadingDescription1
        title={socialMediaTitle}
        description={socialMediadescription}
      />
      <SocialMediaPosters />
      <ContactForm1/> 
      <CallToAction />
    </>
  );
}
