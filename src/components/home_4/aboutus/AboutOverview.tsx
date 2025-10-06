import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import digitalClickTagLogo from '@/assets/official images/company images/digitalclicktaglogo.png';
import BackgroundImage from '../commonComponents/background/backgroundImage';
import bg from '@/assets/bg/bg-1.webp';


export default function AboutOverview() {
  return (
    <div className="relative
     z-10 ">
      <BackgroundImage image={bg.src}/>
      
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 px-4 py-6 items-center bg-black/30  backdrop-blur-md ">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Our Company
            </h2>
            <p className="mt-4 text-lg text-white">
              We are a team of passionate developers, designers, and digital strategists
              dedicated to helping businesses succeed in the digital world.
            </p>
            <div className="mt-8 space-y-4 text-white">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 ">
                  Over 10 years of industry experience
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 ">
                  More than 500 successful projects delivered
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 ">
                  Dedicated team of experts
                </p>
              </div>
            </div>
            {/* <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Us
              </Link>
            </div> */}
          </div>
          <div className="mt-0 lg:mt-0">
          
            <div className="">
              {/* <video
              src='/videos/background animation.mp4'
                autoPlay
                loop
                muted
                playsInline
                className="  object-cover z-0"
              /> */}
                {/* <source src='/videos/background animation.mp4' type="video/mp4" />
              </video> */}
              <div className="  flex items-center justify-center ">
                <div className="relative z-10 hidden md:block">
                  <Image
                    src={digitalClickTagLogo}
                    alt="Digital Click Tag Logo"
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 