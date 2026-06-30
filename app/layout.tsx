import type { Metadata } from "next";
import "./globals.css";
import { manrope, mukta, rozha, hennyPenny } from "@/fonts/fonts";
import { ThemeProvider } from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "Scene Banega Kya",
  description: "Creative Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added suppressHydrationWarning and removed the hardcoded 'dark' class
    <html
      lang="en"
      className={`${hennyPenny.variable} ${manrope.variable} ${mukta.variable} ${rozha.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-dot-pattern font-heading text-foreground selection:bg-accent-soft selection:text-accent">
        <ThemeProvider>
          {/* Premium Noise Overlay */}
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] noise" />

          {/* Main Core Viewport Content Frame */}
          <main className="relative flex-1 pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}