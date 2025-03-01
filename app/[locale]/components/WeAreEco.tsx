import { getTranslations } from "next-intl/server";

export default async function WeAreEco() {
  const t = await getTranslations("eco");

  return (
    <div
      className="relative mt-10 lg:mt-20 text-center scroll-mt-20 max-w-5xl mx-auto"
      id="benefits"
    >
      <h1 className="title">{t("title")}</h1>
      <h3 className="description-text customTopMargin dark:invert">
        {t("description")}
      </h3>
    </div>
  );
}
