"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicLoadingScreen({ onComplete }: { onComplete: Function }) {
  const text = "Scene Banega Kya?";
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    // Maintain overall timing
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);

        // Sequence of resolve: typing done -> short pause -> flash -> finish fade.
        setTimeout(() => {
          setShowFlash(true); // Intense studio light flash

          setTimeout(() => {
            setFinished(true); // Component fade exit
          }, 600);
        }, 400);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          // Revise exit animation: text disperses while whole screen fades.
          exit={{
            opacity: 0,
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#0D0D0D]
          "
        >
          {/* BACKGROUND TEXTURE: Abstract Film Perforations (Fixed position, subtle) */}
          <div
            className="
              absolute
              inset-0
              pointer-events-none
              flex
              flex-col
              gap-8
              p-10
              opacity-[0.05]
            "
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex justify-between w-full h-2">
                <div className="w-12 h-2 rounded bg-white/20" />
                <div className="w-12 h-2 rounded bg-white/20" />
              </div>
            ))}
          </div>

          {/* DYNAMIC LIGHT: Shifting Light Leak */}
          <motion.div
            animate={{
              x: ["-50%", "50%", "-50%"],
              y: ["-20%", "20%", "-20%"],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-150
              w-150
              rounded-full
              bg-[#E07A4F]
              blur-[180px]
              pointer-events-none
            "
          />

          {/* TEXT & LOADING Container */}
          <div className="relative text-center max-w-4xl px-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="
                text-5xl
                font-bold
                tracking-[-0.06em]
                text-[#F5F1EB]
                md:text-8xl
                leading-tight
              "
            >
              {/* Typewriter Effect: Rendering each character individually for a 'popping' motion */}
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  animate={{
                    opacity: index < displayedText.length ? 1 : 0,
                    scale: index < displayedText.length ? 1 : 0.5,
                    x: index < displayedText.length ? 0 : -10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0, // Delay is handled by the useEffect interval
                  }}
                  className={`
                    inline-block
                    ${char === '?' ? 'text-[#E07A4F]' : ''} 
                  `}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Integrated Progressive Loading Line */}
            <div className="relative mt-8 h-px bg-white/10 w-full rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(displayedText.length / text.length) * 100}%`,
                }}
                // Linear transition to make the bar perfectly smooth, synchronized to typewriter
                transition={{ ease: "linear", duration: 0 }}
                className="
                  h-full
                  rounded-full
                  bg-[#E07A4F]
                "
              />
            </div>
          </div>

          {/* STUDIO FLASH: Blinding White light */}
          <AnimatePresence>
            {showFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.15,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  bg-white
                  pointer-events-none
                  z-10
                "
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}