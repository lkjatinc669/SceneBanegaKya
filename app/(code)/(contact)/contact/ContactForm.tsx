"use client";

import { useState } from "react";

interface ServiceOption {
  id: string;
  label: string;
  category: "video" | "design" | "photo";
}

const PRODUCTION_SERVICES: ServiceOption[] = [
  { id: "comm-ad", label: "Commercial Ads & Brand Films", category: "video" },
  { id: "yt-prod", label: "YouTube Video Production", category: "video" },
  { id: "shorts-reels", label: "Reels / Shorts / Spotlight", category: "video" },
  { id: "podcast", label: "Podcast & Interview Production", category: "video" },
  { id: "brand-id", label: "Brand Identity & Logo Design", category: "design" },
  { id: "ui-ux", label: "UI/UX & Website Design", category: "design" },
  { id: "thumbnails", label: "Thumbnail & YouTube Design", category: "design" },
  { id: "social-graphics", label: "Social Media Graphics", category: "design" },
  { id: "creative-photo", label: "Creative Photography / Shoot", category: "photo" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API transmission pipeline
    await new Promise((resolve) => setTimeout(resolve, 1200));
    alert("Manifest transmitted successfully.");
    setIsSubmitting(false);
  };

  return (
    <section className="w-full bg-background text-foreground py-16 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto border border-border/60 bg-surface/5 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        
        {/* Subtle Tech Grid Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-4 h-px bg-primary/40" />
        <div className="absolute top-0 left-0 w-px h-4 bg-primary/40" />

        {/* Header Block */}
        <div className="mb-10 border-b border-border/20 pb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-2">
            [ SECURE TRANSMISSION CHANNEL ]
          </span>
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            Initialize Project Manifest
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            Select the components required for your deployment pipeline and sync your operational details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* STEP 1: Service Matrix Selection */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-4">
              01 // SELECT ASSET BLOCKS REQUIRED
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {PRODUCTION_SERVICES.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`text-left p-3 rounded-xl border text-xs font-bold transition-all duration-300 uppercase flex items-center justify-between tracking-tight ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(210,116,52,0.1)]"
                        : "border-border/40 bg-background/50 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <span>{service.label}</span>
                    <span className={`w-2 h-2 rounded-full ml-2 border ${
                      isSelected ? "bg-primary border-primary animate-pulse" : "border-border/80 bg-transparent"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Client Credentials Inputs */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-4">
              02 // IDENTIFICATION & CREDENTIALS
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="OPERATOR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors uppercase tracking-wide placeholder:text-muted-foreground/40 placeholder:font-mono text-foreground font-medium"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="SECURE EMAIL NODE"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors uppercase tracking-wide placeholder:text-muted-foreground/40 placeholder:font-mono text-foreground font-medium"
                />
              </div>
              <div className="md:col-span-2 relative">
                <input
                  type="text"
                  placeholder="COMPANY / BRAND ENTITY (OPTIONAL)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-background/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors uppercase tracking-wide placeholder:text-muted-foreground/40 placeholder:font-mono text-foreground font-medium"
                />
              </div>
            </div>
          </div>

          {/* STEP 3: Operational Brief */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-4">
              03 // OPERATIONAL BRIEF & SCOPE
            </label>
            <textarea
              rows={4}
              required
              placeholder="DESCRIBE THE CREATIVE DIRECTION, TARGET TIMELINES, AND EXPECTED DELIVERABLES MATRIX..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-background/40 border border-border/60 rounded-xl p-4 text-sm focus:outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40 placeholder:font-mono text-foreground font-medium resize-none"
            />
          </div>

          {/* Action Trigger Block */}
          <div className="pt-4 border-t border-border/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-[10px] font-mono text-muted-foreground leading-relaxed">
              * BY TRANSMITTING THIS FORM, YOU STAGE AN OPERATIONAL BUILD TICKET WITH OUR INTEGRATED VIDEO, DESIGN, AND CAPTURE DEPARTMENTS.
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-foreground text-background font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shrink-0 shadow-lg relative overflow-hidden group disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MANIFEST"}
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}