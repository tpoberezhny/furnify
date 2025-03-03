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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Card */}
          <div className="flex items-center justify-center md:h-96 p-2 text-center md:text-left md:p-6 rounded-xl dark:shadow-gray-700 shadow-xl transform hover:scale-105 transition duration-300 ease-out">
            <div className="max-w-lg">
              <p className="text-gray-700 dark:text-gray-200 text-lg">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-out">
            <Image
              src="/assets/eco.jpg"
              alt="eco"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
