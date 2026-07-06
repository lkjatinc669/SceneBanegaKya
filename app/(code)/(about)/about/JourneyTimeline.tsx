import Section from "@/ui/Section";

const milestones = [
  { year: "2020", title: "The Breakthrough TVC", desc: "Successfully directed our first nationwide commercial campaign, passing over 50M+ structural digital streams." },
  { year: "2022", title: "Establishing The Post Lab", desc: "Built a localized multi-tier studio unit configured for extreme low-latency raw color tracking." },
  { year: "2025", title: "Going Global Wide", desc: "Signed collaborative production arrangements across cross-border lifestyle projects." },
];

export default function JourneyTimeline() {
  return (
    <Section subHeading="The Chronicle" heading="Our Structural Milestones" hindiHeading="सफर अब तक का।">
      <div className="relative border-l border-border/60 ml-4 md:ml-6 pl-8 space-y-12">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-10.25 top-1.5 h-5 w-5 rounded-full bg-background border-4 border-primary transition-transform duration-300 group-hover:scale-125" />
            <span className="font-english-heading text-xl text-primary font-bold block mb-1">{milestone.year}</span>
            <h4 className="font-english-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{milestone.title}</h4>
            <p className="font-english-body text-sm text-foreground-muted max-w-xl leading-relaxed">{milestone.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}