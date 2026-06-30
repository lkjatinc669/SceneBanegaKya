import type { Metadata } from "next";
import "./globals.css";
import { manrope, mukta, rozha, hennyPenny, poppins } from "@/fonts/fonts";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Cursor from "@/components/common/Cursor";

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
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-dot-pattern font-heading text-foreground selection:bg-accent-soft selection:text-accent font-main">
        <ThemeProvider>
          {/* Premium Noise Overlay */}
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] noise" />
          <Cursor/>

          {/* Main Core Viewport Content Frame */}
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}