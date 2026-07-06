import Section from "@/ui/Section";

export default function FounderMessage() {
  return (
    <Section className="bg-surface/10">
      <div className="max-w-4xl mx-auto border border-border bg-background p-8 md:p-16 rounded-[2.5rem] relative">
        <div className="absolute top-0 right-10 text-primary/10 font-english-heading text-[8rem] select-none pointer-events-none leading-none">“</div>
        <span className="font-english-body text-xs text-primary tracking-widest uppercase block mb-4">A MESSAGE FROM THE DIRECTORS</span>
        <blockquote className="font-english-body text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
          "When we started, people told us brands only care about quick timelines and cheap metrics. We bet everything on the opposite idea—that deep down, every brand wants to build something monumental. Don't just settle for standard content; make sure your audience looks at it and says, <span className="text-primary not-italic">Scene Ban Gaya!</span>"
        </blockquote>
        <div>
          <h4 className="font-english-heading text-lg text-foreground">The Director's Guild</h4>
          <p className="font-english-body text-xs text-foreground-muted">Founding Collective, Scene Banega Kya</p>
        </div>
      </div>
    </Section>
  );
}