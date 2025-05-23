import React from 'react'
import Card1 from '@/components/home_4/cards/card1'
import PricingCard1 from "@/components/home_4/pricingCards/PricingCard1"
import SingleCard1 from '@/components/home_4/cards/singleCard1'
import ImageCarousel1 from '@/components/Image-carousel/imageCarousel1'
import poster1  from '@/assets/Sample images/poster1.jpeg'
import poster2  from '@/assets/Sample images/poster2.jpeg'
import HeadingDescription1 from '@/components/home_4/commonComponents/heading-description/headingDescription1'

export function BonusAddonsSection() {
  return (
    <>
    <Card1/>
    </>
  )
}
  
  export function YearlyPricing() {
    return (
      <PricingCard1 />
    )
  }

  
  export  function CallToAction() {
    return (
      <SingleCard1/>
    )
  }
  
  
export function SocialMediaPosters() {
  const posters = [
    poster1.src,
    poster2.src,
    poster1.src,
    poster2.src,
   ];

  return (
    <section className="pb-16 pt-5 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
      <ImageCarousel1 images={posters} />
    </section>
  );
}
  