"use client";

import Button from "@/ui/Button";
import HomeHeroBackground from "../../../component/HeroBackground";
import HeroStats from "./HeroStats";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 flex items-center">
      
      <div className="absolute inset-0 pointer-events-none z-0 select-none">

        {/* Layer 2: Raw Production Set Photography Embedding */}
        <div className="absolute inset-0">
          <img 
            src="/images/home/background.png" 
            alt="Scene Banega Kya Production Set Background" 
            className="w-full h-full object-cover grayscale opacity-[0.9] object-center scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          />
        </div>

        {/* Layer 3: Technical Director's Viewfinder Grid Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Layer 4: Deep anamorphic lens vignettes and tint masks */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-background/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/60 to-background" style={{ backgroundImage: "radial-gradient(circle at center, transparent 20%, var(--background) 80%)" }} />
        
        {/* Decorative Aspect Ratio Bars for true 2.39:1 Cinema Feel */}
        <div className="absolute top-0 left-0 w-full h-6 bg-black/40 border-b border-border/10 backdrop-blur-sm hidden md:block" />
        <div className="absolute bottom-0 left-0 w-full h-6 bg-black/40 border-t border-border/10 backdrop-blur-sm hidden md:block" />
      </div>

      {/* ========================================================================= */}
      {/* FOREGROUND CONTENT LAYER */}
      {/* ========================================================================= */}
      <div className="container relative mx-auto px-6 z-10 w-full">
        <div className="max-w-xl lg:max-w-3xl">
          
          {/* Custom Studio Identity Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-surface/30 px-4 py-2 backdrop-blur-xl mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-foreground-muted">
              We Present
            </span>
          </div>

          {/* Heading Layout Systems */}
          <h2 className="font-english-heading text-5xl leading-[1.05] md:text-7xl tracking-tight text-foreground font-black">
            Every Brand Deserves A Vision.
            <br />
            We Give It <span className="text-foreground/90 font-light italic">A Soul.</span>
          </h2>

          {/* Localized Devnagari Callout Blocks */}
          <div className="mt-8 space-y-1 pl-1 border-primary/30">
            <h1 className="font-hindi-heading text-6xl leading-none text-foreground/90 md:text-[5.5rem] tracking-tight">
              सीन नहीं,
            </h1>
            <h1 className="font-hindi-heading text-6xl leading-none text-primary md:text-[5.5rem] tracking-tight drop-shadow-[0_0_40px_rgba(210,116,52,0.15)]">
              यादें बनाते हैं।
            </h1>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-8 bg-primary/40" />
            <h3 className="font-english-heading text-xl md:text-2xl text-primary/90 tracking-widest font-bold uppercase font-mono">
              Scene Banega Kya?
            </h3>
          </div>

          <p className="mt-4 font-english-body text-base md:text-lg leading-relaxed text-foreground-muted max-w-xl">
            We view your project through a distinct cinematic lens, transforming business milestones into grand, moving narratives that hook viewers across digital platforms.
          </p>

          {/* Call To Actions */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Button href="/contact" variant="primary" className="shadow-lg shadow-primary/10 group">
              Let's Create <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 ml-1">→</span>
            </Button>
            <Button href="/gallery" variant="outline" className="backdrop-blur-md bg-surface/10 hover:bg-surface/30">
              Watch Showreel
            </Button>
          </div>

          {/* Interactive Live Production Statistics Component Slot */}
          <div className="mt-16 pt-12 border-t border-border/30 max-w-xl">
            {/* <HeroStats /> */}
          </div>

        </div>
      </div>
    </section>
  );
}