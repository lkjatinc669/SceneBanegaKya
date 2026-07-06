"use client";

interface TeamCardProps {
  name: string;
  role: string;
  dept: string;
  creed: string;
  img?: string; // Image path prop integrated
}

export default function TeamCard({ name, role, dept, creed, img }: TeamCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-border/60 bg-background transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(210,116,52,0.03)] group flex flex-col justify-between h-full">
      <div>
        {/* 1. Interactive Portrait Frame Engine */}
        <div className="aspect-4/5 w-full rounded-xl bg-surface/30 border border-border/40 mb-6 overflow-hidden relative flex items-center justify-center transition-all duration-500">
          
          {/* A. Dynamic Halo Aura Ring Layer (Positioned behind the portrait head space) */}
          <div className="absolute top-[15%] w-48 h-48 rounded-full bg-primary/5 dark:bg-primary/10 opacity-0 scale-50 blur-xl group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out z-0" />
          
          <div className="absolute top-[12%] w-40 h-40 rounded-full border border-dashed border-primary/30 opacity-0 rotate-0 scale-75 group-hover:opacity-100 group-hover:rotate-180 group-hover:scale-100 transition-all duration-1000 ease-out z-0" />

          {/* B. Transparent PNG Rendering Frame Layer */}
          {img ? (
            <img
              src={img}
              alt={name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-bottom select-none pointer-events-none grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out z-10"
            />
          ) : (
            <span className="font-english-heading text-[10px] uppercase tracking-widest text-foreground/5 select-none z-10">
              Portrait Matrix Block
            </span>
          )}

          {/* C. Tactical Corner Viewfinder Line Overlays */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-foreground/20 z-20" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-foreground/20 z-20" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-foreground/20 z-20" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-foreground/20 z-20" />
        </div>

        {/* 2. Meta Stack Layer */}
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 w-fit block mb-2">
          {dept}
        </span>
        <h4 className="font-english-heading text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h4>
        <p className="font-english-body text-xs text-foreground-muted mb-4">
          {role}
        </p>
      </div>

      {/* 3. Creed Footer Space */}
      <p className="font-english-body text-xs italic text-foreground-muted/70 border-t border-border/20 pt-4 leading-relaxed">
        "{creed}"
      </p>
    </div>
  );
}