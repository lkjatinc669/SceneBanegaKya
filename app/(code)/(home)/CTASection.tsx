import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function CTASection() {
  return (
    <Section className="border-t border-border/40">
      <div className="rounded-[2.5rem] bg-linear-to-br from-surface to-background border border-border p-8 md:p-16 lg:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <span className="font-english-body text-xs uppercase tracking-[0.4em] text-primary block mb-6">Let's Work Together</span>
        <h2 className="font-english-heading text-4xl md:text-6xl max-w-3xl mx-auto tracking-tight mb-6">
          Ready To Turn Your Vision Into A Permanent Legacy?
        </h2>
        <h3 className="font-hindi-heading text-3xl text-foreground-muted mb-12">तो फिर, सीन बनाएं क्या?</h3>
        <Button href="/contact" variant="primary">Initiate Project Brief</Button>
      </div>
    </Section>
  );
}