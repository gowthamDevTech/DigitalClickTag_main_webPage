// components/ReelsPackages.tsx
import React from 'react';
import PricingCard6 from '@/components/home_4/pricingCards/PricingCard6';
import YoutubeVideoCard from '@/components/home_4/cards/YoutubeVideoCard'

const reelsPackages = [
  {
    title: '📹 Basic Video Package',
    price: 'Rs.75,000',
    features: [
      '🎥 48 Videos (Each 30-1 Minute) (Per Month-4 Video Shoot)',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD Quality Output',
      '📊 2 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-indigo-600',
  },
  {
    title: '🚀 Standard Video Package',
    price: 'Rs.1,45,000',
    features: [
      '🎥 96 Videos (Each 30-1 Minute) (Per Month - 8 Video Shoot)',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD Quality Output',
      '📊 2 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-green-600',
  },
  {
    title: '🔥 Premium Video Package',
    price: 'Rs.1,80,000',
    features: [
      '🎥 120 Videos (Each 30-1 Minutes) (Per month - 10 Video shoot)',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD/4K Quality Output',
      '📊 3 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-red-600',
  },
];

export const ReelsPackages: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
        🎞️ Reels & YouTube Shorts Packages
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reelsPackages.map((pkg, index) => (
          <PricingCard6
            key={index}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            notes={pkg.notes}
            highlightColor={pkg.highlightColor}
          />
        ))}
      </div>
    </section>
  );
};


// components/BrandPackages.tsx


const brandPackages = [
  {
    title: '📹 Basic Brand Video by Mobile',
    price: 'Rs.25,000',
    features: [
      '🎥 1 Video',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD 1080 Quality Output',
      '📊 2 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-blue-600',
  },
  {
    title: '🚀 Standard Brand Video by Camera',
    price: 'Rs.60,000',
    features: [
      '🎥 1 Video',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD 1080 Quality Output',
      '📊 2 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-green-600',
  },
  {
    title: '🔥 Premium Brand Video by 4K Camera & Drone',
    price: 'Rs.1,50,000',
    features: [
      '🎥 1 Video',
      '🎬 Pre-Production Planning (Script, Storyboard, Schedule)',
      '📍 Multi-Location Shoot (City & Nearby Areas)',
      '📺 HD 4K Quality Output',
      '📊 2 Revisions',
      '⏳ Delivery: 10-15 Days',
    ],
    notes: ['Accommodation & Transport - Extra (Based on location)'],
    highlightColor: 'text-red-600',
  },
];

export const BrandPackages: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        🎥 Brand Video Production Packages
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {brandPackages.map((pkg, index) => (
          <PricingCard6
            key={index}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            notes={pkg.notes}
            highlightColor={pkg.highlightColor}
          />
        ))}
      </div>
    </section>
  );
};




interface Video {
  id: string;
  title: string;
  type: 'main' | 'small' | 'large';
}

const YoutubeVideos: React.FC = () => {
  // Replace with your actual YouTube video IDs and titles
  const videos: Video[] = [
    { id: 'tZdk58Bv0DA', title: 'Main Video Title', type: 'main' },
    { id: 'okm_QMH-OYA', title: 'Small Video 2 Title', type: 'small' },
    { id: 'mgR1Mwnram8', title: 'Small Video 3 Title', type: 'small' },
    { id: '8V1ZatIkh1Y', title: 'Large Video 4 Title', type: 'large' },
    { id: 'QkSEsWVK9ms', title: 'Small Video 5 Title', type: 'small' },
    { id: 'kL2jYOkB9UQ', title: 'Small Video 6 Title', type: 'small' },
    // Add more videos as needed, following the pattern in your image
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-500">Videos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Video (first video in the array, always full width on small screens, can be styled differently) */}
        {videos.length > 0 && (
          <div className="col-span-full mb-6">
            <YoutubeVideoCard videoId={videos[0].id} title={videos[0].title} isLarge />
          </div>
        )}

        {/* Small Videos (two columns on medium screens and up) */}
        {videos.slice(1, 3).map((video) => (
          <YoutubeVideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}

        {/* Large Video (single column, spans full width) */}
        {videos.length > 3 && (
          <div className="col-span-full my-6">
            <YoutubeVideoCard videoId={videos[3].id} title={videos[3].title} isLarge />
          </div>
        )}

        {/* Remaining Small Videos (two columns on medium screens and up) */}
        {videos.slice(4).map((video) => (
          <YoutubeVideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;