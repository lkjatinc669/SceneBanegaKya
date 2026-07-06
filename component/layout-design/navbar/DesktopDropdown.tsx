// components/navbar/desktop-dropdown.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './NavItems';

export default function DesktopDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center space-x-1 font-english-heading text-sm font-bold text-foreground hover:text-primary transition-colors py-2"
      >
        <span>{item.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && item.subservices && (
        <div className="absolute left-0 w-56 mt-0 bg-background border border-border shadow-xl rounded-md py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          {item.subservices.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="block px-4 py-2 font-english-body text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}