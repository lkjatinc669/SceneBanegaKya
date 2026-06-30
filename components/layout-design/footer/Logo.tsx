import React from 'react';

interface SceneLogoProps {
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
}

export const SceneLogo: React.FC<SceneLogoProps> = ({
  logoSrc = "/logo.svg",
  logoAlt = "Scene Logo Icon",
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 p-4 text-center ${className}`}>
      
      {/* Top: Logo Image Slot */}
      <div className="shrink-0 flex items-center justify-center">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className="w-28 h-auto object-contain" // Slightly increased size for vertical prominence
        />
      </div>

      {/* Bottom: Dynamic Typography Container */}
      <div className="flex flex-col items-center gap-1.5 font-sans">
        
        {/* Main Branding - SCENE (Orange) */}
        <h1 className="text-[#e07a4f] font-bold text-4xl m-0 leading-none tracking-wide uppercase">
          Scene
        </h1>

        {/* Hindi Subtitle - बनेगा क्या (White) */}
        <p className="text-white font-light text-lg m-0 opacity-90 leading-none tracking-normal">
          बनेगा क्या?
        </p>
      </div>
      
    </div>
  );
};

export default SceneLogo;