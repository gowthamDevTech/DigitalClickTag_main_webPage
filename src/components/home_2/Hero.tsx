import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import RobotSpline from '@/components/splineDesigns/robo';
// src/components/home/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-blue-600 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <DotLottieReact
          src="https://lottie.host/57cb75be-bcdf-457a-899d-98c47399b923/JbVbu23HDu.lottie"
          loop
          autoplay
          className="w-full h-full object-cover opacity-20"
        /> */}
        <RobotSpline /> 
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Digital Marketing That Grows Your Business
        </h1>
        <p className="text-lg mb-8">
          Get tailored strategies that drive traffic, boost sales, and elevate your brand.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
