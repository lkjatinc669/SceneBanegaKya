import Section from "@/ui/Section";

const tenets = [
  { title: "Zero Assembly Lines", text: "We treat every brand project like a film festival entry. We do not copy-paste templates from past briefs." },
  { title: "The 24FPS Ritual", text: "We study classic cinema choices to understand pacing, composition, and deep, atmospheric lighting." },
  { title: "Egos Rest Outside", text: "The final image is the only boss on set. We critique work directly to pull out the highest execution quality." },
];

export default function OurCulture() {
  return (
    <Section subHeading="The Mindset" heading="Inside The Studio Engine" hindiHeading="हमारी कार्य संस्कृति।">
      <div className="grid gap-8 lg:grid-cols-3">
        {tenets.map((t, idx) => (
          <div key={idx} className="p-8 rounded-3xl border border-border bg-surface/10 relative overflow-hidden">
            <div className="absolute -right-4 -top-6 font-english-heading text-7xl text-foreground/2 select-none font-bold">
              {idx + 1}
            </div>
            <h4 className="font-english-heading text-xl text-primary mb-3">{t.title}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}