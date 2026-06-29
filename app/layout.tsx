import type { Metadata } from "next";
import "./globals.css";
import {manrope, mukta, rozha} from "@/fonts/fonts";
import LayoutWrapper from "@/components/layout-helper/LayoutWrapper";

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
    <html
      lang="en"
      className={`${manrope.variable} ${mukta.variable} ${rozha.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F5F1EB] bg-dot-pattern">
        <LayoutWrapper>
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.1] noise" />
          {children}
        </LayoutWrapper>
        </body>
    </html>
  );
}
