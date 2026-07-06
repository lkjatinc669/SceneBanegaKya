"use client";

import HomeHeroBackground from "@/component/HeroBackground";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background pt-32 flex items-center">
      {/* Reusing visual machinery for a consistent spatial look */}
      <HomeHeroBackground />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <span className="font-english-body text-[11px] uppercase tracking-[0.4em] text-primary block mb-6 animate-pulse">
            WHO WE ARE
          </span>
          <h1 className="font-english-heading text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
            The Architects behind <br />
            <span className="text-primary">Scene Banega Kya</span>
          </h1>
          <p className="font-english-body text-xl text-foreground-muted max-w-2xl leading-relaxed">
            We are a collective of rogue filmmakers, technical purists, and brand strategists dedicated to turning ordinary commercial timelines into enduring visual monuments.
          </p>
        </div>
      </div>
    </section>
  );
}