import { client } from "@lib/sanity";
import { carusel } from "@lib/interface";
import SwiperComponent from "./SwiperComponent";
import { getTranslations } from "next-intl/server";
import EshopBtn from "../Eshop/EshopBtn";
import FurnitureSets from "./FurnitureSet";

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
    <div>
      <div
        className="relative mt-10 lg:mt-20 text-center scroll-mt-20 px-4"
        id="furniture"
      >
        <h1 className="title">
          <span className="text-primary">{t("titlePrimary")}</span>{" "}
          {t("title1")}
          <br />
          {t("title2")}
        </h1>
        <h3 className="description-text customTopMargin dark:invert">
          {t("description1")}
          <br className="hidden md:block" /> {t("description2")}
        </h3>
        <FurnitureSets />
        <div className="text-center customTopMargin">
          <h2 className="description-text dark:invert">{t("eshop")}</h2>
        </div>
        <EshopBtn />
      </div>
      <SwiperComponent data={data} />
    </div>
  );
}
