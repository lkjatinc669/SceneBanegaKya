import Section from "@/ui/Section";

const workflowSteps = [
  { step: "01", name: "The Creative Brief", timeline: "Day 1-3", details: "Deep discovery tracking sessions unpacking script components, visual hooks, and exact production targets." },
  { step: "02", name: "The Capture Block", timeline: "Scheduled", details: "Structured field production executing specialized lighting grids and high-fidelity video sets." },
  { step: "03", name: "The Post Pipeline", timeline: "2-3 Weeks", details: "Deep timeline stitching, multi-pass color calibration balancing, and detailed sound layer mapping." },
];

export default function Workflow() {
  return (
    <Section subHeading="The Lifecycle" heading="Operational Production Workflow" hindiHeading="योजनाबद्ध निर्माण प्रक्रिया।">
      <div className="grid gap-8 md:grid-cols-3">
        {workflowSteps.map((ws, i) => (
          <div key={i} className="border-l-2 border-primary/40 pl-6 space-y-2 group hover:border-primary transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="font-english-heading text-xs text-primary tracking-widest font-mono">PHASE {ws.step}</span>
              <span className="font-english-body text-[10px] text-foreground-muted bg-surface/40 px-2 py-0.5 rounded border border-border/40">{ws.timeline}</span>
            </div>
            <h4 className="font-english-heading text-xl text-foreground">{ws.name}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{ws.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}