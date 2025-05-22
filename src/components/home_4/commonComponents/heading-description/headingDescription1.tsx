// components/SectionHeader.tsx
import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  titleClassName?: string; // Optional for custom styling
  descriptionClassName?: string; // Optional for custom styling
}

const HeadingDescription1: React.FC<SectionHeaderProps> = ({
  title,
  description,
  titleClassName = "text-3xl sm:text-4xl font-bold text-blue-800 mb-8",
  descriptionClassName = "text-lg text-gray-700 mb-12 ",
}) => {
  return (
    <>
     <div className="text-center bg-white mt-10">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8">
        {title}
      </h2>
      <p className='text-lg text-gray-700 mb-12'>
        {description}
      </p>
     </div>

    </>
  );
};

export default HeadingDescription1;
