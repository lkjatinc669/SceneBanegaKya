"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import StatsComponent from "@/components/StatsComponent";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import ContactCTA from "@/components/common/ContactCTA";


export default function AboutPage() {
  return (
    <main>

      <Hero />

      <OurStory />

      <StatsComponent />

      <OurValues />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-20">
            <p className="mb-4 text-sm tracking-[0.25em] text-[#E07A4F] uppercase">
              Process
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Discover",
              "Strategize",
              "Create",
              "Deliver",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/2 p-8"
              >
                <div className="mb-8 text-5xl font-bold text-[#E07A4F]/40">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        topHeader="The Best Stories Start With People"
        lineOne="Let's Build"
        lineTwo="Something"
        lineThree="Meaningful?"
        description="Behind every project is a relationship built on trust, collaboration, and creativity. Share your vision with us, and together we'll create work that resonates long after the screen fades to black."
      />
    </main>
  );
}