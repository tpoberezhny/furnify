"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Footer = () => {
  const t = useTranslations("footer");

  const params = useParams();
  const currentLocale = params.locale || "en";

  const { theme, systemTheme } = useTheme();
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
      <div className="flex justify-center gap-4 md:gap-6 opacity-50 text-base">
        <Link href={`/${currentLocale}/`}>{t("home")}</Link>
        <Link href={`/${currentLocale}/terms`}>{t("terms")}</Link>
        <Link href={`/${currentLocale}/privacy`}>{t("privacy")}</Link>
      </div>
      <div className="flex justify-center mt-3">
        <a className="text-base" href="mailto:ceo@furnify.cz">
          ceo@furnify.cz
        </a>
      </div>
      <p className="text-center text-base mt-3 mb-10 text-gray-500">
        © 2025 Furnify. {t("reserved")}
      </p>
    </footer>
  );
};

export default Footer;
