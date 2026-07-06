// gallery/page.tsx
"use client";

import { useState } from "react";
import Section from "@/ui/Section";
import GalleryHero from "./GalleryHero";
import GalleryCard from "./GalleryCard";
import GalleryFilter, { CategoryStructure } from "./GalleryFilter";
import Lightbox from "./Lightbox";
import { masterReels, ReelItem } from "./data/masterReels";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const filteredReels = activeFilter === "all" 
    ? masterReels 
    : masterReels.filter(reel => reel.category === activeFilter);

  const categories: CategoryStructure[] = [
    { label: "All Works", value: "all" },
    { label: "Commercials", value: "commercial" },
    { label: "Brand Stories", value: "brand-story" },
    { label: "Experimental / Editing", value: "experimental" }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <GalleryHero />

      <Section subHeading="The Vault" heading="Bespoke Content Feed" hindiHeading="डिजिटल आर्काइव।">
        
        {/* Filter Selection Row Component */}
        <GalleryFilter 
          categories={categories} 
          activeCategory={activeFilter} 
          onCategoryChange={setActiveFilter} 
        />

        {/* Dynamic Responsive Reel Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredReels.map((reel) => (
            <GalleryCard 
              key={reel.id} 
              reel={reel} 
              onClick={() => setSelectedReel(reel)} 
            />
          ))}
        </div>
      </Section>

      {/* Global Interactive Focus Presentation Window */}
      <Lightbox 
        item={selectedReel} 
        onClose={() => setSelectedReel(null)} 
      />
    </main>
  );
}