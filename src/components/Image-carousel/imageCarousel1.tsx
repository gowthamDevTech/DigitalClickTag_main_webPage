"use client";
import React, { useState, useEffect, useRef } from 'react';
import ButtonLinearGradient1 from '@/components/home_4/buttons/button1'; // Assuming this path is correct for your project

// Define the props interface for ImageCarousel
interface ImageCarouselProps {
  images: string[]; // images is an array of strings (URLs)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  // State to keep track of the current active image index for the carousel (center image)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // State to manage the visibility of the full-screen modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // State to store the URL of the image to be displayed in full screen
  const [fullScreenImage, setFullScreenImage] = useState<string>('');

  // Ref to store the interval ID for automatic sliding
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to go to the previous slide
  const goToPrevious = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const goToNext = (): void => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide by index
  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  // Function to open the full-screen modal
  const openFullScreen = (imageSrc: string): void => {
    setFullScreenImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the full-screen modal
  const closeFullScreen = (): void => {
    setIsModalOpen(false);
    setFullScreenImage('');
  };

  // Calculate indices for the three visible images
  const getVisibleImageIndices = (): [number | null, number | null, number | null] => {
    const totalImages = images.length;
    if (totalImages === 0) return [null, null, null]; // Handle empty images array
    if (totalImages === 1) return [null, 0, null]; // Handle single image
    if (totalImages === 2) return [null, currentIndex, (currentIndex + 1) % totalImages]; // Handle two images

    const leftIndex = (currentIndex - 1 + totalImages) % totalImages;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % totalImages;
    return [leftIndex, centerIndex, rightIndex];
  };

  const [leftIndex, centerIndex, rightIndex] = getVisibleImageIndices();

  // Effect to handle automatic carousel advancement
  useEffect(() => {
    // Only start interval if there are images
    if (images.length > 1) {
      // Clear any existing interval to prevent multiple intervals running
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Set a new interval to advance the slide every 2 seconds
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // 2000 milliseconds = 2 seconds
    } else {
      // If less than 2 images, clear any interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup function: clear the interval when the component unmounts
    // or when the dependencies (images.length) change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, images]); // Re-run effect if the number of images or images array itself changes

  if (images.length === 0) {
    return <div className="text-center text-gray-500 py-10">No images to display.</div>;
  }

  return (
    <div className="relative max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden group pb-20 ">
      {/* Carousel Images Container */}
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 space-x-4">
        {/* Left Image - Hidden on mobile, visible on medium and larger screens */}
        {leftIndex !== null && (
          <div
            className="hidden md:block w-1/4 sm:w-1/3 md:w-1/4 flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-500 ease-in-out"
            onClick={() => openFullScreen(images[leftIndex])}
          >
            <img
              src={images[leftIndex]}
              alt={`Social Media Poster ${leftIndex + 1}`}
              className="w-full h-40 sm:h-56 md:h-64 object-contain rounded-lg shadow-md transition-transform duration-500 ease-in-out"
            />
          </div>
        )}

        {/* Center (Bigger) Image */}
        {centerIndex !== null && (
          <div
            className={`flex-shrink-0 cursor-pointer ${images.length > 1 ? 'w-full md:w-1/2' : 'w-full'}`}
            onClick={() => openFullScreen(images[centerIndex])}
          >
            <img
              src={images[centerIndex]}
              alt={`Social Media Poster ${centerIndex + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-lg shadow-lg  transition-transform duration-500 ease-in-out"
            />
          </div>
        )}

        {/* Right Image - Hidden on mobile, visible on medium and larger screens */}
        {rightIndex !== null && images.length > 1 && ( // Only show right image if more than 1 image
          <div
            className="hidden md:block w-1/4 sm:w-1/3 md:w-1/4 flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-500 ease-in-out"
            onClick={() => openFullScreen(images[rightIndex])}
          >
            <img
              src={images[rightIndex]}
              alt={`Social Media Poster ${rightIndex + 1}`}
              className="w-full h-40 sm:h-56 md:h-64 object-contain rounded-lg shadow-md transition-transform duration-500 ease-in-out"
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons (only show if more than one image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </>
      )}


      {/* Indicators (Dots - only show if more than one image) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === slideIndex ? 'bg-blue-600' : 'bg-gray-400'
              } hover:bg-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
      )}
       {/* The 'View All Posters' button is now placed more responsively */}
       <div className='absolute bottom-4 right-4 md:right-8 lg:right-12'>
              <ButtonLinearGradient1 text={'View All Posters'}/>
        </div>
      

      {/* Full-screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeFullScreen} // Close modal when clicking outside the image
        >
          <div className="relative max-w-screen-lg max-h-screen-lg w-full h-full flex items-center justify-center">
            <img
              src={fullScreenImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
            />
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close full screen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
