"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    FaInstagram,
    FaLinkedinIn,
    FaDribbble,
    FaXTwitter,
} from "react-icons/fa6";
import { teamMembers } from '@/app/DataStore'

type TeamMemberKey = keyof typeof teamMembers;

export default async function TeamMemberPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const member = teamMembers[id as TeamMemberKey];

    if (!member) {
        notFound();
    }
    return (
        <main className="bg-[#0D0D0D] text-[#F5F1EB]">
            {/* HERO */}

            <section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
                    <Link
                        href="/team"
                        className="mb-10 inline-flex text-sm text-[#B9B4AD] transition hover:text-[#F5F1EB]"
                    >
                        ← Back to Team
                    </Link>

                    <div className="grid gap-16 lg:grid-cols-[450px_1fr]">
                        {/* IMAGE */}

                        <div>
                            <div className="relative aspect-4/5 overflow-hidden rounded-[36px] border border-white/10">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* INFO */}

                        <div className="flex flex-col justify-center">
                            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                                {member.role}
                            </p>

                            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                                {member.name}
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]">
                                {member.bio}
                            </p>

                            {/* STATS */}

                            <div className="mt-12 grid grid-cols-3 gap-6">
                                <div>
                                    <p className="text-4xl font-bold">
                                        {member.experience}
                                    </p>

                                    <p className="mt-2 text-sm text-[#B9B4AD]">
                                        Experience
                                    </p>
                                </div>

                                <div>
                                    <p className="text-4xl font-bold">
                                        {member.projects}
                                    </p>

                                    <p className="mt-2 text-sm text-[#B9B4AD]">
                                        Projects
                                    </p>
                                </div>

                                <div>
                                    <p className="text-4xl font-bold">
                                        {member.speciality}
                                    </p>

                                    <p className="mt-2 text-sm text-[#B9B4AD]">
                                        Specialty
                                    </p>
                                </div>
                            </div>

                            {/* SOCIALS */}

                            <div className="mt-12 flex gap-4">
                                <a
                                    href={member.socials.instagram}
                                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/3
                    transition
                    hover:border-[#E07A4F]/30
                  "
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href={member.socials.linkedin}
                                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/3
                    transition
                    hover:border-[#E07A4F]/30
                  "
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href={member.socials.twitter}
                                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/3
                    transition
                    hover:border-[#E07A4F]/30
                  "
                                >
                                    <FaXTwitter />
                                </a>

                                <a
                                    href={member.socials.dribbble}
                                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/3
                    transition
                    hover:border-[#E07A4F]/30
                  "
                                >
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT MEMBER */}

            <section className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <div className="max-w-4xl">
                        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                            About
                        </p>

                        <h2 className="text-5xl font-bold tracking-tight">
                            Creative Philosophy
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-[#B9B4AD]">
                            Great creative work happens when strategy meets execution.
                            Every project should not only look exceptional but also
                            communicate clearly, inspire confidence, and create lasting
                            impact. Our process focuses on understanding audiences,
                            refining ideas, and delivering experiences that resonate.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-[#B9B4AD]">
                            Whether working on branding, motion graphics, or video
                            production, every detail is carefully crafted to ensure the
                            final result aligns perfectly with the client's goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT HIGHLIGHTS */}

            <section className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <div className="mb-16">
                        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                            Highlights
                        </p>

                        <h2 className="text-5xl font-bold tracking-tight">
                            Selected Work
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#161616]
                "
                            >
                                <div className="aspect-4/3 bg-[#1A1A1C]" />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">
                                        Project {item}
                                    </h3>

                                    <p className="mt-2 text-[#B9B4AD]">
                                        Creative direction, visual design and execution.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <div className="rounded-[40px] border border-white/10 bg-white/3 p-12 md:p-20">
                        <h2 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                            Let's Create
                            Something Extraordinary.
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg text-[#B9B4AD]">
                            Have a project in mind? Let's collaborate and build
                            something remarkable together.
                        </p>

                        <button
                            className="
                mt-10
                rounded-full
                bg-[#E07A4F]
                px-7
                py-4
                font-medium
                text-white
              "
                        >
                            Start A Project
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}