import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function CTASection() {
  return (
    <Section className="border-t border-border/20">
      <div className="rounded-[2.5rem] bg-linear-to-tr from-surface/40 to-background border border-border p-8 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="font-english-heading text-3xl md:text-5xl max-w-2xl mx-auto tracking-tight mb-4">
          Have a Story and Looking for a Crew?
        </h2>
        <p className="font-english-body text-sm text-foreground-muted max-w-md mx-auto mb-8">
          Let’s sit down, outline the coordinates, organize the equipment setup, and build your next major visual breakthrough.
        </p>
        <Button href="/contact" variant="primary">Let's talk production</Button>
      </div>
    </Section>
  );
}