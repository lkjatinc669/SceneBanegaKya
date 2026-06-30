import React from "react";
import { Sparkles, ArrowRight, Play, Video, Layers, Paintbrush, Clapperboard, Monitor, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#0f0f10] text-[#f8f6f2] min-h-screen font-sans antialiased selection:bg-[#E07A4F] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Ambient Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[120px] animate-pulse [animation-duration:8s]" />
          <div className="absolute left-10 top-40 h-64 w-64 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
          <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />

          {/* Cinematic SVG Doodle 1: Spotlight (Top Right) */}
          <div className="absolute -right-16 top-16 md:right-12 md:top-24 w-64 h-64 opacity-20 lg:opacity-35 mix-blend-screen animate-bounce [animation-duration:12s]">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#E07A4F]" strokeWidth="1.5">
              <rect x="50" y="40" width="50" height="60" rx="8" />
              <path d="M40 50 H50 M40 90 H50" />
              <path d="M75 100 V130 M55 130 H95" />
              <path d="M75 70 L-20 200 H120 Z" fill="url(#hero-spotlight)" stroke="none" className="animate-pulse" />
              <defs>
                <linearGradient id="hero-spotlight" x1="75" y1="70" x2="40" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E07A4F" stopOpacity="0.25"/>
                  <stop offset="1" stopColor="#E07A4F" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cinematic SVG Doodle 2: Vintage Camera (Bottom Left) */}
          <div className="absolute -left-20 bottom-10 md:left-8 md:bottom-16 w-72 h-72 opacity-15 lg:opacity-25 animate-bounce [animation-duration:16s]">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#b5b0a8]" strokeWidth="1.5">
              <circle cx="70" cy="50" r="24" /><circle cx="70" cy="50" r="6" />
              <circle cx="120" cy="55" r="20" /><circle cx="120" cy="55" r="5" />
              <rect x="50" y="80" width="85" height="55" rx="6" />
              <path d="M135 95 L165 85 V130 L135 120 Z" fill="rgba(185,180,173,0.05)" />
              <path d="M92.5 135 L75 185 M92.5 135 L110 185" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md px-5 py-2.5 text-sm text-[#b5b0a8] shadow-[0_0_15px_rgba(224,122,79,0.15)] hover:border-[#E07A4F]/30 transition-all">
              <Sparkles size={16} className="text-[#E07A4F] animate-pulse" />
              <span className="tracking-wide font-medium">Premium Graphics & Video Production Agency</span>
            </div>

            <h1 className="text-5xl leading-[1.15] md:leading-[1.2] font-extrabold tracking-[0.01em] md:text-8xl lg:text-[8.5rem] mt-6 text-[#f8f6f2]">
              <span>We Create</span><br/>
              <span>Visual Stories</span><br/>
              <span>That {" "}</span><span className="text-[#E07A4F]">Convert</span>
            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[#b5b0a8] font-light">
              From cinematic video editing to premium graphic design, we help brands capture attention, build trust, and create unforgettable digital experiences.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">
              <a href="#contact" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#E07A4F] px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(224,122,79,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E07A4F] to-[#ec8a61] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>

              <a href="#services" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md px-8 py-4 font-medium text-[#f8f6f2] transition-all hover:bg-white/5 hover:border-white/20">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#E07A4F]/20">
                  <Play size={14} className="text-[#f8f6f2] group-hover:text-[#E07A4F] transition-colors" fill="currentColor" />
                </div>
                Explore Production Space
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOGO INFINITE SHOWCASE ================= */}
      <section className="py-12 border-y border-[#353539] bg-[#1a1a1c]/40 backdrop-blur-sm overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-6">
          <p className="text-xs uppercase tracking-widest text-[#b5b0a8]/60 font-semibold text-center md:text-left">
            Trusted by dynamic digital ecosystems & modern crews
          </p>
        </div>
        
        {/* Infinite Row Loop using standard CSS */}
        <div className="flex gap-16 items-center whitespace-nowrap w-max animate-[spin_80s_linear_infinite] [animation-name:marquee]">
          <div className="flex gap-20 items-center text-2xl font-bold tracking-wider text-[#b5b0a8]/40 uppercase">
            <span>⚡️ NETFLIX SQUAD</span><span>🎬 SONY PICTURES</span><span>💎 PARAMOUNT CREW</span><span>🔥 WARNER INK</span><span>🔮 MARVEL STUDIOS</span>
          </div>
          <div className="flex gap-20 items-center text-2xl font-bold tracking-wider text-[#b5b0a8]/40 uppercase select-none" aria-hidden="true">
            <span>⚡️ NETFLIX SQUAD</span><span>🎬 SONY PICTURES</span><span>💎 PARAMOUNT CREW</span><span>🔥 WARNER INK</span><span>🔮 MARVEL STUDIOS</span>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
        `}} />
      </section>

      {/* ================= SERVICES/EXPERTISE GRID ================= */}
      <section id="services" className="py-24 relative px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#E07A4F] text-sm font-semibold tracking-widest uppercase block mb-3">Our Core Modules</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">High-Octane Creative Vertical Production</h2>
          </div>
          <p className="max-w-md text-[#b5b0a8] font-light text-lg">
            We operate at the convergence point of strategic retention engineering and cinematic digital execution.
          </p>
        </div>

        {/* 3x3 Flex/Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-3xl bg-[#1a1a1c] border border-[#353539] hover:border-[#E07A4F]/40 transition-all duration-300 flex flex-col justify-between min-h-[280px]">
            <div className="h-12 w-12 rounded-2xl bg-[#252528] flex items-center justify-center text-[#E07A4F] group-hover:bg-[#E07A4F] group-hover:text-white transition-all duration-300">
              <Video size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E07A4F] transition-colors">Cinematic Video Editing</h3>
              <p className="text-[#b5b0a8] text-sm font-light leading-relaxed">High-retention pace lines, advanced sound design palettes, and visual effects built for modern streaming channels.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-3xl bg-[#1a1a1c] border border-[#353539] hover:border-[#E07A4F]/40 transition-all duration-300 flex flex-col justify-between min-h-[280px]">
            <div className="h-12 w-12 rounded-2xl bg-[#252528] flex items-center justify-center text-[#E07A4F] group-hover:bg-[#E07A4F] group-hover:text-white transition-all duration-300">
              <Paintbrush size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E07A4F] transition-colors">Premium Brand Graphics</h3>
              <p className="text-[#b5b0a8] text-sm font-light leading-relaxed">Identity kits, key marketing collaterals, and striking UI visual wrappers that command attention in saturated domains.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-3xl bg-[#1a1a1c] border border-[#353539] hover:border-[#E07A4F]/40 transition-all duration-300 flex flex-col justify-between min-h-[280px]">
            <div className="h-12 w-12 rounded-2xl bg-[#252528] flex items-center justify-center text-[#E07A4F] group-hover:bg-[#E07A4F] group-hover:text-white transition-all duration-300">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#E07A4F] transition-colors">Motion Poster Execution</h3>
              <p className="text-[#b5b0a8] text-sm font-light leading-relaxed">Transforming static artwork layouts into moving canvases embedded with variable depth, atmospheric smoke, and responsive micro-lights.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BRAND PUNCHLINE QUOTE SECTION ================= */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f0f10] via-[#1a1a1c] to-[#0f0f10] px-6">
        
        {/* Spotlighting Volumetric Simulation */}
        <div className="absolute right-[10%] top-0 w-[300px] h-[500px] bg-gradient-to-bl from-[#E07A4F]/10 to-transparent pointer-events-none blur-3xl transform -rotate-12" />
        <div className="absolute left-[5%] bottom-0 w-[400px] h-[300px] bg-gradient-to-tr from-white/[0.01] to-transparent pointer-events-none blur-2xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A4F]/10 text-[#E07A4F] mb-8 animate-bounce [animation-duration:4s]">
            <Clapperboard size={18} />
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black leading-tight tracking-tight text-[#f8f6f2] max-w-3xl mx-auto">
            “Brand ko <span className="text-[#E07A4F] underline decoration-wavy decoration-1 underline-offset-8">spotlight</span> chahiye? <br className="hidden md:inline"/> 
            Hamse pucho, <span className="text-[#ec8a61] tracking-wide bg-white/[0.03] px-4 py-1 rounded-2xl border border-white/5 shadow-inner">Scene Banega Kya?</span>”
          </h2>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#353539]" />
            <p className="text-sm font-bold tracking-widest uppercase text-[#b5b0a8] flex items-center gap-2">
              <Monitor size={14} className="text-[#E07A4F]" /> The Director's Cut Engine
            </p>
            <div className="h-[1px] w-12 bg-[#353539]" />
          </div>
        </div>
      </section>

    </div>
  );
}