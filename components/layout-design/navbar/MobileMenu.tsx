"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  navItems: Array<{ name: string; href: string }>;
  onClose: () => void;
}

export default function MobileMenu({ navItems, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-0 z-40 md:hidden bg-background border-b border-border pt-24 pb-8 px-6 shadow-lg"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <nav className="relative z-10 flex flex-col gap-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="text-lg font-medium text-foreground transition-colors hover:text-accent"
          >
            {item.name}
          </Link>
        ))}
        
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Start Project
        </button>
      </nav>
    </motion.div>
  );
}