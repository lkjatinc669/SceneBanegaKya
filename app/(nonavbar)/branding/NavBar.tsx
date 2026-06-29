"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import navItems from "./NavItems";
import { SceneLogo } from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {


    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled 
            ? "border-b border-white/5 bg-[#0D0D0D]/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">

            <SceneLogo logoSrc={"/logo.png"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="uppercase group relative text-sm font-bold text-[#B9B4AD] transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  {item.name}

                  <span
                    className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E07A4F] to-[#ff9e75] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(224,122,79,0.8)]"
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F5F1EB] transition-all hover:bg-white/10 hover:border-white/20 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0D0D0D]/95 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
            <div className="flex h-full flex-col justify-center px-8 relative z-10">
              <nav className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5F1EB] to-[#B9B4AD] transition-all hover:from-[#E07A4F] hover:to-[#ff9e75]"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
                className="mt-12 w-fit rounded-full border border-[#E07A4F]/40 bg-[#E07A4F]/10 px-8 py-4 text-lg font-medium text-white shadow-[0_0_20px_rgba(224,122,79,0.2)]"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}