import { client } from "@lib/sanity";
import { carusel } from "@lib/interface";
import SwiperComponent from "./SwiperComponent";
import { getTranslations } from "next-intl/server";
import EshopBtn from "./EshopBtn";

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
      <h2 className="mt-10">*Картинки-визуализации*</h2>
      <div className="text-center customTopMargin">
        <h2 className="description-text">{t("eshop")}</h2>
      </div>
      <EshopBtn />
      <SwiperComponent data={data} />
    </div>
  );
}
