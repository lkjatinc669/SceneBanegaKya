// app/layout.tsx
import { manrope, mukta } from "@/font/font";
import { ThemeProvider } from "@/provider/ThemeProvider";
import '@/app/globals.css';
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Scene Banega Kya?",
  description: "Creative Agency",

  applicationName: "Scene Banega Kya?",
  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    title: "Scene Banega Kya?",
    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#d27434", //  Fixed. Handled cleanly by Next.js viewport pipeline.
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${manrope.variable} ${mukta.variable}`}
      suppressHydrationWarning /* Crucial for next-themes to inject attributes cleanly */
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}