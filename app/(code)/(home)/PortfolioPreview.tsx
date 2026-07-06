"use client";

import Section from "@/ui/Section";
import Button from "@/ui/Button";
import { ArrowUpRight } from "lucide-react";

const highTierWorks = [
  { 
    title: "The Midnight Ride", 
    category: "Commercial Advertisement", 
    gridSpan: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Ethereal Spaces", 
    category: "Architectural Documentary", 
    gridSpan: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    title: "Shadows of Truth", 
    category: "Short Feature Film", 
    gridSpan: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    title: "Urban Velocity", 
    category: "D2C Fashion Campaign", 
    gridSpan: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
  },
];

export default function PortfolioPreview() {
  return (
    <Section 
      subHeading="Selected Reels" 
      heading="Stories That Breathe" 
      hindiHeading="फ्रेम नहीं, फीलिंग जगाते हैं।"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[360px] gap-6 w-full">
        {highTierWorks.map((work, idx) => (
          <div 
            key={idx} 
            className={`
              relative rounded-[2rem] overflow-hidden group flex flex-col justify-end p-8 min-h-[300px] md:min-h-0
              cursor-pointer transition-all duration-500 ${work.gridSpan}
              /* Light Mode Styling */
              bg-white/70 border border-black/[0.08] hover:border-primary/40 shadow-xs hover:shadow-xl
              /* Dark Mode Dynamic Shift */
              dark:bg-surface/30 dark:border-border/40 dark:hover:border-primary/30 
              dark:hover:shadow-[0_0_50px_rgba(210,116,52,0.05)]
            `}
          >
            {/* 1. High-Res Media Layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img 
                src={work.image} 
                alt={work.title} 
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 dark:opacity-70 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              
              {/* Theme Adaptive Cinema Matte Layer:
                  Uses background color variables so the mask naturally turns white or dark based on the theme.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* 2. Micro Action Anchor (Top Corner Arrow) */}
            <div className="absolute top-6 right-6 h-10 w-10 rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 text-primary
              bg-white/90 border border-black/[0.06] backdrop-blur-md shadow-xs
              dark:bg-background/80 dark:border-border/60"
            >
              <ArrowUpRight size={16} />
            </div>

            {/* 3. Lower Content Meta Stack */}
            <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20 w-fit block">
                {work.category}
              </span>
              {/* text-foreground auto-switches perfectly between near-black and pure white */}
              <h4 className="font-english-heading text-2xl md:text-3xl text-foreground tracking-tight font-bold transition-colors duration-300">
                {work.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Control Footer Action */}
      <div className="mt-16 text-center">
        <Button href="/portfolio" variant="outline" className="backdrop-blur-md hover:bg-surface/40 dark:hover:bg-surface/40">
          Explore Archive Vault
        </Button>
      </div>
    </Section>
  );
}