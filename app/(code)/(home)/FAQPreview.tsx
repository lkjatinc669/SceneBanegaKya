import Section from "@/ui/Section";

const faqs = [
  { q: "What is the typical turnaround timeline for a commercial film?", a: "Depending on scale, pre-production consumes 2 weeks, production takes 2-4 days, and post-production delivers finalized cuts inside 3 weeks." },
  { q: "Do you travel across India for documentary film assignments?", a: "Yes. Our core operational team handles global project execution logistics smoothly across diverse topographies." },
];

export default function FAQPreview() {
  return (
    <Section subHeading="Assurance" heading="Frequently Answered Questions" hindiHeading="आपके सवाल, हमारे जवाब।">
      <div className="max-w-3xl space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-surface/10 space-y-2">
            <h4 className="font-english-heading text-lg text-foreground">{faq.q}</h4>
            <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}