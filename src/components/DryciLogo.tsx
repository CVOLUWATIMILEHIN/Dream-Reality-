import React from 'react';
import brandLogo from './brand_logo.jpg';

interface DryciLogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export default function DryciLogo({
  className = 'w-12 h-12',
  showText = false,
  textColor = 'text-white',
  subtextColor = 'text-slate-400'
}: DryciLogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={brandLogo}
        alt="DRYCI Logo"
        referrerPolicy="no-referrer"
        className={`${className} object-contain transition-transform duration-300 hover:scale-105 rounded-full`}
      />

      {/* Brand text rendering */}
      {showText && (
        <div className="text-left select-none max-w-[200px] xs:max-w-[240px] md:max-w-xs">
          <span className={`font-poppins font-extrabold text-lg tracking-tight block leading-none ${textColor}`}>
            DRYCI
          </span>
          <span className={`text-[8.5px] leading-tight font-sans block mt-1 font-medium ${subtextColor}`}>
            Dreams to Reality Youth and Children Initiative
          </span>
        </div>
      )}
    </div>
  );
}
