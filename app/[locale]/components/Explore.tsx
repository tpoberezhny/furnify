import { Button } from "@/components/ui/button";
import { client } from "@lib/sanity";
import { carusel } from "@lib/interface";
import SwiperComponent from "./SwiperComponent";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const revalidate = 60;

async function getCaruselData() {
  const query = `*[_type == "furnify"] | order(_createdAt desc) {
    title,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Explore() {
  const t = await getTranslations("explore");
  const data: carusel[] = await getCaruselData();

  return (
    <div
      className="relative mt-10 lg:mt-20 text-center scroll-mt-20"
      id="furniture"
    >
      <h1 className="title">
        <span className="text-primary">{t("titlePrimary")}</span> {t("title1")}
        <br />
        {t("title2")}
      </h1>
      <h3 className="description-text customTopMargin dark:invert">
        {t("description1")}
        <br className="hidden md:block" /> {t("description2")}
      </h3>
      <Link href="/eshop">
        <Button
          className="customTopMargin p-6 rounded-2xl font-medium text-md"
          title="Prices"
        >
          E-shop
        </Button>
      </Link>
      <SwiperComponent data={data} />
    </div>
  );
}
