import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav/nav-menu";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

import Logo from "@/public/alk-simple-logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "arial"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALK - 2024",
  description: "BRAND WIZARDS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Craft UI</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="invert dark:invert-0"
            width={170}
            height={30.54}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          <ThemeToggle />
      {/*     <Button asChild className="hidden sm:flex">
            <Link href="/brand-genesis">Join our FREE 7-Day Challenge</Link>
          </Button> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
