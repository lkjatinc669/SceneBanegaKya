import Section from "@/ui/Section";

const differentiators = [
  { title: "Cutting-Edge Hardware Gears", desc: "Operating on high-end raw workflows, high-fidelity prime glass, and professional lighting components." },
  { title: "Tailored Brand Narrative Focus", desc: "No generic templates. Your visual assets are custom-designed around your unique value proposition." },
  { title: "Uncompromising Color Accuracy", desc: "Dedicated high-end digital color pipelines to match global cinematic projection standards." },
];

export default function WhyChooseUs() {
  return (
    <Section subHeading="Why Us" heading="Built For High Visual Standards" hindiHeading="गुणवत्ता सर्वोपरि।">
      <div className="grid gap-8 lg:grid-cols-3">
        {differentiators.map((diff, index) => (
          <div key={index} className="space-y-4">
            <h4 className="font-english-heading text-xl text-foreground border-b border-border/40 pb-3">{diff.title}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{diff.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}