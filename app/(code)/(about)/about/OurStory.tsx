import Section from "@/ui/Section";

export default function OurStory() {
  return (
    <Section subHeading="The Genesis" heading="Born In The Chaos of Frames" hindiHeading="शुरुआत एक विचार से।">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7 space-y-6 font-english-body text-base md:text-lg text-foreground-muted leading-relaxed">
          <p>
            It started with a simple question muttered on a crowded commercial set in Mumbai: <span className="text-foreground italic">"Scene banega kya?"</span> (Will it become a proper cinematic scene?). We realized the industry was filled with corporate assembly lines making boring content, lacking true soul.
          </p>
          <p>
            We broke away from traditional norms to construct an uncompromised ecosystem where high-end lighting, custom color science, and profound human storytelling are standard requirements—not expensive premium upgrades.
          </p>
        </div>
        <div className="lg:col-span-5 bg-surface/30 border border-border rounded-3xl p-8 flex flex-col justify-center min-h-65 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <h4 className="font-english-heading text-3xl text-primary mb-2">2018</h4>
          <p className="font-english-body text-sm text-foreground-muted">
            The year we stopped capturing raw documentation and started filming timeless modern folklore.
          </p>
        </div>
      </div>
    </Section>
  );
}