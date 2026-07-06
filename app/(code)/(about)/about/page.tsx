import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import MissionVision from "./MissionVision";
import JourneyTimeline from "./JourneyTimeline";
import CompanyValues from "./CompanyValues";
import FounderMessage from "./FounderMessage";
import Achievements from "./Achievements";
import Awards from "./Awards";
import Clients from "./Clients";
import TeamPreview from "./TeamPreview";
import CTASection from "./CTASection";

export default function AboutPage() {
  return (
    <main className="relative bg-background min-h-screen text-foreground antialiased select-none">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <JourneyTimeline />
      <CompanyValues />
      <FounderMessage />
      <Achievements />
      <Awards />
      <Clients />
      <TeamPreview />
      <CTASection />
    </main>
  );
}