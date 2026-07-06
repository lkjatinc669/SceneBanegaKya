// components/navbar/mobile-nav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './NavItems';

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <div className="md:hidden flex items-center">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Slide-out Panel Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border px-6 py-6 flex flex-col space-y-4 z-50 shadow-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col border-b border-muted pb-2">
              {item.subservices ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex justify-between items-center w-full font-english-heading text-base font-bold text-foreground py-1 text-left"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeSubmenu === item.name && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-border bg-muted/30 py-1 rounded-r">
                      {item.subservices.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block font-english-body text-sm text-muted-foreground hover:text-primary py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-english-heading text-base font-bold text-foreground py-1 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}