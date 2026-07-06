import Section from "@/ui/Section";
import Button from "@/ui/Button";

export default function JoinTeam() {
  return (
    <Section subHeading="Opportunities" heading="Looking For Creative Rebels" hindiHeading="हमारे साथ जुड़ें।">
      <div className="grid gap-8 lg:grid-cols-2 items-center border border-border p-8 md:p-12 rounded-4xl bg-surface/20">
        <div className="space-y-4">
          <h3 className="font-english-heading text-2xl text-foreground">
            Think you can handle high production standards?
          </h3>
          <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
            We are always tracking sharp colorists, camera operators, sound designers, and content developers who can maintain absolute technical discipline under deadline pressure.
          </p>
        </div>
        <div className="lg:text-right">
          <Button href="/contact" variant="outline" className="w-full lg:w-auto">
            Submit Portfolio Reels
          </Button>
        </div>
      </div>
    </Section>
  );
}