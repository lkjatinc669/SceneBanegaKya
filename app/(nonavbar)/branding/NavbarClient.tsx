"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Added useTheme
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

interface NavbarClientProps {
  navItems: NavItem[];
  children: React.ReactNode;
}

export default function NavbarClient({ navItems, children }: NavbarClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Destructure theme controls
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

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
            ? "border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#0D0D0D]/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          {children}

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* next-themes Switcher Button */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black dark:text-[#F5F1EB] transition-all hover:bg-black/10 dark:hover:bg-white/10"
            >
              {/* resolvedTheme protects against 'system' setting string values */}
              {mounted ? (
                resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />
              ) : (
                <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black dark:text-[#F5F1EB] transition-all hover:bg-black/10 dark:hover:bg-white/10 md:hidden"
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
            className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-[#0D0D0D]/95 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
            <div className="flex h-full flex-col justify-center px-8 relative z-10">
              <nav className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-[#F5F1EB] to-gray-500 dark:to-[#B9B4AD] transition-all hover:from-[#E07A4F] hover:to-[#ff9e75]"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-12 w-fit rounded-full border border-[#E07A4F]/40 bg-[#E07A4F]/10 px-8 py-4 text-lg font-medium text-black dark:text-white shadow-[0_0_20px_rgba(224,122,79,0.2)]"
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