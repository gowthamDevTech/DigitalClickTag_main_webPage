import React from 'react';

interface YoutubeVideoCardProps {
  videoId: string;
  title: string; // Good for accessibility and SEO, even if not displayed
  isLarge?: boolean; // To differentiate between large and small videos
}

const YoutubeVideoCard: React.FC<YoutubeVideoCardProps> = ({ videoId, title, isLarge = false }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={`relative ${isLarge ? 'col-span-full' : 'w-full'} overflow-hidden rounded-lg shadow-md`}>
      {/* Aspect ratio box for responsive video embeds */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideoCard;