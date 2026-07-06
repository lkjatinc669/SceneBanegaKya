"use client";

import { useState, useEffect } from "react";

interface HeroVideoProps {
  videoId: string;
  overlayOpacity?: "none" | "low" | "medium" | "high";
  vignette?: boolean;
}

export default function HeroVideo({ videoId, overlayOpacity = "medium", vignette = true }: HeroVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, [videoId]);

  const opacityMap = { none: "bg-transparent", low: "bg-background/20", medium: "bg-background/40", high: "bg-background/70" };
  const youtubeParams = `autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${videoId}&modestbranding=1&iv_load_policy=3&showinfo=0&disablekb=1&playsinline=1`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full pointer-events-none scale-[1.35]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?${youtubeParams}`}
          title="Studio Background Loop"
          allow="autoplay; encrypted-media"
          className={`h-full w-full object-cover border-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${opacityMap[overlayOpacity]}`} />
      {vignette && (
        <div 
          className="pointer-events-none absolute inset-0 z-20"
          style={{ background: `radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 100%)` }}
        />
      )}
    </div>
  );
}