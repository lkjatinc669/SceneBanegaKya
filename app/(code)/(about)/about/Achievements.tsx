import Section from "@/ui/Section";

const indicators = [
  { count: "500M+", title: "Cumulative Impressions" },
  { count: "4.9/5", title: "Client Retention Score" },
  { count: "0", title: "Missed Deadlines" },
];

export default function Achievements() {
  return (
    <Section>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 text-center">
        {indicators.map((item, index) => (
          <div key={index} className="p-8 rounded-3xl bg-surface/20 border border-border/40">
            <h3 className="font-english-heading text-4xl md:text-5xl text-primary mb-2 tracking-tighter">{item.count}</h3>
            <p className="font-english-body text-xs uppercase tracking-widest text-foreground-muted">{item.title}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}