"use client";

const clients = ["Netflix", "Amazon Prime", "T-Series", "Nike India", "Zomato", "Cred", "Red Bull"];

export default function TrustedClients() {
  return (
    <div className="bg-background py-10 border-y border-border/20">
      <div className="container mx-auto px-6 mb-4">
        <span className="font-english-body text-[10px] uppercase tracking-[0.4em] text-foreground-muted block text-center">
          Trusted By Industry Pioneers
        </span>
      </div>
      <div className="w-full overflow-hidden relative flex">
        <div className="flex gap-20 shrink-0 min-w-full justify-around animate-marquee whitespace-nowrap">
          {Array(2).fill(clients).flat().map((client, idx) => (
            <span key={idx} className="font-english-heading text-xl md:text-2xl text-foreground/30 hover:text-primary transition-colors duration-300 cursor-default uppercase tracking-widest">
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}