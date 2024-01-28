import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fontOutfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-outfit antialiased container",
          fontOutfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
