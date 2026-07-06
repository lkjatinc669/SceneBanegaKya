import Section from "@/ui/Section";

const technicalFAQs = [
  { q: "Who retains the raw media asset footprints?", a: "The studio delivers full commercial broadcast usage rights to the client upon final balance sign-offs. Raw footage assets can be added to your contract separately if requested." },
  { q: "Can we switch creative formats mid-way through production?", a: "Script adjustments are completely safe during the pre-production window. Once physical lighting components and stages are built, changes will shift baseline project costs." },
];

export default function FAQ() {
  return (
    <Section subHeading="Direct Clarity" heading="Production FAQs" hindiHeading="सामान्य शंकाएं दूर करें।">
      <div className="max-w-3xl space-y-4">
        {technicalFAQs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-border/40 bg-surface/10 space-y-2">
            <h4 className="font-english-heading text-lg text-foreground">{faq.q}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}