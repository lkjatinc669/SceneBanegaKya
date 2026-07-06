"use client";

import HomeHeroBackground from "@/component/HeroBackground";

export default function GalleryHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-background pt-32 flex items-center">
      <HomeHeroBackground />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <span className="font-english-body text-[11px] uppercase tracking-[0.4em] text-primary block mb-6 font-mono">
            // RAW_ARCHIVE_DATA
          </span>
          <h1 className="font-english-heading text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
            Visual Proof. <br />
            <span className="text-primary">Captured Frames.</span>
          </h1>
          <p className="font-english-body text-xl text-foreground-muted max-w-2xl leading-relaxed">
            A dynamic ledger tracking our production outputs. Stream across our commercial films, music videos, or browse high-fashion editorial stills.
          </p>
        </div>
      </div>
    </section>
  );
}