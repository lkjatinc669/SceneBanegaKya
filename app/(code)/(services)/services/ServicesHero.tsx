"use client";

import HomeHeroBackground from "@/component/HeroBackground";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-background pt-32 flex items-center">
      <HomeHeroBackground />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <span className="font-english-body text-[11px] uppercase tracking-[0.4em] text-primary block mb-6">
            OUR CAPABILITIES
          </span>
          <h1 className="font-english-heading text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
            From Script to Screen. <br />
            <span className="text-primary">No Compromises.</span>
          </h1>
          <p className="font-english-body text-xl text-foreground-muted max-w-2xl leading-relaxed">
            We provide full-scale production architecture across film, sound, digital assets, and wild conceptual boundaries. Explore our specialized guilds below.
          </p>
        </div>
      </div>
    </section>
  );
}