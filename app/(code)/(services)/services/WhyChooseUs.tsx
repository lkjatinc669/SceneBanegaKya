import Section from "@/ui/Section";

const highlights = [
  { title: "No Creative Outsource Outsourcing", text: "From script outlines to final custom sound mixing design layers, we execute everything securely in-house." },
  { title: "True Native 4K/8K Deliveries", text: "We do not shoot on standard consumer mirrorless blocks without specialized cinema compression matrices." },
  { title: "Bespoke Dynamic Soundscapes", text: "We explicitly score background ambient noise layers to elevate exact emotional narrative beats." },
];

export default function WhyChooseUs() {
  return (
    <Section subHeading="The Differentiators" heading="Why Brands Choose Our Guild" hindiHeading="विवरण में ही सत्य है।">
      <div className="grid gap-8 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <div key={index} className="p-8 rounded-2xl bg-surface/10 border border-border/40 relative">
            <h4 className="font-english-heading text-xl text-foreground mb-3">{item.title}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}