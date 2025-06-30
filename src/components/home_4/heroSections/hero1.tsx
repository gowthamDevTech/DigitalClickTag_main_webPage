import React from 'react';
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';
import bg from '@/assets/bg/bg-16.jpg'

const Hero1 = () => {
  return (
    <section className="relative   overflow-hidden rounded-b-3xl shadow-lg">
      <BackgroundImage image={bg.src}/>
      <div className='py-20'></div>
      {/* <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="pattern-zigzag" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 5 10 L 10 0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-zigzag)" />
        </svg>
      </div> */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20  px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Fuel Your Business with Cutting Edge - Digital Marketing Strategies!
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Since 2014 we&apos;ve empowered 50+ businesses with creative and impactful digital solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero1;
