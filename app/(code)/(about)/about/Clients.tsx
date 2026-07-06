import Section from "@/ui/Section";

const logoGrid = ["Netflix India", "Red Bull", "Cred", "Zomato Entertainment", "T-Series Labs", "Nike Running"];

export default function Clients() {
  return (
    <Section subHeading="Partners" heading="The Believers" hindiHeading="जिनके साथ सीन बनाया।">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {logoGrid.map((logo, idx) => (
          <div key={idx} className="h-24 rounded-2xl border border-border bg-surface/10 flex items-center justify-center p-4 hover:bg-surface/30 transition-all duration-300">
            <span className="font-english-heading text-sm tracking-wider text-foreground-muted text-center uppercase">{logo}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}