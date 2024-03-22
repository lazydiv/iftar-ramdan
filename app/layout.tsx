import BgPattern from "@/components/shared/bgPattern";
import Footer from "@/components/shared/footer";
import { Nav } from "@/components/shared/Nav";
import { Toaster } from "@/components/ui/toaster";
import { ModelProvider } from "@/providers/model-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
const font = Cairo({ subsets: ["arabic"], weight: ["400"] });

export const metadata: Metadata = {
  title: "HNU IFTAR ",
  description: "HNU IFTAR 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      
    >


      <html lang="ar" dir="rtl">

        <body
          className={cn('min-h-[70vh] scrollbar-hide', font.className)}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <BgPattern />
            <ModelProvider />
            <Toaster />

            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </body>
        <Footer />
      </html>
    </ClerkProvider>
  );
}
