import Section from "@/ui/Section";

const feedbacks = [
  { quote: "Scene Banega Kya completely redefined how we present our architectural projects. It is pure art.", author: "Rajesh K., Founder Matrix Build", role: "Real Estate Client" },
  { quote: "The ad campaign they shot for our D2C label delivered a significant boost in retention. Incredible scale.", author: "Ananya M., Head of Growth", role: "Fashion Apparels" },
];

export default function Testimonials() {
  return (
    <Section subHeading="Reactions" heading="What the Pioneers Say" hindiHeading="संतुष्ट ग्राहक, सफल कहानियां।">
      <div className="grid gap-8 md:grid-cols-2">
        {feedbacks.map((f, i) => (
          <div key={i} className="p-8 md:p-12 rounded-3xl border border-border bg-surface/20 flex flex-col justify-between">
            <p className="font-english-body text-lg italic text-foreground leading-relaxed">"{f.quote}"</p>
            <div className="mt-8 border-t border-border/40 pt-4">
              <h5 className="font-english-heading text-sm text-primary">{f.author}</h5>
              <p className="font-english-body text-xs text-foreground-muted">{f.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}