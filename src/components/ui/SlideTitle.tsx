import React from 'react';

interface SlideTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SlideTitle: React.FC<SlideTitleProps> = ({ title, subtitle, className }) => (
  <div className={`text-center mb-8 ${className || ''}`}>
    <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight mb-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-[clamp(1.1rem,2vw,2rem)] font-light text-gray-600">
        {subtitle}
      </p>
    )}
  </div>
); 