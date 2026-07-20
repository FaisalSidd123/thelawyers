'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Logo({ className = '', variant = 'light', size = 'normal' }) {
  // variant: 'light' (for light backgrounds like navbar) or 'dark' (for dark navy footer)
  // size: 'normal', 'large'
  const [error, setError] = useState(false);

  const dimensions = {
    normal: { width: 140, height: 46 },
    large: { width: 180, height: 60 },
  };

  const { width, height } = dimensions[size] || dimensions.normal;

  return (
    <div className={`inline-flex items-center ${className}`}>
      {!error ? (
        <div 
          className="relative overflow-hidden bg-white/95 p-1.5 rounded-sm border border-brand-light-gray shadow-sm hover:bg-white transition-all duration-300 flex items-center justify-center" 
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <Image
            src="/Logo.jpeg"
            alt="THE LAWYERS"
            fill
            sizes="(max-width: 768px) 120px, 180px"
            className="object-contain"
            onError={() => setError(true)}
            priority
          />
        </div>
      ) : (
        // High-end fallback if the image fails to load
        <div className="flex items-center gap-3">
          <svg
            className={`w-10 h-10 ${variant === 'dark' ? 'text-brand-burgundy' : 'text-brand-navy'}`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 15V85M30 40C30 55 70 55 70 40M25 40H75M35 55H45M55 55H65" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col">
            <span className={`font-serif tracking-widest text-lg font-bold leading-none ${
              variant === 'dark' ? 'text-white' : 'text-brand-navy'
            }`}>
              THE LAWYERS
            </span>
            <span className={`font-serif italic text-[10px] leading-none mt-1 ${
              variant === 'dark' ? 'text-brand-light-gray' : 'text-brand-burgundy'
            }`}>
              Justice for All
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
