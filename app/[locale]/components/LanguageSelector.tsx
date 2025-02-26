"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/config";

const languages = [
  { code: "en", label: "EN" },
  { code: "cz", label: "CZ" },
];

export default function LanguageSelector() {
  const pathname = usePathname();

  const segments = pathname.split("/");

  const currentLocale = segments[1];

  return (
    <div className="flex items-center gap-2">
      {languages.map((language) => {
        const newSegments = [...segments];
        if (locales.includes(currentLocale as any)) {
          newSegments[1] = language.code;
        } else {
          newSegments.splice(1, 0, language.code);
        }
        const newPath = newSegments.join("/") || "/";
        return (
          <Link key={language.code} href={newPath}>
            <button className="px-2 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-800 border border-white md:border-gray-200">
              {language.label}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
