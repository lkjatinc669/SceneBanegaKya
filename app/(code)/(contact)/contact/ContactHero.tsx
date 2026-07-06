"use client";

import HomeHeroBackground from "@/component/HeroBackground";

export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] overflow-hidden bg-background pt-32 flex items-center">
      <HomeHeroBackground />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <span className="font-english-body text-[11px] uppercase tracking-[0.4em] text-primary block mb-6">
            COMMISSION US
          </span>
          <h1 className="font-english-heading text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
            Let’s Plan Your <br />
            <span className="text-primary">Next Major Scene.</span>
          </h1>
          <p className="font-english-body text-xl text-foreground-muted max-w-2xl leading-relaxed">
            Have a clear creative brief or a wild concept running through your mind? Fill out our production engine form below to drop coordinates with our crew.
          </p>
        </div>
      </div>
    </section>
  );
}