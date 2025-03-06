"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { itemProps } from "@lib/interface";
import { urlFor } from "@lib/sanity";
import { useTranslations } from "next-intl";
import { PortableText } from "@portabletext/react";

interface PricesClientProps {
  data: itemProps[];
}

export default function PricesClient({ data }: PricesClientProps) {
  const t = useTranslations("eshop");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mt-20 text-center mx-auto px-4">
      <h1 className="title mb-8">
        <span className="text-primary">E</span>-Shop
      </h1>
      <h3 className="description-text mb-10 md:mb-16 max-w-3xl mx-auto dark:invert">
        {t("description")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center bg-gray-100 dark:bg-gray-800"
          >
            <div className="w-full h-[150px] md:h-[200px] flex justify-center items-center bg-gray-200 rounded-md ">
              <Image
                src={urlFor(item.titleImage).url()}
                alt={item.title}
                width={200}
                height={200}
                className="object-contain rounded-md w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold leading-6 h-[24px] md:h-[48px] flex items-center justify-center text-center prices">
                {item.title}
              </h4>
              <div className="text-sm justify-center items-center flex h-[110px] md:h-[140px] font-montserrat ">
                <PortableText value={item.content ?? []} />
              </div>
              <p className="text-white mt-2 prices bg-primary rounded-xl">
                {item.rentPrice} {t("rent")}
              </p>
              <p className="text-white mt-2 prices bg-orange-500 rounded-xl">
                {item.price} {t("czk")}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-5 py-5 px-4 rounded-full shadow-lg transition-all duration-300"
        >
          <ArrowUp size={35} />
        </Button>
      )}
    </div>
  );
}
