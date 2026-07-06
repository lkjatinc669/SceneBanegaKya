import Section from "@/ui/Section";

const values = [
  { name: "Uncompromised Glass", rule: "We do not fake depth of field with digital blurs. If it's worth showing, it's worth capturing natively." },
  { name: "Narrative Supremacy", rule: "Technology changes every year, but a brilliant storyline hits the chest just as hard as it did a century ago." },
  { name: "Radical Transparency", rule: "No hidden line items or dynamic operational inflations. Clear studio production metrics from script to file delivery." },
];

export default function CompanyValues() {
  return (
    <Section subHeading="Our Creed" heading="The Code We Live By" hindiHeading="सिद्धांत जो हमारी पहचान हैं।">
      <div className="grid gap-8 md:grid-cols-3">
        {values.map((v, i) => (
          <div key={i} className="border-t border-border/40 pt-6 space-y-3">
            <h4 className="font-english-heading text-lg text-foreground tracking-tight">{v.name}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{v.rule}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}