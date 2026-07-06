'use client';

import Link from 'next/link';
import footItems from './FootItems';
import LogoVertical from '@/component/logo/LogoVertical';
import FooterForm from './FooterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border mt-auto relative overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Structural Accent Grid Wire Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        
        {/* MAIN LAYOUT MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-muted">
          
          {/* Column 1: Brand Anchor Block (5/12 Grid Frame) */}
          <div className="md:col-span-5 space-y-5">
            <LogoVertical />
            <p className="font-english-body text-sm text-muted-foreground max-w-sm leading-relaxed">
              A premium creative production powerhouse engineering next-generation video architecture, high-octane motion design, and disruptive brand identities globally.
            </p>
          </div>

          {/* Column 2: Studio Nav Array (2/12 Grid Frame) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="font-english-heading text-xs font-bold tracking-widest text-primary uppercase">
              Index
            </h5>
            <ul className="space-y-2.5">
              {footItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="font-english-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 block w-fit capitalize"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect Channels (2/12 Grid Frame) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="font-english-heading text-xs font-bold tracking-widest text-primary uppercase">
              Connect
            </h5>
            <ul className="space-y-2.5">
              {[
                { label: 'Instagram', url: '#' },
                { label: 'YouTube', url: '#' },
                { label: 'LinkedIn', url: '#' },
                { label: 'Vimeo', url: '#' }
              ].map((platform) => (
                <li key={platform.label}>
                  <a 
                    href={platform.url}
                    className="font-english-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 block w-fit"
                  >
                    {platform.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tactical Newsletter Hub (3/12 Grid Frame) */}
          <FooterForm />

        </div>

        {/* UTILITY BOTTOM FRAME */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Trademark Node */}
          <div className="font-english-body text-xs text-muted-foreground tracking-wide order-2 sm:order-1">
            &copy; {currentYear} <span className="text-foreground font-bold">SCENE BANEGA KYA.</span> All rights reserved. Engineered for absolute impact.
          </div>

          {/* Legal Arrays */}
          <div className="flex space-x-6 order-1 sm:order-2">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' }
            ].map((legal) => (
              <Link 
                key={legal.label} 
                href={legal.href} 
                className="font-english-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {legal.label}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}