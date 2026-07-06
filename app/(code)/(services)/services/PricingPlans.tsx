import Section from "@/ui/Section";
import Button from "@/ui/Button";

const plans = [
  { title: "Bespoke Content Creation", description: "Perfect for single high-tier visual assets, podcasts, music videos, or creative photography runs.", deliverables: ["Bespoke Single Concept Focus", "Dedicated Camera Team + Sound Gear", "Bespoke LUT Color Layout", "Social Format Cuts Integrated"] },
  { title: "Cinematic Commercial Engine", description: "Engineered for high-end TVCs, brand shoots, premium wedding films, or deep digital design builds.", deliverables: ["Complete Multi-Tier Concept Creation", "Hollywood-Grade ARRI/RED Deployment", "Advanced Multi-Cam Mixing Audio Lab", "Full Web Integration Assets Included"] },
];

export default function PricingPlans() {
  return (
    <Section subHeading="Investment" heading="Production Packages" hindiHeading="बजट स्पष्टता, श्रेष्ठ मूल्य।">
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="p-8 rounded-4xl border border-border bg-surface/10 flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <h3 className="font-english-heading text-2xl text-primary">{plan.title}</h3>
              <p className="font-english-body text-sm text-foreground-muted leading-relaxed">{plan.description}</p>
              
              <ul className="pt-6 space-y-3 border-t border-border/40">
                {plan.deliverables.map((d, idx) => (
                  <li key={idx} className="font-english-body text-xs text-foreground/80 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact" variant={index === 1 ? "primary" : "outline"} className="w-full">
              Request Production Quote
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}