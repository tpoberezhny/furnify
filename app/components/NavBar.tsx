"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!currentTheme) return null;

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/blackThemeLogo.svg"
      : "/assets/whiteThemeLogo.svg";

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70  transition-all"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={60}
            className="z-10"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-7">
          <Link
            href="/#furniture"
            className="nav-link" scroll={true}
          >
            Furniture
          </Link>
          <Link
            href="/#benefits"
            className="nav-link"
          >
            Benefits
          </Link>
          <Link
            href="/howItWorks"
            className="nav-link"
          >
            How it Works
          </Link>
          <Link
            href="/prices"
            className="nav-link"
          >
            Prices
          </Link>
          <Link
            href="/faq"
            className="nav-link"
          >
            FAQ
          </Link>
        </div>

        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
