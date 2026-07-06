"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

type CombinedProps = ButtonProps & 
  Partial<ButtonHTMLAttributes<HTMLButtonElement>> & 
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export default function Button({ href, variant = "primary", children, className = "", ...props }: CombinedProps) {
  const baseStyle = "inline-flex items-center justify-center gap-3 rounded-full font-english-heading tracking-wide transition-all duration-300 px-8 py-4 backdrop-blur-xl group";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(210,116,52,.35)]",
    outline: "border border-border bg-background/40 hover:border-primary hover:text-primary text-foreground",
    ghost: "bg-transparent text-foreground-muted hover:text-foreground"
  };

  const computedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={computedClass} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={computedClass} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}