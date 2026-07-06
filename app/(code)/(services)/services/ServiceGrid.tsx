"use client";

import { useState } from "react";
import Section from "@/ui/Section";
import ServiceCard from "./ServiceCard";

const masterServices = [
  { id: "01", title: "Commercial Production", desc: "High-impact narrative and advertising pipelines created to scale broadcast television or global digital tracking parameters cleanly.", tags: ["TVCs", "Pre-Rolls", "Cinema Ads"], specs: "Shot exclusively on RED/ARRI 8K raw formats with dynamic bespoke sound architecture mapping." },
  { id: "02", title: "Brand Shoot", desc: "Corporate profiles and strategic business films designed to strip away clinical corporate boredom to show authentic human souls.", tags: ["Founders", "Manifestos", "Culture"], specs: "Custom pre-production discovery workshops coupled with documentary-style lighting frameworks." },
  { id: "03", title: "Wedding Film", desc: "Bespoke, cinematic love archives built with cinematic framing standards. No typical cheesy, bright over-processed montages.", tags: ["Fine-Art", "Heirlooms", "Documentary"], specs: "Discrete multitrack audio recording systems matched with warm, rich sepia-leaning custom LUT color grading." },
  { id: "04", title: "Creative Photography", desc: "High-end product lifestyle portrait designs, lookbooks, and high-fashion editorial imagery using structural lighting.", tags: ["Editorial", "Product", "Lookbook"], specs: "Medium-format digital imaging processing backed by intentional physical stage composition sets." },
  { id: "05", title: "Music Video", desc: "Avid sonic imagery for dynamic musical tracks, translating sound waves into provocative, heavy-hitting on-screen statements.", tags: ["Narrative", "Performance", "VFX Loops"], specs: "Complex camera acceleration tricks, synchronized neon array programming, and sharp post-edit pacing." },
  { id: "06", title: "Podcast Production", desc: "Brodcast-grade visual multi-cam setups engineered to maintain continuous narrative retention across long platforms.", tags: ["Multi-Cam", "Mastering", "Clips Engine"], specs: "Shure SM7B signal treatment paired with automated micro-clip dynamic aspect-ratio exports for social reach." },
  { id: "07", title: "Digital Website Design", desc: "High-end portfolio design architectures constructed seamlessly to showcase large video media portfolios without lag.", tags: ["Next.js", "WebGL UI", "Premium Portals"], specs: "Tailwind engine rendering optimization structures running smoothly at 60fps to ensure seamless load profiles." },
  { id: "08", title: "Other Wild Concepts", desc: "Have a mind-bending idea that doesn't fit into a standard checkbox? We formulate rogue scripts, projections, and wild visuals.", tags: ["Experimental", "Installations", "Sci-Fi"], specs: "Complete access to experimental custom rendering, green screens, anamorphic lenses, and alternative projection." },
];

export default function ServiceGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = masterServices[activeIndex];

  return (
    <Section subHeading="The Services" heading="Our Complete Creative Guild" hindiHeading="हर माध्यम, उत्कृष्ट परिणाम।">
      {/* CRITICAL ENGINE UPDATE: 
        Changed `items-start` to `items-stretch`. This ensures the parent grid expands to 
        the maximum height of the left column, creating the bounding track for the sticky element.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-8 w-full relative">
        
        {/* Left/Center Columns: Interactive Card Mesh Grid */}
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2 h-fit">
          {masterServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              desc={service.desc}
              tags={service.tags}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Right Column: Deep-Dive Dynamic ServiceDetails panel */}
        {/* CRITICAL STICKY POSITIONING:
          Wrapped the panel in a self-contained container that matches the parent's full height.
          The inner div uses `lg:sticky lg:top-32` to travel smoothly down the page and lock
          at the bottom bounds once the left grid finishes rendering.
        */}
        <div className="w-full h-full">
          <div className="lg:sticky lg:top-32 p-8 rounded-3xl border border-primary/20 bg-linear-to-b from-surface/30 to-background/90 backdrop-blur-xl space-y-6">
            <span className="font-mono text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit block border border-primary/20">
              Technical Blueprint
            </span>
            <h4 className="font-english-heading text-3xl text-foreground font-bold tracking-tight">
              {activeService.title}
            </h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
              {activeService.desc}
            </p>
            <div className="border-t border-border/40 pt-4 space-y-3">
              <h5 className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">
                Standard Build Specs:
              </h5>
              <p className="font-english-body text-xs text-foreground/80 leading-relaxed italic bg-background/50 p-4 rounded-xl border border-border/40 shadow-inner">
                "{activeService.specs}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}