// app/video-production/page.tsx
import Hero1 from '@/components/home_4/heroSections/hero1';
import Footer from '@/components/home_4/home/Footer';
import Header from '@/components/home_4/home/Header';
import TrustedBrands from '@/components/home_4/home/TrustedBrands';
import YoutubeVideos, {ReelsPackages} from '@/components/home_4/videoProductionComponents/videoProductionComponents';
import {BrandPackages} from '@/components/home_4/videoProductionComponents/videoProductionComponents';
import { CallToAction } from '@/components/home_4/yearly-service-components/yearlyServiceComponents';

export default function VideoProductionPage() {
  return (
    <>
          <Hero1 />
          <TrustedBrands />
          <main className="bg-gray-100 ">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          🎬 Video Production Packages
        </h1>
        <ReelsPackages />
        <div className="my-16 border-t border-gray-300"></div>
        <BrandPackages />
      </section>
    </main>
    <YoutubeVideos/>
          <CallToAction />
    
   
    </>
  );
}
