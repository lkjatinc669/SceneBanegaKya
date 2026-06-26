import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PremiumNavbar from "@/components/layout-design/Navbar";
import PremiumFooter from "@/components/layout-design/Footer";
import LayoutWrapper from "@/components/layout-helper/LayoutWrapper";
import PageTransition from "@/components/PageTransition";
import Cursor from "@/components/common/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SceneBanegaKya - Premium Agency",
  description: "Creative agency focused on cinematic visuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F5F1EB] bg-dot-pattern">
        <LayoutWrapper>
          <Cursor />
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.1] noise" />
          <PremiumNavbar />
          <PageTransition>
            {children}
          </PageTransition>
          <PremiumFooter />
        </LayoutWrapper>
      </body>
    </html>
  );
}
