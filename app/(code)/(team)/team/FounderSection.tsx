import Section from "@/ui/Section";

export default function FounderSection() {
  return (
    <Section subHeading="The Origin" heading="The Directorial Voice" hindiHeading="दृष्टिकोण और रचना।">
      <div className="grid gap-12 lg:grid-cols-12 items-center">
        
        {/* 1. Master Portrait Frame with Layered Image Background */}
        <div className="lg:col-span-5 aspect-3/4 rounded-4xl bg-surface/20 border border-border overflow-hidden flex items-center justify-center relative group shadow-lg">
          
          {/* High-Resolution Cinematic Set / Director Asset Layer */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src="/team/members/umesh-tank.jpg" 
              alt="Umesh — Founding Director" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            {/* Dark Anamorphic Mask Overlay for clear text reading safety */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-90" />
          </div>

          {/* Floating Minimalist Identity Card */}
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-background/80 backdrop-blur-md border border-border/40 z-10 shadow-xl transition-all duration-300 group-hover:border-primary/30">
            <h4 className="font-english-heading text-lg text-foreground font-bold">Umesh Tank</h4>
            <p className="font-english-body text-xs text-primary uppercase tracking-widest mt-0.5 font-mono">
              Founding Director
            </p>
          </div>

          {/* Tactical Frame Viewfinder Micro Details */}
          <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/20 z-10 pointer-events-none" />
          <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-white/20 z-10 pointer-events-none" />
        </div>

        {/* 2. Textual Narrative Column */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-english-heading text-3xl md:text-4xl text-foreground font-bold tracking-tight leading-tight">
            "We built this studio because frames should strike the chest, not just sit on a server."
          </h3>
          <p className="font-english-body text-base md:text-lg text-foreground-muted leading-relaxed">
            Aman started his career managing raw data footages across complex feature sets. Seeing commercial productions shift toward sterile templates, he organized a core team of purists to break the mould and start <span className="text-foreground italic font-medium">Scene Banega Kya</span>.
          </p>
          
          {/* Technical Hardware Rig Signature */}
          <div className="p-6 rounded-2xl border border-border/40 bg-surface/30 font-mono text-xs text-primary/80 leading-relaxed shadow-inner">
            <span className="text-foreground-muted font-bold block mb-1 uppercase tracking-wider text-[10px]">
              Preferred Studio Payload // Configuration
            </span>
            ARRI Alexa Mini LF // Anamorphic Prime Lenses // Low-key Rembrandt Lighting Grids.
          </div>
        </div>

      </div>
    </Section>
  );
}