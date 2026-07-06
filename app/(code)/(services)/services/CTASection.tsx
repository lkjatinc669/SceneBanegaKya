import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function CTASection() {
  return (
    <Section className="border-t border-border/20">
      <div className="rounded-[2.5rem] bg-linear-to-tr from-surface/30 to-background border border-border p-8 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="font-english-heading text-3xl md:text-5xl tracking-tight mb-4">
          Ready to Initiate Your Visual Guild Project?
        </h2>
        <p className="font-english-body text-sm text-foreground-muted max-w-md mx-auto mb-8">
          Select your category layout framework, lock down the camera schedule targets, and let’s construct a permanent visual blueprint.
        </p>
        <Button href="/contact" variant="primary">Launch Creative Form</Button>
      </div>
    </Section>
  );
}