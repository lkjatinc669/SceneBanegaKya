// components/logo/vertical-logo.tsx
import React from 'react';
import { LogoIcon } from './LogoIcon';

export default function LogoVertical({ size = 64, className = '' }) {
  return (
    <div className={`flex flex-col items-start space-y-3 ${className}`}>
      {/* Structural SVG Vector Icon */}
      <LogoIcon size={size} className="text-primary"/>

      {/* Primary Left-Aligned Vertical Branding Tree */}
      <div className="flex flex-col text-left select-none">
        <h1 className="font-english-heading text-lg font-extrabold tracking-tight uppercase leading-snug text-foreground">
          <span className="text-primary text-3xl">Scene {" "}</span>
           <span className="font-hindi-heading text-xl">बनेगा क्या?</span> 
        </h1>
      </div>
    </div>
  );
}