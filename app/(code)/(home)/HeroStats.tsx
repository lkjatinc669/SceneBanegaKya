"use client";

const metrics = [
  { value: "150+", label: "Commercial Films" },
  { value: "45+", label: "Global Brands Served" },
  { value: "12", label: "International Awards" },
  { value: "24 FPS", label: "Pure Cinematic Dedication" },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/40 pt-8 sm:grid-cols-4 max-w-2xl">
      {metrics.map((stat, idx) => (
        <div key={idx} className="space-y-1">
          <h4 className="font-english-heading text-2xl md:text-3xl text-foreground tracking-tight">
            {stat.value}
          </h4>
          <p className="font-english-body text-[11px] uppercase tracking-widest text-foreground-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}