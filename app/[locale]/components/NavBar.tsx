"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations("nav");
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [contactOpen, setContactOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  if (!currentTheme) return null;

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/blackThemeLogo.svg"
      : "/assets/whiteThemeLogo.svg";

  const navLinks = [
    { href: "/#furniture", label: t("furniture") },
    { href: "/prices", label: t("prices") },
    { href: "/#howItWorks", label: t("howItWorks") },
    { href: "/#benefits", label: t("benefits") },
    { href: "/#faq", label: t("faq") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 transition-colors">
      <div className="py-4">
        <div className="px-4 flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={60}
              className="z-10 mr-32"
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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <Button
              onClick={() => setContactOpen(true)}
              variant="default"
              className="bg-primary text-white"
            >
              Contact Us
            </Button>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            <div className="md:hidden mt-1 md:mt-0">
              <button onClick={() => setBurgerOpen((prev) => !prev)}>
                {burgerOpen ? <X size={24} /> : <Menu size={25} />}
              </button>
            </div>
          </div>
        </div>
        {/* Puttin the Burger inside of the DOM to handle transition */}
        <div
          className={`
            absolute top-full right-0
            w-full h-[100vh] z-50 rounded-lg text-center
            bg-[#00B6BF] dark:bg-[#008089]
            transform transition-transform duration-300 ease-in-out
            ${burgerOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col px-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setBurgerOpen(false)}
                className="text-white text-left text-xl mb-[0.9rem] border-b border-gray-300 dark:border-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <LanguageSelector />
            <ModeToggle />
          </div>
        </div>
      </div>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </nav>
  );
}
