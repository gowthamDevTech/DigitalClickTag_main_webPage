import React from 'react';

interface ButtonLinearGradient1Props {
  text: string;
  onClick?: () => void;
}

export default function ButtonLinearGradient1({ text, onClick }: ButtonLinearGradient1Props) {
  return (
    <div className="text-center mt-8 sm:mt-10 md:mt-12">
      <button
        onClick={onClick}
        className="
          bg-gradient-to-r from-green-500 to-teal-600 text-white
          px-6 py-3 text-base
          sm:px-8 sm:py-3 sm:text-lg
          md:px-10 md:py-4 md:text-xl
          lg:px-12 lg:py-5 lg:text-2xl
          rounded-full font-semibold shadow-lg
          hover:shadow-xl transform hover:-translate-y-1
          transition duration-300 ease-in-out
        "
      >
        {text}
      </button>
    </div>
  );
}
