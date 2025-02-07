"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [contactOpen, setContactOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  if (!currentTheme) return null;

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/blackThemeLogo.svg"
      : "/assets/whiteThemeLogo.svg";

  // Define nav links once for reuse
  const navLinks = [
    { href: "/#furniture", label: "Furniture" },
    { href: "/#benefits", label: "Benefits" },
    { href: "/#howItWorks", label: "How it Works" },
    { href: "/prices", label: "Prices" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 transition-all">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={60}
            className="z-10 mr-6"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Contact Button always visible */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setContactOpen(true)}
            variant="default"
            className="bg-primary text-white"
          >
            Contact Us
          </Button>
          {/* Desktop: show ModeToggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          {/* Mobile: show Burger Icon instead of ModeToggle */}
          <div className="md:hidden">
            <button onClick={() => setBurgerOpen((prev) => !prev)}>
              {burgerOpen ? <X size={24} className="mt-1"/> : <Menu size={25} className="mt-1"/>}
            </button>
          </div>
        </div>

        {/* Mobile Burger Dropdown Menu */}
        {burgerOpen && (
          <div className="absolute rounded-xl text-center right-0 top-full bg-primary dark:bg-gray-800 z-50">
            <div className="flex flex-col items-center p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setBurgerOpen(false)}
                  className="text-white underline text-lg mb-[0.3rem]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="p-4 border-t border-gray-300 dark:border-gray-700">
              <ModeToggle />
            </div>
          </div>
        )}
      </div>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </nav>
  );
}
