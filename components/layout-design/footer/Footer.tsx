"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa6";
import SceneLogo from "./Logo";

export default function PremiumFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/5 bg-[#0D0D0D]">
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 -top-20 h-200 w-200 -translate-x-1/2 rounded-full bg-linear-to-r from-[#E07A4F]/10 to-[#ff9e75]/5 blur-[120px] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 z-10">
        
        {/* Footer Grid */}
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <SceneLogo logoSrc={"/logo.svg"} />
            </div>

            <p className="max-w-sm leading-relaxed text-[#B9B4AD] font-light">
              Creative agency focused on cinematic visuals, premium design,
              motion graphics, and high-converting content.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#E07A4F]">
              Navigation
            </h4>

            <ul className="space-y-4">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-[#B9B4AD] transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#E07A4F] transition-all duration-300 group-hover:w-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#E07A4F]">
              Services
            </h4>

            <ul className="space-y-4 text-[#B9B4AD] font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Video Editing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Motion Graphics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Graphic Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-white transition-colors cursor-pointer">Content Production</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#E07A4F]">
              Connect
            </h4>

            <div className="flex gap-4">
              {[
                FaInstagram,
                FaLinkedin,
                FaYoutube,
                FaDribbble,
              ].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-[#B9B4AD]
                    transition-all
                    duration-300
                    hover:border-[#E07A4F]/50
                    hover:bg-[#E07A4F]/10
                    hover:text-white
                    hover:shadow-[0_0_20px_rgba(224,122,79,0.3)]
                  "
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-sm text-[#7B7772] md:flex-row"
        >
          <p>© 2026 SceneBanegaKya. All rights reserved.</p>

          <div className="flex gap-8 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}