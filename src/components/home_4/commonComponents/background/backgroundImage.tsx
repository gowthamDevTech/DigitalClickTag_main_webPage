import React from 'react';

interface BackgroundImageProps {
  image: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
  return (
    <div className="absolute inset-0  z-[-1]">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default BackgroundImage;
