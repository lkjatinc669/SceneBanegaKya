import TeamHero from "./TeamHero";
import FounderSection from "./FounderSection";
import TeamGrid from "./TeamGrid";
import OurCulture from "./OurCulture";
import JoinTeam from "./JoinTeam";
import CTASection from "./CTASection";

export default function TeamPage() {
  return (
    <main className="relative bg-background min-h-screen text-foreground antialiased select-none">
      <TeamHero />
      <FounderSection />
      <TeamGrid />
      <OurCulture />
      <JoinTeam />
      <CTASection />
    </main>
  );
}