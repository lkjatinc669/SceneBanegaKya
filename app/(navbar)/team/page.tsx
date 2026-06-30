"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaLinkedinIn,
    FaDribbble,
} from "react-icons/fa6";
import ContactCTA from "@/components/common/ContactCTA";

const teamMembers = [
  {
    name: "Jatin Gohil",
    role: "Cinematographer, Scriptwriter & Colorist",
    image: "/team/jatin-gohil.jpg",
    description:
      "Brings stories to life through cinematic visuals, purposeful direction, and precision color grading. Passionate about crafting emotionally engaging films that blend aesthetics with impactful storytelling."
  },
  {
    name: "Umesh Tank",
    role: "Founder, Creative Director & Lead Video Editor",
    image: "/team/umesh-tank.png",
    description:
      "Drives the creative vision behind every project, combining strategy, storytelling, and premium post-production. Dedicated to building powerful brand identities through cinematic editing and innovative visual experiences."
  },
  {
    name: "Vivek Chauhan",
    role: "Reel Editor & Short-Form Content Specialist",
    image: "/team/vivek-chauhan.jpg",
    description:
      "Creates high-performing short-form content designed to capture attention within seconds. Expert in fast-paced editing, engaging hooks, and platform-focused storytelling that maximizes audience retention."
  },
  {
    name: "Darshil Parmar",
    role: "Video Editor & Short-Form Content Specialist",
    image: "/team/darshil-parmar.jpg",
    description:
      "Transforms raw footage into polished, dynamic edits with seamless transitions, cinematic pacing, and compelling visual flow. Focused on delivering content that keeps viewers engaged from start to finish."
  },
  {
    name: "Tarun Kasodariya",
    role: "Graphic Designer & Brand Identity Specialist",
    image: "/team/tarun-kasodariya.jpg",
    description:
      "Designs modern visual identities that communicate clarity, creativity, and purpose. Specializes in branding, social media creatives, and premium marketing designs that elevate brands with clean, impactful aesthetics."
  }
];

export default function TeamPage() {
    return (
        <main>
            {/* HERO */}

            <section className="relative overflow-hidden border-b border-white/5">
                <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl"
                    >
                        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#E07A4F]">
                            Team
                        </p>

                        <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[7rem]">
                            The People
                            <br />
                            Behind The
                            <br />
                            Creativity.
                        </h1>

                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]">
                            A small team of passionate creatives dedicated to building
                            exceptional visual experiences through design, motion, and
                            storytelling.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* TEAM */}

            <section className="py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.15,
                                }}
                                className="
                  group
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/2
                "
                            >
                                {/* IMAGE */}

                                <div className="relative aspect-4/5 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                                </div>

                                {/* CONTENT */}

                                <div className="p-8">
                                    <p className="text-sm uppercase tracking-[0.2em] text-[#E07A4F]">
                                        {member.role}
                                    </p>

                                    <h2 className="mt-3 text-3xl font-semibold">
                                        {member.name}
                                    </h2>

                                    <p className="mt-4 leading-relaxed text-[#B9B4AD]">
                                        {member.description}
                                    </p>

                                    {/* SOCIALS */}

                                    <div className="mt-8 flex gap-3">
                                        <a
                                            href="#"
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-[#B9B4AD] transition-all duration-300 hover:border-[#E07A4F]/30 hover:text-[#F5F1EB]">
                                            <FaInstagram />
                                        </a>

                                        <a
                                            href="#"
                                            className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/3
                        text-[#B9B4AD]
                        transition-all
                        duration-300
                        hover:border-[#E07A4F]/30
                        hover:text-[#F5F1EB]
                      "
                                        >
                                            <FaLinkedinIn />
                                        </a>

                                        <a
                                            href="#"
                                            className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/3
                        text-[#B9B4AD]
                        transition-all
                        duration-300
                        hover:border-[#E07A4F]/30
                        hover:text-[#F5F1EB]
                      "
                                        >
                                            <FaDribbble />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUES */}

            <section className="border-y border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
                    <div className="grid gap-12 md:grid-cols-3">
                        <div>
                            <h3 className="text-3xl font-semibold">
                                Creativity
                            </h3>

                            <p className="mt-4 text-[#B9B4AD]">
                                Every project begins with ideas that challenge the
                                ordinary.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold">
                                Excellence
                            </h3>

                            <p className="mt-4 text-[#B9B4AD]">
                                Attention to detail drives every frame, pixel, and
                                interaction.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold">
                                Trust
                            </h3>

                            <p className="mt-4 text-[#B9B4AD]">
                                Strong partnerships create stronger creative outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA
                topHeader="Meet The Minds Behind The Magic"
                lineOne="Let's Create"
                lineTwo="Something"
                lineThree="Together?"
                description="Our team combines storytelling, cinematography, editing, and creative strategy to bring ambitious ideas to life. We'd love to become part of your next project."
            />
        </main>
    );
}