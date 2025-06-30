// HoverText.tsx
'use client';
import './hovertext.scss';

interface HoverTextProps {
  text: string;
  gradient?: string[];
}

export default function HoverText({ 
  text, 
  gradient = ['#4F46E5', '#EC4899'] 
}: HoverTextProps) {
  return (
    <span className="hover-text">
      <span className="hover-text__original">{text}</span>
      <span 
        className="hover-text__hover"
        style={{
          '--gradient-from': gradient[0],
          '--gradient-to': gradient[1]
        } as React.CSSProperties}
      >
        {text}
      </span>
    </span>
  );
}
