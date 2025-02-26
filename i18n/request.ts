import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../config";

// Helper type guard to check if a string is one of our locales
function isLocale(str: string): str is (typeof locales)[number] {
  return locales.includes(str as (typeof locales)[number]);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale || !isLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
