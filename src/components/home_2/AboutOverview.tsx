"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import BackgroundImage from "../home_4/commonComponents/background/backgroundImage";
import bg from "../../assets/bg/bg-3.jpg";
import BackgroundGradient from "@/components/home_4/commonComponents/background/backgroundgradient";
// src/components/home/AboutOverview.tsx
export default function AboutOverview() {
  return (
    <section className="relative ">
{/* <BackgroundImage image={bg.src}/> */}
<BackgroundGradient/>

      <div className=" max-w-6xl mx-auto py-20 px-4 md:flex items-center gap-10 ">

        <div className="md:w-1/2 mb-8 md:mb-0 hidden md:block">
          <DotLottieReact
            src="https://lottie.host/d06c7839-4b44-45cb-be0d-34de3253bc28/cOkfT2ugNq.lottie"
            loop
            autoplay
            className="rounded-xl w-full"
          />
          {/* <img src="/images/about.jpg" alt="About us" className="rounded-xl w-full" /> */}
        </div>
        <div className="md:w-1/2 text-shadow-white bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold mb-4">About Digital Click Tag</h2>
          <p className=" mb-4">
            We are a team of marketing experts and creatives who work together
            to build your digital success.
          </p>
          <p className="">
            With years of experience in SEO, advertising, branding, and web
            design, we help businesses unlock their potential online.
          </p>
        </div>
      </div>
    </section>
  );
}
