"use client";

export default function InstagramGallery() {
  const instaFrames = [
    "https://images.unsplash.com/photo-1542204172-e7052809a86e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="border-t border-border/40 pt-16 mt-16">
      <div className="mb-8">
        <span className="font-mono text-[10px] text-primary tracking-widest block mb-2">// SOCIAL_MIRROR</span>
        <h3 className="font-english-heading text-2xl text-foreground">Operational Studio Stills</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {instaFrames.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-2xl overflow-hidden border border-border/60 relative group block bg-surface/20"
          >
            <img src={src} alt="Studio Life Capture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-english-heading text-[10px] uppercase tracking-widest text-primary-foreground bg-background px-3 py-1.5 rounded-full border border-border">
                View On Instagram ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}