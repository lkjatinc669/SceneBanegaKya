"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Clapperboard,
  MonitorPlay,
  PenTool,
} from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import StatsComponent from "@/components/StatsComponent";
import FeaturedWork from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import ContactCTA from "@/components/common/ContactCTA";

export default function HomePage() {
  const loadingComplete = useLoading();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F1EB] overflow-hidden bg-dot-pattern">
      <div className="noise" />
      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-10 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[120px]"
          />
          <div className="absolute left-10 top-40 h-64 w-64 rounded-full border border-white/3 animate-[spin_20s_linear_infinite]" />
          <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full border border-white/3 animate-[spin_30s_linear_infinite_reverse]" />
        </div>

        <div className="relative mx-auto max-w-7xl pt-10 px-6 lg:px-10 z-10 w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={loadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 glass-card px-5 py-2.5 text-sm text-[#B9B4AD] shadow-[0_0_15px_rgba(224,122,79,0.15)] glow-hover"
            >
              <Sparkles size={16} className="text-[#E07A4F] animate-pulse" />
              <span className="tracking-wide">Premium Graphics & Video Production Agency</span>
            </motion.div>

            <div className="mt-10 overflow-hidden">
              {[
                "We Create",
                "Visual Stories",
                "That Convert."
              ].map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={loadingComplete ? { y: "0%" } : { y: "110%" }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-6xl font-extrabold leading-none tracking-[-0.04em] md:text-8xl lg:text-[8.5rem] text-gradient"
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 max-w-2xl text-xl leading-relaxed text-[#B9B4AD] font-light"
            >
              From cinematic video editing to premium graphic design,
              we help brands capture attention, build trust, and create
              unforgettable digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-14 flex flex-wrap gap-5"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#E07A4F] px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(224,122,79,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-linear-to-r from-[#E07A4F] to-[#ec8a61] opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 glass-card px-8 py-4 font-medium text-[#F5F1EB] transition-all hover:bg-white/5 hover:border-white/20 glow-hover"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#E07A4F]/20">
                  <Play size={14} className="text-[#F5F1EB] group-hover:text-[#E07A4F]" fill="currentColor" />
                </div>
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 md:grid-cols-3"
            style={{ y }}
          >
            {[1, 2, 3].map((item, i) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-4xl border border-white/5 bg-white/2 p-2 transition-all duration-500 hover:border-[#E07A4F]/30 hover:bg-white/4 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(224,122,79,0.1)] ${i === 1 ? 'md:-translate-y-12 md:hover:-translate-y-14' : ''}`}
              >
                <div className="aspect-4/5 md:aspect-3/4 overflow-hidden rounded-3xl bg-[#161616] relative">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-medium text-[#E07A4F] uppercase tracking-wider mb-2">Project {item}</p>
                    <h4 className="text-xl font-bold text-white">Cinematic Visuals</h4>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800")' }} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICES */}
      {/* ========================================= */}

      <Services />

      {/* ========================================= */}
      {/* FEATURED WORK */}
      {/* ========================================= */}

      <FeaturedWork />

      <StatsComponent />

      <ContactCTA
        topHeader="Where Great Ideas Become Reality"
        lineOne="Ready To Create"
        lineTwo="Something"
        lineThree="Unforgettable?"
        description="From concept to final delivery, we craft cinematic visuals that help brands, creators, and businesses stand out in a crowded digital world. Whether it's a commercial, reel, music video, brand film, or social content, we're ready to bring your vision to life."
      />





    </main>
  );
}