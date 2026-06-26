"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({onComplete }: {onComplete:Function}) {
  const text = "Scene Banega Kya?";
  const [displayedText, setDisplayedText] = useState("");
  const [showFlash, setShowFlash] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
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

        setTimeout(() => {
          setShowFlash(true);

          setTimeout(() => {
            setFinished(true);
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
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
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
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              h-125
              w-125
              rounded-full
              bg-[#E07A4F]
              blur-[180px]
            "
          />

          {/* Camera Flash */}
          <AnimatePresence>
            {showFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  inset-0
                  bg-white
                "
              />
            )}
          </AnimatePresence>

          {/* Text */}
          <div className="relative text-center">
            <motion.h1
              animate={{
                opacity: [1, 0.85, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                text-5xl
                font-bold
                tracking-[-0.06em]
                text-[#F5F1EB]
                md:text-8xl
              "
            >
              {displayedText}
              <motion.span
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                }}
              >
                |
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${(displayedText.length / text.length) * 100}%`,
              }}
              className="
                mx-auto
                mt-6
                h-px
                bg-[#E07A4F]
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}