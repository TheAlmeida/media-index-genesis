import React from 'react';
import './watermark.css';

interface WatermarkProps {
  type: 'escola' | 'company';
  imgSrc: string;
}

const watermarkConfig = {
  escola: {
    bgClass: 'escola',
    alt: 'Escola Watermark',
  },
  company: {
    bgClass: 'company',
    alt: 'Company Watermark',
  },
};

export const Watermark: React.FC<WatermarkProps> = ({ type, imgSrc }) => {
  const { bgClass, alt } = watermarkConfig[type];
  return (
    <div className={`watermark ${bgClass}`}>
      <img src={imgSrc} alt={alt} />
    </div>
  );
}; 