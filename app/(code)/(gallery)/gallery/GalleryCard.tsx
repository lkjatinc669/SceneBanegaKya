// gallery/GalleryCard.tsx
"use client";

import { useEffect, useState } from "react";
import { ReelItem } from "./data/masterReels";

interface GalleryCardProps {
  reel: ReelItem;
  onClick: () => void;
}

export default function GalleryCard({ reel, onClick }: GalleryCardProps) {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <div 
      onClick={onClick}
      className="group rounded-3xl border border-border/60 bg-surface/10 overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(210,116,52,0.06)] cursor-pointer"
    >
      {/* 9:16 Shorts Box Layout Container */}
      <div className="aspect-[9/16] w-full bg-background relative z-10 overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}?modestbranding=1&rel=0&playsinline=1${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`}
          title={reel.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" 
        />
        {/* pointer-events-none on iframe lets the card register clicks smoothly to trigger Lightbox instead */}
        
        <div className="absolute inset-4 border border-white/5 pointer-events-none z-20 rounded-2xl group-hover:border-primary/20 transition-colors duration-500" />
      </div>

      {/* Details Box */}
      <div className="p-5 flex flex-col justify-between grow bg-background/50 border-t border-border/20">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-primary block mb-1">
            {reel.category.replace("-", " ")}
          </span>
          <h4 className="font-english-heading text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {reel.title}
          </h4>
        </div>
      </div>
    </div>
  );
}