import React, { ReactNode } from 'react';

interface BackgroundGradientProps {
  gradient?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
}

const DEFAULT_GRADIENT = 'linear-gradient(135deg, var(--primary1) , #fff, var(--primary1))';

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  gradient = DEFAULT_GRADIENT,
  style = {},
  className = '',
  children,
}) => {
  return (
    <div
      className={`${className} absolute -z-10 inset-0 w-full h-full`}
      style={{
        background: gradient,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundGradient;
