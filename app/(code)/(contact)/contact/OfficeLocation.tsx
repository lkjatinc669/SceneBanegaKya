import Section from "@/ui/Section";

export default function OfficeLocation() {
  return (
    <Section subHeading="The Coordinates" heading="Visit The Production Lab" hindiHeading="स्टूडियो का पता।">
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-english-heading text-2xl text-foreground">Mumbai Central Unit</h4>
          <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
            Studio Floor 4B, Cinematic Warehouse Compound, Near Film Studio Hub, Lower Parel, Mumbai, Maharashtra, 400013.
          </p>
        </div>
        
        {/* Map Placeholder Canvas Container */}
        <div className="lg:col-span-8 aspect-video rounded-4xl border border-border bg-surface/20 overflow-hidden relative flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
          <span className="font-english-heading text-xs text-foreground/10 select-none">INTERACTIVE MAP LAYOUT IFRAME CANVAS</span>
          <div className="absolute top-4 left-4 font-mono text-[9px] text-primary/50 tracking-widest bg-background/80 px-3 py-1 rounded border border-border/40">
            LAT: 18.9935° N // LONG: 72.8252° E
          </div>
        </div>
      </div>
    </Section>
  );
}