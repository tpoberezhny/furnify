import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function WeAreEco() {
  const t = await getTranslations("eco");

  return (
    <section id="benefits" className="relative py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="title leading-[1.2]">
            <span className="text-primary">{t("title1")}</span> {t("title2")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div className="relative w-full h-[400px] md:h-[540px] bg-transparent">
            <Image
              src="/assets/eco.jpg"
              alt="eco"
              layout="fill"
              objectFit="cover"
              className="rounded-xl "
            />
          </div>

          {/* Text Card */}
          <div className="shadow-lg py-4 px-4 md:py-9 md:px-5 rounded-xl">
            <div className="flex flex-col justify-center">
              <div className="text-gray-700 text-justify font-montserrat text-base md:text-xl dark:text-white">
                <div>
                  {t("description1")}{" "}
                  <span className="text-orange-500">
                    {t("description1,1Org")}
                  </span>{" "}
                  {t("description1,2")}{" "}
                  <span className="text-orange-500">
                    {t("description1,3Org")}
                  </span>{" "}
                  {t("description1,4")}
                </div>
                <br />
                <div>
                  {t("description2")}{" "}
                  <span className="text-orange-500">
                    {t("description2,1Org")}
                  </span>{" "}
                  {t("description2,2")}{" "}
                  <span className="text-orange-500">
                    {t("description2,3Org")}
                  </span>{" "}
                  {t("description2,3")}
                </div>
                <br />
                <div>
                  {t("description3")}{" "}
                  <span className="text-orange-500">
                    {t("description3,1Org")}
                  </span>{" "}
                  {t("description3,2")}
                </div>
                <br />
                {t("description4")}{" "}
                <span className="text-orange-500">
                  {t("description4,1Org")}
                </span>{" "}
                {t("description4,2")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
