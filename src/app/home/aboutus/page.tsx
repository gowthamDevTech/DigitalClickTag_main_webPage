
import AboutOverview from "@/components/home_4/aboutus/AboutOverview";
import BackgroundHover from "@/components/home_4/commonComponents/background/backgroundhover";
import BackgroundImage from "@/components/home_4/commonComponents/background/backgroundImage";
import SplineViewer from "@/components/home_4/commonComponents/spline/spline";
import Image from "next/image";
import bg12 from "@/assets/bg/bg-12.jpg"

import React from 'react';

const AboutUsPage = () => {
  return (
    <>
    <div className=" font-sans antialiased text-gray-800 bg-gray-50">
      <div className="w-[98vw] h-[100vh] overflow-hidden  mx-auto">
    <SplineViewer
        url="https://prod.spline.design/vYc7aBog6dI9UFEi/scene.splinecode"
        className=" inset-0"
        loadingFallback={
          <div className="text-white text-lg animate-pulse">Loading 3D scene...</div>
        }
      />
      </div>
      {/* Hero/Welcome Section */}
        <AboutOverview />


      {/* What We Do Section */}
      <section className=" relative z-10">
      <BackgroundImage image={bg12.src}/>

        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "E-Commerce Website Development (Shopify & Website Standard)",
              "Google Ads & Meta Business Marketing",
              "On-Page SEO & Competitor Data Collection",
              "Social Media Marketing & Branding",
              "Video Production & Drone Videography",
              "Google Ranking Optimization",
              "Business Consultation & Packaging Design Support"
            ].map((service, index) => (
               
 
              <div key={index} className="z-0 relative  shadow-md">
              <BackgroundHover/>
               <div className="flex items-start p-6" > 
                <svg className=" w-6 h-6 text-blue-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className=" text-lg font-medium text-white">{service}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className=" ">

        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8">Our Approach</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Unlike traditional agencies, Digital Singam focuses on <span className="font-semibold text-blue-600">result-oriented marketing</span>
            rather than just traffic or impressions. We believe in data-driven strategies, creative storytelling,
            and personalized solutions that align with your business goals. Our team is dedicated to staying ahead of
            industry trends, ensuring that our clients always have a competitive edge.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Since 2014, Providing Digital Marketing Services:",
                description: "With over a decade of experience, we have been helping businesses grow online through proven marketing strategies."
              },
              {
                title: "Client-Centric Approach:",
                description: "Every business is unique, and we tailor our strategies to fit specific needs and objectives."
              },
              {
                title: "Proven Track Record:",
                description: "We have successfully worked with businesses across various industries, delivering exceptional results and boosting online sales."
              },
              {
                title: "Innovation & Creativity:",
                description: "From content creation to performance marketing, we integrate the latest tools and techniques to enhance brand engagement."
              }
            ].map((reason, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--primary1)] text-white rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3">📍</span>
              <p>
                Banglore,Karnataka <br className="hidden md:inline"/>  Coimbatore,Tamilnadu <br className="hidden md:inline"/>  Chennai,Tamilnadu
              </p>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3">🌐</span>
              <p>GST:XXXX xxxx XXXX </p>
            </div> */}
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3">📧</span>
              <p>digitalclicktag@gmail.com</p>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start">
              <span className="mr-3">📞</span>
              <p>+91 9952641127</p>
            </div> */}
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default AboutUsPage;
