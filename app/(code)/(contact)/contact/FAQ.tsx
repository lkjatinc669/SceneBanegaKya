import Section from "@/ui/Section";

const contactFAQs = [
  { q: "Is there an initial workshop briefing fee?", a: "No. Our initial script discovery calls and quote formulations are completely free of charge." },
  { q: "Do you accept ready-made third party production scripts?", a: "Yes. Our camera and directional crews can step in directly as execution mechanics for existing agency scripts." },
];

export default function FAQ() {
  return (
    <Section subHeading="Clarity" heading="Frequent Project Questions" hindiHeading="पूछे जाने वाले प्रश्न।">
      <div className="max-w-3xl space-y-4">
        {contactFAQs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-border/40 bg-surface/10 space-y-2">
            <h4 className="font-english-heading text-lg text-foreground">{faq.q}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}