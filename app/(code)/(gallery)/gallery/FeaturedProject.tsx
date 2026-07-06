"use client";

import { Play } from "lucide-react";

interface FeaturedProjectProps {
  onSelectVideo: (youtubeId: string, title: string) => void;
}

export default function FeaturedProject({ onSelectVideo }: FeaturedProjectProps) {
  const featured = {
    title: "The Midnight Creed — Rogue Music Video",
    desc: "A gritty look at experimental neon staging, utilizing custom lens setups and stylized, split-tone post calibration mapping to match heavy bass patterns.",
    youtubeId: "dQw4w9WgXcQ", // Replace with your master production YouTube ID string
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-border bg-surface/10 overflow-hidden relative min-h-[50vh] flex items-end p-8 md:p-16 mb-16 group">
      {/* Background Poster Media Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={featured.poster}
          alt={featured.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Split Interactive Controls / Content Mesh Layout */}
      <div className="relative z-10 grid gap-8 md:grid-cols-2 items-end w-full">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit block">
            ★ MASTERWORK SHOWCASE
          </span>
          <h2 className="font-english-heading text-3xl md:text-5xl text-foreground tracking-tight leading-none">
            {featured.title}
          </h2>
          <p className="font-english-body text-sm text-foreground-muted leading-relaxed max-w-md">
            {featured.desc}
          </p>
        </div>

        <div className="md:text-right">
          <button
            onClick={() => onSelectVideo(featured.youtubeId, featured.title)}
            className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-english-heading text-xs uppercase tracking-widest font-bold shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 hover:scale-102 cursor-pointer focus:ring-2 focus:ring-primary/50 focus:outline-none"
          >
            <Play size={14} fill="currentColor" />
            <span>Stream Showreel Frame</span>
          </button>
        </div>
      </div>
    </div>
  );
}