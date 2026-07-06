import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function CTASection() {
  return (
    <Section className="border-t border-border/20">
      <div className="rounded-[2.5rem] bg-linear-to-tr from-surface/30 to-background border border-border p-8 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="font-english-heading text-3xl md:text-5xl tracking-tight mb-4">
          Ready to Deploy the Collective?
        </h2>
        <p className="font-english-body text-sm text-foreground-muted max-w-md mx-auto mb-8">
          Now that you've seen the technical unit behind the glass, let's look at your brand metrics and plan your next campaign.
        </p>
        <Button href="/contact" variant="primary">Hire the Crew</Button>
      </div>
    </Section>
  );
}