import HomeHero from "./HomeHero";
import TrustedClients from "./TrustedClients";
import AboutPreview from "./AboutPreview";
import FeaturedServices from "./FeaturedServices";
import PortfolioPreview from "./PortfolioPreview";
import ProcessTimeline from "./ProcessTimeline";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import FAQPreview from "./FAQPreview";
import CTASection from "./CTASection";

export default function HomePage() {
  return (
    <div className="relative bg-background min-h-screen text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <HomeHero />
      <TrustedClients />
      <AboutPreview />
      <FeaturedServices />
      <PortfolioPreview />
      <ProcessTimeline />
      <WhyChooseUs />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </div>
  );
}