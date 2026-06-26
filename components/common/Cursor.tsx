"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    damping: 25,
    stiffness: 250,
  });

  const y = useSpring(mouseY, {
    damping: 25,
    stiffness: 250,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden lg:block"
      style={{
        x,
        y,
      }}
      animate={{
        width: hovering ? 36 : 100,
        height: hovering ? 36 : 100,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div
        className={`
          absolute
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          transition-all
          duration-300
          ${
            hovering
              ? "bg-[#E07A4F]/20 border border-[#E07A4F]/50 shadow-[0_0_40px_rgba(224,122,79,0.6)]"
              : "bg-[#E07A4F]/5 border border-[#E07A4F]/20 shadow-[0_0_80px_rgba(224,122,79,0.15)]"
          }
        `}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
}