"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@components/ui/button";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const { theme, systemTheme } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!currentTheme) return null;

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/blackThemeLogo.svg"
      : "/assets/whiteThemeLogo.svg";

  return (
    <footer className="mt-10">
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo"
            width={80}
            height={40}
            className="z-10 mb-3"
          />
        </Link>
      </div>
      <div className="flex justify-center gap-6 opacity-50 text-base">
        <Link href="/">{t("home")}</Link>
        <Link href="/terms">{t("terms")}</Link>
        <Link href="/privacy">{t("privacy")}</Link>
      </div>
      <div className="items-center justify-center flex">
      <Button
          onClick={() => setContactOpen(true)}
          variant="default"
          className="bg-primary text-white my-4"
        >
          {t("contact")}
        </Button>
      </div>
      <div className="flex justify-center">
        <a className="text-base" href="mailto:ceo@furnify.cz">
          ceo@furnify.cz
        </a>
      </div>
      <p className="text-center text-base mt-3 mb-10 text-gray-500">
        © 2025 Furnify. {t("reserved")}
      </p>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </footer>
  );
};

export default Footer;
