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
import HeroSection from "@/components/home/Hero";

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

      <HeroSection />

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