"use client";

import HeroSpotlight from "./HeroSpotlight";
import HeroVideo from "./HeroVideo";

export default function HomeHeroBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-background">
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Atmospheric Ambient Lighting Lights */}
      <HeroSpotlight variant="primary" size="lg" className="left-1/3 top-0 -translate-x-1/2" opacity={12} />
      <HeroSpotlight variant="sepia" size="md" className="-left-40 top-52" opacity={10} />

      {/* Typography Background Plates */}
      <h2 className="absolute left-[-2%] top-[8%] font-english-heading text-[12rem] text-foreground/1.5 select-none pointer-events-none tracking-tighter">SOUL</h2>
      <h2 className="absolute left-[35%] bottom-[8%] font-english-heading text-[12rem] text-foreground/1.5 select-none pointer-events-none tracking-tighter">VISION</h2>

      {/* Right Side 40% Cinema Video Panel Mask */}
      <div className="absolute bottom-0 right-0 top-0 hidden h-full w-[42%] opacity-85 mix-blend-luminosity lg:block border-l border-border/10">
        <HeroVideo videoId="dQw4w9WgXcQ" overlayOpacity="low" vignette={true} />
      </div>

      {/* Interstitial Scanlines */}
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="hero-scan pointer-events-none absolute inset-0 opacity-[0.03]" />
    </div>
  );
}