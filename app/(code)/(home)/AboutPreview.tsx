import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function AboutPreview() {
  return (
    <Section subHeading="The Manifesto" heading="Crafting Legacy Beyond Pixels" hindiHeading="कहानी नहीं, किरदार गढ़ते हैं।">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="font-english-body text-lg leading-relaxed text-foreground-muted">
            We believe that corporate films shouldn’t feel corporate. Advertisements shouldn't feel like commercial interruptions. Every frame must possess deliberate artistic weight.
          </p>
          <p className="font-english-body text-base text-foreground-muted/80 leading-relaxed">
            Founded with a vision to revolutionize digital video strategy across India, our directors, cinematographers, and colorists treat every brand project as a direct entry for global cinematic exposure.
          </p>
          <div className="pt-4">
            <Button href="/about" variant="outline">Our DNA</Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-3xl bg-surface border border-border overflow-hidden p-8 flex flex-col justify-end min-h-87.5">
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />
          <div className="relative z-20">
            <h4 className="font-english-heading text-xl text-primary mb-2">"Great stories aren't written in ink."</h4>
            <p className="font-english-body text-sm text-foreground-muted">They are felt in the chest and remembered in the dark.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}