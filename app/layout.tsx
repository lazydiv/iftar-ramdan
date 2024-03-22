import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ClerkProvider, currentUser, SignedIn } from "@clerk/nextjs";
import { Nav } from "@/components/shared/Nav";
import { ThemeProvider } from "@/providers/theme-provider";
import BgPattern from "@/components/shared/bgPattern";
import Footer from "@/components/shared/footer";
import { init } from "next/dist/compiled/webpack/webpack";
import { initialUser } from "@/lib/init-user";
import { ModelProvider } from "@/providers/model-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { cn } from "@/lib/utils";
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
