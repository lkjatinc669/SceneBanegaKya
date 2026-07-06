'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import DesktopDropdown from './DesktopDropdown';
import navItems from './NavItems';
import LogoHorizontal from '@/component/logo/LogoHorizontal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'h-24 bg-background/80 backdrop-blur-md border-border shadow-sm shadow-black/5' 
          : 'h-24 bg-background border-transparent'
      }`}
    >
      {/* Visual Accent: Top neon-industrial tracking wire */}
      
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Core Corporate Identity with Micro-Scale feedback */}
        <Link 
          href="/" 
          className="font-english-heading text-lg font-extrabold tracking-tight text-foreground uppercase transform active:scale-95 transition-transform duration-150"
        >
          <LogoHorizontal/>
        </Link>

        {/* Responsive Desktop Structural Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <div key={item.name} className="relative px-3 py-1.5">
                <Link 
                  href={item.href}
                  className="relative group font-english-heading text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 block"
                >
                  {item.name}
                  {/* Premium Split-Expansion Line Animation */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
            </div>
          ))}
        </nav>

        {/* Right-Aligned Control Matrix with structural hover depths */}
        <div className="flex items-center sm:space-x-3 lg:space-x-0 md:space-x-0">
          <div className="transform hover:scale-105 active:scale-95 transition-transform duration-150">
            <ThemeToggle />
          </div>
          <div className="transform hover:scale-105 active:scale-95 transition-transform duration-150">
            <MobileNav items={navItems} />
          </div>
        </div>

      </div>
    </header>
  );
}