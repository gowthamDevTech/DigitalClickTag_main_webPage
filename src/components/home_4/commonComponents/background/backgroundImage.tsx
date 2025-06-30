import React from 'react';

interface BackgroundImageProps {
  image: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
  return (
    <>
      <img src={image} alt="background image" style={{zIndex: -1}} className="absolute inset w-full h-full object-cover" />
    </>
  );
};

export default BackgroundImage;
