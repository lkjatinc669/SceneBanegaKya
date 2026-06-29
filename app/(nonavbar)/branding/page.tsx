"use client";

import { useState } from "react";
import TypographyShowcase from "./Typography";
import Navbar from "./NavBar";

const ACCESS_CODE = "252525"

export default function BrandingPage() {
    const [code, setCode] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleUnlock = () => {
        if (code === ACCESS_CODE) {
            setUnlocked(true);
            setError(false);
        } else {
            setError(true);
            setCode("");
        }
    };

    if (!unlocked) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6">
                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#E07A4F]">
                        Private Access
                    </p>

                    <h1 className="mt-4 text-4xl font-bold text-[#F5F1EB]">
                        Brand Portal
                    </h1>

                    <p className="mt-4 text-[#B9B4AD]">
                        Enter the 6-digit access code to view the branding presentation.
                    </p>

                    <input
                        type="password"
                        maxLength={6}
                        value={code}
                        onChange={(e) =>
                            setCode(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder="••••••"
                        className="
              mt-8
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/20
              px-5
              py-4
              text-center
              text-2xl
              tracking-[0.5em]
              text-[#F5F1EB]
              outline-none
            "
                    />

                    {error && (
                        <p className="mt-4 text-sm text-red-400">
                            Invalid access code.
                        </p>
                    )}

                    <button
                        onClick={handleUnlock}
                        className="
              mt-6
              w-full
              rounded-2xl
              bg-[#E07A4F]
              py-4
              font-medium
              text-black
              transition-all
              hover:scale-[1.02]
            "
                    >
                        Unlock
                    </button>
                </div>
            </main>
        );
    }
    return (

        <>
        <Navbar />
        <main className="bg-[#0D0D0D] text-[#F5F1EB]">
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 py-32">
                <span className="rounded-full border border-[#E07A4F]/20 bg-[#E07A4F]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#E07A4F]">
                    Brand Identity
                </span>

                <h1 className="mt-8 max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] md:text-8xl">
                    More Than
                    <br />
                    A Production Studio.
                    <br />
                    A Storytelling Brand.
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-[#B9B4AD]">
                    SceneBanegaKya exists to transform ideas into memorable visual
                    experiences through cinematic storytelling, thoughtful design, and
                    modern content creation.
                </p>
            </section>

            {/* Philosophy */}
            <section className="border-y border-white/5 py-28">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                            Philosophy
                        </p>

                        <h2 className="mt-6 text-5xl font-bold tracking-tight">
                            Every Frame
                            <br />
                            Should Mean
                            <br />
                            Something.
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed text-[#B9B4AD]">
                        We believe visuals should do more than look beautiful. Every shot,
                        cut, movement, and color should contribute to a larger story.
                        Whether it’s a brand film, social content, or documentary, our
                        process begins with purpose and ends with emotion.
                    </p>
                </div>
            </section>

            {/* Logo */}
            <section className="mx-auto max-w-7xl px-6 py-28">
                <h2 className="text-4xl font-bold">Logo System</h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/5 bg-white/3 p-12">
                        <div className="flex items-center gap-4">
                            <div className="h-4 w-4 rounded-full bg-[#E07A4F]" />

                            <span className="text-3xl font-semibold">
                                SceneBanegaKya
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/5 bg-white/3 p-12">
                        <div className="flex items-center justify-center">
                            <div className="h-20 w-20 rounded-full bg-[#E07A4F]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors */}
            <section className="mx-auto max-w-7xl px-6 py-28">
                <div className="mb-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E07A4F]">
                        Brand Identity
                    </p>

                    <h2 className="mt-4 text-5xl font-bold tracking-tight">
                        Color System
                    </h2>

                    <p className="mt-4 max-w-2xl text-[#8A847C]">
                        A balanced palette designed for cinematic storytelling,
                        premium experiences, and modern digital products.
                    </p>
                </div>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* LIGHT THEME */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-[#F8F6F2]" />
                            <h3 className="text-2xl font-bold">
                                Light Theme
                            </h3>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    name: "Background",
                                    role: "Page Background",
                                    color: "#F8F6F2",
                                },
                                {
                                    name: "Foreground",
                                    role: "Primary Text",
                                    color: "#111111",
                                },
                                {
                                    name: "Surface",
                                    role: "Cards & Sections",
                                    color: "#FFFFFF",
                                },
                                {
                                    name: "Card",
                                    role: "Secondary Surface",
                                    color: "#EFECE6",
                                },
                                {
                                    name: "Border",
                                    role: "Dividers",
                                    color: "#D8D4CC",
                                },
                                {
                                    name: "Muted",
                                    role: "Secondary Text",
                                    color: "#8A847C",
                                },
                                {
                                    name: "Accent",
                                    role: "Brand Color",
                                    color: "#E07A4F",
                                },
                                {
                                    name: "Accent Hover",
                                    role: "Interactive States",
                                    color: "#D26C40",
                                },
                            ].map((item) => (
                                <div
                                    key={item.color}
                                    className="overflow-hidden rounded-3xl border border-black/5"
                                >
                                    <div
                                        className="h-36"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    />

                                    <div className="bg-white p-5">
                                        <h4 className="font-semibold">
                                            {item.name}
                                        </h4>

                                        <p className="mt-1 text-sm text-[#8A847C]">
                                            {item.role}
                                        </p>

                                        <p className="mt-4 font-mono text-sm">
                                            {item.color}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DARK THEME */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-[#0F0F10]" />
                            <h3 className="text-2xl font-bold">
                                Dark Theme
                            </h3>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    name: "Background",
                                    role: "Page Background",
                                    color: "#0F0F10",
                                },
                                {
                                    name: "Foreground",
                                    role: "Primary Text",
                                    color: "#F8F6F2",
                                },
                                {
                                    name: "Surface",
                                    role: "Cards & Sections",
                                    color: "#1A1A1C",
                                },
                                {
                                    name: "Card",
                                    role: "Secondary Surface",
                                    color: "#252528",
                                },
                                {
                                    name: "Border",
                                    role: "Dividers",
                                    color: "#353539",
                                },
                                {
                                    name: "Muted",
                                    role: "Secondary Text",
                                    color: "#B5B0A8",
                                },
                                {
                                    name: "Accent",
                                    role: "Brand Color",
                                    color: "#E07A4F",
                                },
                                {
                                    name: "Accent Hover",
                                    role: "Interactive States",
                                    color: "#EC8A61",
                                },
                            ].map((item) => (
                                <div
                                    key={item.color}
                                    className="overflow-hidden rounded-3xl border border-white/5 bg-[#1A1A1C]"
                                >
                                    <div
                                        className="h-36"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    />

                                    <div className="p-5">
                                        <h4 className="font-semibold text-[#F8F6F2]">
                                            {item.name}
                                        </h4>

                                        <p className="mt-1 text-sm text-[#B5B0A8]">
                                            {item.role}
                                        </p>

                                        <p className="mt-4 font-mono text-sm text-[#F8F6F2]">
                                            {item.color}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <TypographyShowcase />

            {/* Voice */}
            <section className="mx-auto max-w-7xl px-6 py-28">
                <h2 className="text-4xl font-bold">Brand Voice</h2>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {[
                        "Cinematic",
                        "Bold",
                        "Human",
                    ].map((item) => (
                        <div
                        key={item}
                        className="rounded-3xl border border-white/5 bg-white/3 p-8"
                        >
                            <h3 className="text-2xl font-semibold">{item}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Applications */}
            <section className="mx-auto max-w-7xl px-6 py-28">
                <h2 className="text-4xl font-bold">
                    Brand In Motion
                </h2>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="aspect-4/5 rounded-3xl border border-white/5 bg-white/3"
                        />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/5 py-32">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-6xl font-bold tracking-tight">
                        Ready To Build
                        <br />
                        Something Memorable?
                    </h2>

                    <button className="mt-10 rounded-full bg-[#E07A4F] px-8 py-4 font-medium text-black">
                        Start Your Project
                    </button>
                </div>
            </section>
        </main>
                            </>
    );
}