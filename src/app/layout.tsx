import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Providers } from "@/providers";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModeToggle } from "@/components/mode-toggle";

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
      <Providers>
        <body
          className={cn(
            "min-h-screen bg-background font-outfit antialiased",
            fontOutfit.variable
          )}
        >
          <SiteHeader />
          {children}
          <SiteFooter />
          <div className="right-4 bottom-5 fixed">
            <ModeToggle />
          </div>
        </body>
      </Providers>
    </html>
  );
}
