import React from 'react';

interface SceneLogoProps {
  /** The path or URL to your logo PNG file */
  logoSrc: string;
  /** Optional custom alternative text for the logo image */
  logoAlt?: string;
  /** Optional extra classes for the outer container */
  className?: string;
}

export const SceneLogo: React.FC<SceneLogoProps> = ({
  logoSrc,
  logoAlt = "Scene Logo Icon",
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-6 rounded-2xl max-w-xl shadow-2xl ${className}`}>
      
      {/* Left Side: Logo Image Slot */}
      <div className="flex-shrink-0 flex items-center">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className="w-[100px] h-[100px] object-contain" 
        />
      </div>

      {/* Right Side: Dynamic Typography Container */}
      <div className="flex flex-row items-baseline gap-3 font-sans">
        
        {/* Main Branding - SCENE (Orange) */}
        <h1 className="text-[#E17A00] font-extrabold text-4xl m-0 tracking-wide uppercase leading-none">
          SCENE
        </h1>

        {/* Hindi Subtitle - बनेगा क्या (White) */}
        <p className="text-white font-semibold text-lg m-0 tracking-normal opacity-95 leading-none">
          बनेगा क्या
        </p>
      </div>
      
    </div>
  );
};

export default SceneLogo;