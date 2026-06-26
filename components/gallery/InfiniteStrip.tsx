"use client";

import { motion } from "framer-motion";

const items = [
  "VISUAL STORIES |",
  "CINEMATIC CONTENT |",
  "BRAND FILMS |",
  "REELS |",
  "COMMERCIALS |",
  "STORYTELLING |",
  "COLOR GRADING |",
];

export default function BrandStrip() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E07A4F]/10 blur-[150px]" />
      </div>

      {/* Top Strip */}
      <motion.div
        className="
          relative
          -rotate-2
          whitespace-nowrap
          py-8
        "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex w-max items-center gap-16">
          {[...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className="
                cursor-default
                text-5xl
                font-black
                uppercase
                tracking-[-0.08em]
                text-white/10
                transition-all
                duration-500
                hover:scale-105
                hover:text-[#E07A4F]
                md:text-7xl
                lg:text-[8rem]
              "
              style={{
                textShadow:
                  "0 0 0 rgba(224,122,79,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 40px rgba(224,122,79,.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 0 rgba(224,122,79,0)";
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Strip */}
      <motion.div
        className="
          relative
          mt-8
          rotate-2
          whitespace-nowrap
          py-8
        "
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex w-max items-center gap-16">
          {[...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className="
                cursor-default
                text-4xl
                font-bold
                uppercase
                tracking-[-0.06em]
                text-[#E07A4F]/15
                transition-all
                duration-500
                hover:text-[#E07A4F]
                md:text-6xl
              "
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}