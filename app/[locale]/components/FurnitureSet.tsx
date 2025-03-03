"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

type FurnitureSetProps = {
  id: number;
  image: string;
  rentalCost: number;
  fullCost: number;
};

const furnitureSets: FurnitureSetProps[] = [
  {
    id: 1,
    image: "/assets/1set.png",
    rentalCost: 200,
    fullCost: 1500,
  },
  {
    id: 2,
    image: "/assets/2set.png",
    rentalCost: 300,
    fullCost: 2000,
  },
  {
    id: 3,
    image: "/assets/3set.png",
    rentalCost: 400,
    fullCost: 2500,
  },
];

export default function FurnitureSets() {
  const t = useTranslations("furnitureSets");
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto">
      {furnitureSets.map((furnitureSet) => (
        <div
          key={furnitureSet.id}
          className="relative group cursor-pointer"
          onClick={() => handleToggle(furnitureSet.id)}
        >
          <Image
            src={furnitureSet.image}
            alt="furniture set"
            width={350}
            height={250}
            className="rounded-xl"
          />
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-500 bg-opacity-65 text-white rounded-xl transition-opacity duration-300 ${
              activeId === furnitureSet.id
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <p className="text-sm">
              {t("rent")} {furnitureSet.rentalCost} {t("rentPrice")}
            </p>
            <p className="text-sm">
              {t("buy")} {furnitureSet.fullCost} {t("fullPrice")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
