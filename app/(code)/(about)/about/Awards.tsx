import Section from "@/ui/Section";

const laurels = [
  { award: "Best Commercial Cinematography", body: "Indie Film Awards", year: "2024" },
  { award: "Outstanding Brand Storytelling", body: "Digital Media Summit", year: "2023" },
];

export default function Awards() {
  return (
    <Section subHeading="Laurels" heading="Industry Validation" hindiHeading="सम्मान और उपलब्धियां।">
      <div className="divide-y divide-border/40 border-y border-border/40">
        {laurels.map((l, i) => (
          <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div>
              <h4 className="font-english-heading text-lg text-foreground group-hover:text-primary transition-colors">{l.award}</h4>
              <p className="font-english-body text-sm text-foreground-muted">{l.body}</p>
            </div>
            <span className="font-english-heading text-sm text-foreground-muted sm:text-right font-mono">{l.year}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}