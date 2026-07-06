"use client";

import HomeHeroBackground from "@/component/HeroBackground";

export default function TeamHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-background pt-32 flex items-center">
      <HomeHeroBackground />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <span className="font-english-body text-[11px] uppercase tracking-[0.4em] text-primary block mb-6 animate-pulse">
            THE CHRONICLE CREW
          </span>
          <h1 className="font-english-heading text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
            The Minds Holding <br />
            <span className="text-primary">The Vision & Glass.</span>
          </h1>
          <p className="font-english-body text-xl text-foreground-muted max-w-2xl leading-relaxed">
            A collective of industry-purist filmmakers, rogue sound designers, and color masterminds working together to execute fine-art brand strategies.
          </p>
        </div>
      </div>
    </section>
  );
}