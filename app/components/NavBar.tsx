"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!currentTheme) return null;

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/blackThemeLogo.svg"
      : "/assets/whiteThemeLogo.svg";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo"
            width={100}
            height={50}
            className="z-10"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/furniture" className="nav-link">
            Furniture
          </Link>
          <Link href="/benefits" className="nav-link">
            Benefits
          </Link>
          <Link href="/howItWorks" className="nav-link">
            How it Works
          </Link>
          <Link href="/prices" className="nav-link">
            Prices
          </Link>
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
        </div>

        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
