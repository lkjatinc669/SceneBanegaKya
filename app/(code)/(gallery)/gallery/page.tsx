// gallery/page.tsx
"use client";

import { useState } from "react";
import Section from "@/ui/Section";
import GalleryHero from "./GalleryHero";
import GalleryCard from "./GalleryCard";
import { masterReels } from "./data/masterReels";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredReels = activeFilter === "all" 
    ? masterReels 
    : masterReels.filter(reel => reel.category === activeFilter);

  const categories = [
    { label: "All Works", value: "all" },
    { label: "Commercials", value: "commercial" },
    { label: "Brand Stories", value: "brand-story" },
    { label: "Experimental / Editing", value: "experimental" }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <GalleryHero />

      <Section subHeading="The Vault" heading="Bespoke Content Feed" hindiHeading="डिजिटल आर्काइव।">
        
        {/* Dynamic Category Filtering Row */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-border/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                  : "bg-surface/10 text-foreground-muted border-border/40 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Reels Grid (9:16 Cinematic Short Aspect Ratio Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredReels.map((reel) => (
            <GalleryCard key={reel.id} reel={reel} />
          ))}
        </div>
      </Section>
    </main>
  );
}