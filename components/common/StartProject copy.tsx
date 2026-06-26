"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactCTSA({
  topHeader, 
  lineOne, 
  lineTwo, 
  lineThree, 
  description
} : {
  topHeader: String, 
  lineOne: String, 
  lineTwo: String, 
  lineThree: String, 
  description: String
}) {
  const [contact, setContact] = useState("");

  const isValid = useMemo(() => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^(\+?\d{1,4}[\s-]?)?\d{10}$/;

    return (
      emailRegex.test(contact.trim()) ||
      phoneRegex.test(contact.trim())
    );
  }, [contact]);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E07A4F]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.0fr_1.0fr] lg:gap-20">
            {/* Left */}
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#E07A4F]">
                Let's Create Something Extraordinary
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#F5F1EB] md:text-6xl lg:text-7xl">
                Ready To Create
                <br />
                Something
                <span className="italic text-[#E07A4F]">
                  {" "}
                  Remarkable?
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]">
                From concept to final delivery, we craft cinematic visuals
                that help brands, creators, and businesses stand out in a
                crowded digital world. Whether it's a commercial, reel,
                music video, brand film, or social content, we're ready to
                bring your vision to life.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                <h3 className="text-xl font-semibold text-[#F5F1EB]">
                  Get In Touch
                </h3>

                <p className="mt-4 text-[#B9B4AD]">
                  Leave your email or phone number and we'll reach out to
                  discuss your project.
                </p>

                <div className="mt-8">
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Email or Phone Number"
                    className="
                      w-full rounded-2xl
                      border border-white/10
                      bg-white/3
                      px-5 py-4
                      text-[#F5F1EB]
                      outline-none
                      transition-all
                      placeholder:text-[#8A847C]
                      focus:border-[#E07A4F]/40
                    "
                  />

                  {contact.length > 0 && (
                    <p
                      className={`mt-3 text-sm ${
                        isValid
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {isValid
                        ? "✓ Looks good"
                        : "Please enter a valid email or phone number"}
                    </p>
                  )}
                </div>

                <button
                  disabled={!isValid}
                  className="
                    mt-6 w-full
                    rounded-2xl
                    bg-[#E07A4F]
                    px-5 py-4
                    font-medium
                    text-white
                    transition-all
                    hover:brightness-110
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  Request Contact
                </button>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-[#B9B4AD]">
                    We typically respond within a few hours. For urgent
                    projects, feel free to call us directly.
                  </p>

                  <Link
                    href="/contact"
                    className="
                      mt-6 inline-flex items-center gap-2
                      text-sm font-medium
                      text-[#E07A4F]
                      transition-all
                      hover:gap-3
                    "
                  >
                    More ways to contact us
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}