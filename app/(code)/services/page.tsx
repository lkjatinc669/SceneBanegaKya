"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Clapperboard,
  Sparkles,
  Layers3,
  PenTool,
  MonitorPlay,
} from "lucide-react";
import ContactCTA from "@/components/common/ContactCTA";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "High-impact visual design crafted to elevate your brand across digital and print platforms.",
    features: [
      "Social Media Creatives",
      "Marketing Materials",
      "Brand Assets",
      "Presentation Design",
    ],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "Cinematic editing that transforms raw footage into compelling visual stories.",
    features: [
      "YouTube Videos",
      "Commercial Ads",
      "Corporate Videos",
      "Content Repurposing",
    ],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic animations that bring ideas, brands, and products to life.",
    features: [
      "2D Motion Design",
      "Animated Explainers",
      "Logo Animation",
      "Visual Effects",
    ],
  },
  {
    icon: Layers3,
    title: "Brand Identity",
    description:
      "A cohesive visual system that helps your brand become recognizable and memorable.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Strategy",
      "Brand Refresh",
    ],
  },
  {
    icon: PenTool,
    title: "Creative Content",
    description:
      "Design-first content tailored for modern marketing and audience engagement.",
    features: [
      "Social Campaigns",
      "Creative Direction",
      "Content Design",
      "Visual Storytelling",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Digital Production",
    description:
      "End-to-end creative production for campaigns, launches, and brand experiences.",
    features: [
      "Campaign Assets",
      "Launch Content",
      "Digital Experiences",
      "Production Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-sm uppercase tracking-[0.3em] text-[#E07A4F]"
            >
              Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold leading-[0.95] tracking-[-0.06em] md:text-8xl lg:text-[7rem]"
            >
              Creative
              <br />
              Solutions For
              <br />
              Modern Brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-10 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]"
            >
              We combine strategy, design, motion, and storytelling to
              create visual experiences that capture attention and drive
              meaningful results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SERVICES GRID */}
      {/* ================================= */}

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
              What We Offer
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/3
                  p-8
                  transition-all
                  duration-300
                  hover:border-[#E07A4F]/20
                "
              >
                <service.icon
                  size={32}
                  className="text-[#E07A4F]"
                />

                <h3 className="mt-8 text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#B9B4AD]">
                  {service.description}
                </p>

                <div className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E07A4F]" />

                      <span className="text-[#B9B4AD]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* PROCESS */}
      {/* ================================= */}

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
              Our Process
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              From Idea To Execution
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discovery",
                text: "Understanding your brand, goals, audience, and creative requirements.",
              },
              {
                number: "02",
                title: "Strategy",
                text: "Developing a creative direction aligned with your objectives.",
              },
              {
                number: "03",
                title: "Production",
                text: "Designing, editing, animating, and crafting premium visual assets.",
              },
              {
                number: "04",
                title: "Delivery",
                text: "Refinement, optimization, and final delivery ready for launch.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/2
                  p-8
                "
              >
                <span className="text-5xl font-bold text-[#E07A4F]/30">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#B9B4AD]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* WHY CHOOSE US */}
      {/* ================================= */}

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                Why Us
              </p>

              <h2 className="text-5xl font-bold tracking-tight">
                Built Around Quality,
                <br />
                Speed & Creativity.
              </h2>
            </div>

            <div className="space-y-10">
              {[
                "Premium Visual Standards",
                "Fast Turnaround Times",
                "Strategic Creative Thinking",
                "Transparent Communication",
                "Scalable Creative Support",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-white/10 pb-8"
                >
                  <h3 className="text-2xl font-medium">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        topHeader="Ideas Deserve Exceptional Execution"
        lineOne="Let's Turn"
        lineTwo="Your Vision Into"
        lineThree="Results?"
        description="Whether you need content that drives engagement, strengthens your brand, or tells a compelling story, our creative process is built to transform ideas into measurable impact."
      />
    </main>
  );
}