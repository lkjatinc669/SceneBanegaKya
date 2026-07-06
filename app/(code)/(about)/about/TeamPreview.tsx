import Image from "next/image";
import Section from "@/ui/Section";

const leaders = [
  {
    name: "Crew 1",
    role: "Head of Cinematography",
    dept: "Camera Guild",
    img: "/team/crew/Crew-1.png",
  },
  {
    name: "Crew 2",
    role: "Principal Colorist",
    dept: "Post Production",
    img: "/team/crew/Crew-2.png",
  },
  {
    name: "Crew 3",
    role: "Principal Colorist",
    dept: "Post Production",
    img: "/team/crew/Crew-3.png",
  },
];

export default function TeamPreview() {
  return (
    <Section 
      subHeading="The Crew" 
      heading="The Minds Behind The Glass" 
      hindiHeading="परदे के पीछे के कलाकार।"
    >
      {/* 
        Grid scales fluidly. 
        Max 3 cols on desktop, but centers elements perfectly if there are only 2 items 
      */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
        {leaders.map((person, idx) => (
          <div 
            key={idx} 
            className="p-5 rounded-2xl border border-border/50 bg-surface/10 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Technical Aspect-4/5 Lens Box */}
              <div className="aspect-[4/5] w-full rounded-xl bg-background border border-border/40 mb-5 overflow-hidden relative group-hover:border-primary/20 transition-colors duration-500">
                <Image
                  src={person.img}
                  alt={`${person.name} — ${person.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                  priority={idx < 2}
                />
                
                {/* Micro-tech camera layout overlays */}
                <div className="absolute inset-3 border border-white/5 rounded-lg pointer-events-none z-10" />
                <div className="absolute top-2 left-3 font-mono text-[8px] tracking-widest text-white/30 pointer-events-none z-10">
                  REC 0{idx + 1}
                </div>
                <div className="absolute bottom-2 right-3 font-mono text-[8px] tracking-widest text-primary/40 pointer-events-none z-10">
                  RAW // 24FPS
                </div>
              </div>

              {/* Department Block */}
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary block mb-1">
                {person.dept}
              </span>
              
              {/* Name and Designation */}
              <h4 className="font-english-heading text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                {person.name}
              </h4>
              <p className="font-english-body text-xs text-muted-foreground/80 mt-0.5">
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}