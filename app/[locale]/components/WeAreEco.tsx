import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function WeAreEco() {
  const t = await getTranslations("eco");

  return (
    <section id="benefits" className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="title leading-[1.2]">
            <span className="text-primary">{t("title1")}</span> {t("title2")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-transparent">
            <Image
              src="/assets/eco.jpg"
              alt="eco"
              layout="fill"
              objectFit="cover"
              className="rounded-xl "
            />
          </div>

          {/* Text Card */}
          <div className="shadow-lg p-4 md:p-8 rounded-xl bg-gray-200">
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 dark:text-gray-200 text-justify font-montserrat text-base md:text-xl">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
