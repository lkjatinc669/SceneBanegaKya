import React from 'react';

interface SceneLogoProps {
  logoSrc: string;
  logoAlt?: string;
  className?: string;
}

export const SceneLogo: React.FC<SceneLogoProps> = ({
  logoSrc ="/logo.svg",
  logoAlt = "Scene Logo Icon",
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-3 rounded-2xl max-w-xl ${className}`}>
      
      {/* Left Side: Logo Image Slot */}
      <div className="shrink-0 flex items-center">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className="w-14 h-auto object-contain" 
        />
      </div>

      {/* Right Side: Dynamic Typography Container */}
      <div className="flex flex-row items-baseline gap-2 font-sans">
        
        {/* Main Branding - SCENE (Orange) */}
        <h1 className="text-[#e07a4f] font-bold text-3xl m-0 leading-none">
          Scene
        </h1>

        {/* Hindi Subtitle - बनेगा क्या (White) */}
        <p className="text-white font-light text-xl m-0 opacity-95 leading-none">
          बनेगा क्या?
        </p>
      </div>
      
    </div>
  );
};

export default SceneLogo;