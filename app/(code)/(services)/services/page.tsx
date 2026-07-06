import ServicesHero from "./ServicesHero";
import ServiceGrid from "./ServiceGrid";
import WhyChooseService from "./WhyChooseUs";
import Workflow from "./Workflow";
import PricingPlans from "./PricingPlans";
import FAQ from "./FAQPreview";
import CTASection from "./CTASection";

export default function ServicesPage() {
  return (
    <main className="relative bg-background min-h-screen text-foreground antialiased select-none">
      <ServicesHero />
      <ServiceGrid />
      <WhyChooseService />
      <Workflow />
      <PricingPlans />
      <FAQ />
      <CTASection />
    </main>
  );
}