'use client';

import Spline from '@splinetool/react-spline';
import React, { useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  loadingFallback?: React.ReactNode;
}

const SplineViewer: React.FC<SplineViewerProps> = ({
  url,
  className = '',
  style,
  loadingFallback = <div className="text-white text-center">Loading 3D...</div>,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`w-full h-full bg-fixed z-[0] ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          {loadingFallback}
        </div>
      )}
      <Spline
        scene={url}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default SplineViewer;
