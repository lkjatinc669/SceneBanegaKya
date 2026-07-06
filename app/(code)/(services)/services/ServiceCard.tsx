"use client";

interface ServiceCardProps {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  onClick: () => void;
  isActive: boolean;
}

export default function ServiceCard({ id, title, desc, tags, onClick, isActive }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden ${
        isActive 
          ? "border-primary bg-surface/40 shadow-[0_0_50px_rgba(210,116,52,0.15)]" 
          : "border-border/60 bg-surface/10 hover:border-border hover:bg-surface/20"
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={`font-english-heading text-xs tracking-widest ${isActive ? "text-primary" : "text-primary/40"}`}>
            GUILD {id}
          </span>
          {isActive && (
            <span className="h-2 w-2 rounded-full bg-primary animate-ping absolute right-6 top-6" />
          )}
        </div>
        <h3 className={`font-english-heading text-2xl mb-4 transition-colors ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {title}
        </h3>
        <p className="font-english-body text-sm text-foreground-muted leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
        {tags.map((tag, idx) => (
          <span key={idx} className="font-english-body text-[10px] uppercase tracking-wider bg-background border border-border/40 px-2.5 py-1 rounded-full text-foreground-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}