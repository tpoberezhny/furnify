"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { TypeWriter } from "@lib/interface";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Calculator from "./Calculator";

export default function Home() {
  const t = useTranslations("home");
  const TypeWriterOptions: TypeWriter = {
    strings: [t("typeWriterTitle")],
    autoStart: true,
    loop: false,
    deleteSpeed: Infinity,
    delay: 50,
    cursor: "_",
  };

  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [isHoveredEnabled, setIsHoveredEnabled] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hoverQuery = window.matchMedia("(hover: hover)");
      setIsHoveredEnabled(hoverQuery.matches);
      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsHoveredEnabled(e.matches);
      };
      hoverQuery.addEventListener("change", handleMediaChange);
      return () => hoverQuery.removeEventListener("change", handleMediaChange);
    }
  }, []);

  const interactiveCircles = [
    {
      id: 1,
      top: "28%",
      left: "7.2%",
      title: "The Board",
      priceRent: "590",
    },
    {
      id: 2,
      top: "51.5%",
      left: "16.5%",
      title: "Flexi Table",
      priceRent: "535",
    },
    {
      id: 3,
      top: "59%",
      left: "32.2%",
      title: "Ergo Chair",
      priceRent: "690",
    },
    {
      id: 4,
      top: "59.5%",
      left: "48.7%",
      title: "X Container",
      priceRent: "255",
    },
  ];

  return (
    <div className="relative mt-20 text-center px-4 mx-auto max-w-6xl">
      <div className="relative z-10">
        <h1 className="title">
          {t("title")}
          <br />
          <span className="text-primary">
            <Typewriter options={TypeWriterOptions} />
          </span>
        </h1>
        <h3 className="customTopMargin description-text dark:invert">
          {t("description1")}
          <br /> {t("description2")}
        </h3>
      </div>

      <div className="relative md:-mt-10 mt-6 max-w-6xl mx-auto">
        <div className="relative w-full aspect-[1312/724] ">
          <Image
            src="/assets/homeSelection.png"
            alt="home"
            fill
            className="object-cover rounded-xl mx-auto md:mt-0 md:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
            priority
          />
          <div className="absolute top-5 md:top-20 right-2 md:right-8 z-1">
            <button
              onClick={() => setShowCalculator(true)}
              className="bg-primary text-white px-4 py-2 rounded-xl shadow text-sm md:text-xl animate-pulseShort"
            >
              {t("calculate")}
            </button>
          </div>

          {/* Interactive Circles */}
          {interactiveCircles.map((circle) => (
            <div
              key={circle.id}
              className="absolute"
              style={{ top: circle.top, left: circle.left }}
            >
              {/* The hotspot circle */}
              <div
                className="w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center z-10"
                onMouseEnter={
                  isHoveredEnabled ? () => setActiveHover(circle.id) : undefined
                }
                onMouseLeave={
                  isHoveredEnabled ? () => setActiveHover(null) : undefined
                }
                onClick={() =>
                  // Toggle tooltip on click for mobile: if already active, hide it.
                  setActiveHover(activeHover === circle.id ? null : circle.id)
                }
              ></div>

              {/* Tooltip/modal that appears under the circle */}
              {activeHover === circle.id && (
                <div className="absolute md:top-full top-1/3 left-1/2 transform -translate-x-1/2 mt-2 md:py-1 bg-gray-50 rounded z-[51]">
                  <p className="mainImageTitle text-center md:p-1 md:mb-0 w-full dark:invert">
                    {circle.title}
                  </p>
                  <p className="mainImagePrices text-center dark:invert">
                    {circle.priceRent} {t("priceRent")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-row justify-center gap-2 max-w-4xl items-center mx-auto py-3">
        <h2 className="benefits-description">{t("benefit1")}</h2> |
        <h2 className="benefits-description">{t("benefit2")}</h2> |
        <h2 className="benefits-description">{t("benefit3")}</h2>
      </div>
      {showCalculator && (
        <Calculator onClose={() => setShowCalculator(false)} />
      )}
    </div>
  );
}
