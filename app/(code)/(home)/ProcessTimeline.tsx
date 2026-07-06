import Section from "@/ui/Section";

const phases = [
  { step: "01", title: "Script & Conceptualization", desc: "Fleshing out raw ideas into highly visual scripts, mood boards, and blocking blueprints." },
  { step: "02", title: "The Production Phase", desc: "Deploying professional camera kits, setups, directors, and production crews to capture the project elements." },
  { step: "03", title: "Post-Production Chemistry", desc: "Weaving stories on timeline boards, color spaces, and designing deep cinematic auditory environments." },
];

export default function ProcessTimeline() {
  return (
    <Section subHeading="The Pipeline" heading="Our Production Roadmap" hindiHeading="परिकल्पना से परदे तक।">
      <div className="relative grid gap-12 lg:grid-cols-3 border-l lg:border-l-0 lg:border-t border-border/40 pl-8 lg:pl-0 lg:pt-12">
        {phases.map((phase) => (
          <div key={phase.step} className="relative">
            <div className="absolute -left-10.25 lg:left-0 lg:-top-14.25 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-8 ring-background" />
            <span className="font-english-heading text-xs text-primary/60 tracking-widest block mb-2">PHASE {phase.step}</span>
            <h4 className="font-english-heading text-xl text-foreground mb-3">{phase.title}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{phase.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}