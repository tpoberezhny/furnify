import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function HowItWorks() {
  const t = await getTranslations("howItWorks");
  return (
    <div
      id="howItWorks"
      className="mt-10 lg:mt-20 text-center max-w-6xl mx-auto scroll-mt-20 px-4"
    >
      <div>
        <h1 className="title leading-[2rem] lg:leading-[3.3rem]">
          {t("title1")} <span className="text-primary">{t("title2")}</span>
          <br />
          {t("title3")}
        </h1>
        <h3 className="description-text customTopMargin dark:invert max-w-4xl mx-auto">
          {t("description")}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/*Contact Us */}
        <div className="bg-gray-50 p-2 rounded-2xl">
          <Image
            src="/assets/contactUs.png"
            alt="Contact Us"
            width={350}
            height={250}
            className="object-contain mx-auto [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
          <div className="mb-5 p-2">
            <h2 className="text-left mt-8 font-semibold text-xl dark:invert">
              1. {t("1step")}
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              {t("1stepDescription")}
            </p>
          </div>
        </div>
        {/*Call from Furnify */}
        <div className="bg-gray-50 rounded-2xl">
          <div className="p-4">
            <h2 className="text-left mt-3 font-semibold text-xl dark:invert">
              2. {t("2step")}
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              {t("2stepDescription")}
            </p>
          </div>
          <Image
            src="/assets/call.png"
            alt="Call"
            width={300}
            height={200}
            className="object-contain mx-auto [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
        </div>
        {/*Subscription*/}
        <div className="bg-gray-50 p-2 rounded-2xl">
          <Image
            src="/assets/16.png"
            alt="Contact Us"
            width={350}
            height={250}
            className="object-contain mx-auto [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
          <div className="mb-5 p-2">
            <h2 className="text-left mt-8 font-semibold text-xl dark:invert">
              3. {t("3step")}
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              {t("3stepDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
