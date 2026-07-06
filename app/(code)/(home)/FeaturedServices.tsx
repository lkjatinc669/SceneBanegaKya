import Section from "@/ui/Section";

const services = [
  { id: "01", title: "Cinematic TVCs & Ads", desc: "High-end television commercials shot on global industry standards to command immediate market share." },
  { id: "02", title: "Brand Documentaries", desc: "Deep-dive human stories uncovering the real values behind founders, architectures, and operations." },
  { id: "03", title: "Creative Photography", desc: "High-fashion, product lifestyle, and editorial image assets built around structural lighting setups." },
  { id: "04", title: "Post-Production Mastery", desc: "Hollywood-grade video editing, premium high-end color grading (LUT mapping), and audio design." },
];

export default function FeaturedServices() {
  return (
    <Section subHeading="Capabilities" heading="What We Do Best" hindiHeading="कला और तकनीक का संगम।">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <div key={item.id} className="p-8 rounded-3xl border border-border/60 bg-surface/30 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <span className="font-english-heading text-xs text-primary/50 block mb-6 tracking-widest">{item.id}</span>
              <h4 className="font-english-heading text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}