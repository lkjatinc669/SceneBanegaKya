// components/logo/horizontal-logo.tsx
import React from 'react';
import { LogoIcon } from './LogoIcon';

export default function LogoHorizontal({ size = 52, className = '' }) {
  return (
    <div className={`flex flex-row items-center space-x-3 ${className}`}>
      {/* Structural SVG Vector Icon */}
      <LogoIcon size={size} className="text-primary"/>

      {/* Primary Horizontal Branding Tree */}
      <div className="flex flex-col select-none">
        <h1 className="font-english-heading font-extrabold tracking-tight leading-snug text-foreground">
           <span className="text-primary text-3xl">Scene {" "}</span>
           <span className="font-hindi-heading text-xl">बनेगा क्या?</span> 
        </h1>
      </div>
    </div>
  );
}