"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MobileToggle from "./MobileToggle";
import MobileMenu from "./MobileMenu";

interface NavItem {
  name: string;
  href: string;
}

interface NavbarClientProps {
  navItems: NavItem[];
  children: React.ReactNode; // Content injected via the Server Component
}

export default function NavbarClient({ navItems, children }: NavbarClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0D0D0D]/80 backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo & Desktop Nav Slot */}
          {children}

          {/* User Control Interface Group */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileToggle 
              isOpen={mobileMenuOpen} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            />
          </div>
        </div>
      </header>

      {/* Mobile Modal Drawer Layout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            navItems={navItems} 
            onClose={() => setMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}