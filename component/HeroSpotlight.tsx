"use client";

import { HTMLAttributes } from "react";

interface HeroSpotlightProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "sepia" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
}

export default function HeroSpotlight({
  variant = "primary",
  size = "lg",
  blur = "lg",
  opacity = 15,
  className = "",
  style,
  ...props
}: HeroSpotlightProps) {
  const sizeMap = { sm: "h-[300px] w-[300px]", md: "h-[600px] w-[600px]", lg: "h-[900px] w-[900px]", xl: "h-[1200px] w-[1200px]" };
  const blurMap = { sm: "blur-[60px]", md: "blur-[120px]", lg: "blur-[170px]", xl: "blur-[220px]" };
  const variantMap = { primary: "bg-primary", sepia: "bg-[#A6917A]", muted: "bg-foreground" };

  return (
    <div
      className={`pointer-events-none absolute rounded-full select-none ${sizeMap[size]} ${blurMap[blur]} ${variantMap[variant]} ${className}`}
      style={{ opacity: opacity / 100, ...style }}
      {...props}
    />
  );
}