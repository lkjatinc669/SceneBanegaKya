import Section from "@/ui/Section";
import TeamCard from "./TeamCard";

const leadershipCrew = [
  {
    name: "Umesh Tank",
    role: "Head of Cinematography",
    dept: "Camera Guild",
    creed: "If the light leak is predictable, it isn't cinematic art.",
    // Premium Cinema Rig Operator Asset
    img: "/team/members/umesh-tank.jpg",
  },
  {
    name: "Jatin Gohil",
    role: "Principal Colorist",
    dept: "Post Production",
    creed: "Color spaces dictate memory retention pathways in the brain.",
    // Dark Grading suite / monitor array asset
    img: "/team/members/jatin-gohil.jpg",
  },
];

const generalCrew = [
  {
    name: "Vivek Chauhan",
    role: "Gaffer & Technical Lead",
    dept: "Lighting Guild",
    creed: "Shadow shape structures tell 60% of the emotional plot.",
    // Dynamic Set Lighting / Arri Spotlights asset
    img: "/team/members/vivek-chauhan.jpg",
  },
  {
    name: "Darshil Parmar",
    role: "Chief Audio Engineer",
    dept: "Sound Lab",
    creed: "Audiences tolerate imperfect frames, but bad sound design breaks the spell.",
    // Soundboard / Mixing Console Deck asset
    img: "/team/members/darshil-parmar.jpg",
  },
  {
    name: "Tarun Kasodariya",
    role: "Lead Production Designer",
    dept: "Scenic Set Design",
    creed: "Every object resting behind the subject requires deliberate architectural truth.",
    // Blueprint Blueprint/Moodboard Layout asset
    img: "/team/members/tarun-kansodariya.jpg",
  },
];

export default function TeamGrid() {
  return (
    <>
      {/* 1. Leadership Block */}
      <Section subHeading="The Core" heading="The Creative Leads" hindiHeading="मुख्य संचालक।">
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          {leadershipCrew.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </Section>

      {/* 2. General Production Engine Block */}
      <Section subHeading="The Guild" heading="The Production Unit" hindiHeading="तकनीकी विशेषज्ञ।">
        {/* Adjusted column sizing tracking layout blocks cleanly across viewport sizes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {generalCrew.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </Section>
    </>
  );
}