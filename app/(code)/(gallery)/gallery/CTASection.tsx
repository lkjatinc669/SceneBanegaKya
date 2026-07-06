import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function CTASection() {
  return (
    <Section className="border-t border-border/20 mt-16">
      <div className="rounded-[2.5rem] bg-linear-to-tr from-surface/30 to-background border border-border p-8 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="font-english-heading text-3xl md:text-5xl tracking-tight mb-4">
          Want Your Brand in This Grid?
        </h2>
        <p className="font-english-body text-sm text-foreground-muted max-w-md mx-auto mb-8">
          Let’s lock down your production parameters, configure the camera gear packages, and make something legendary together.
        </p>
        <Button href="/contact" variant="primary">Initiate Project Brief</Button>
      </div>
    </Section>
  );
}