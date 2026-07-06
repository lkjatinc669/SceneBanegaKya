import Section from "@/ui/Section";

export default function MissionVision() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-8 md:p-12 rounded-4xl border border-border bg-surface/10 space-y-4">
          <span className="font-english-heading text-xs tracking-widest text-primary block">THE MISSION</span>
          <h3 className="font-english-heading text-3xl text-foreground">To Exterminate Boring Content</h3>
          <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
            Our direct absolute target is to eliminate clinical, soul-less branding movies. We pull raw human truth forward using industry-leading lenses to create profound memories.
          </p>
        </div>
        
        <div className="p-8 md:p-12 rounded-4xl border border-border bg-surface/10 space-y-4">
          <span className="font-english-heading text-xs tracking-widest text-primary block">THE VISION</span>
          <h3 className="font-english-heading text-3xl text-foreground">Global Hindi-Cinema Frameworks</h3>
          <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
            To build a robust platform where Indian brand identity meets structural fine-art cinematography, establishing a standard benchmark for international viewers.
          </p>
        </div>
      </div>
    </Section>
  );
}