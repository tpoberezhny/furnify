"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

type FurnitureSetProps = {
  id: number;
  name: string;
  image: string;
  rentalCost: number;
  fullCost: number;
  whatIncludes?: { quantity: number; key: string }[];
};

const furnitureSets: FurnitureSetProps[] = [
  {
    id: 1,
    image: "/assets/1set.png",
    rentalCost: 950,
    fullCost: 10500,
    name: "Basic",
    whatIncludes: [
      { quantity: 1, key: "includes.table" },
      { quantity: 1, key: "includes.chair" },
    ],
  },
  {
    id: 2,
    image: "/assets/2set.png",
    rentalCost: 1615,
    fullCost: 17750,
    name: "Ergo",
    whatIncludes: [
      { quantity: 1, key: "includes.table" },
      { quantity: 1, key: "includes.chair" },
      { quantity: 1, key: "includes.cabinet" },
    ],
  },
  {
    id: 3,
    image: "/assets/3set.png",
    rentalCost: 1409,
    fullCost: 15500,
    name: "CEO",
    whatIncludes: [
      { quantity: 1, key: "includes.table" },
      { quantity: 1, key: "includes.chair" },
    ],
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
          className="cursor-pointer"
          onClick={() => handleToggle(furnitureSet.id)}
        >
          {/* Image and overlay container */}
          <div className="relative group">
            <Image
              src={furnitureSet.image}
              alt={furnitureSet.name}
              width={400}
              height={250}
              className="rounded-t-xl"
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 to-black/20 text-white rounded-t-xl transition-opacity duration-300  ${
                activeId === furnitureSet.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {/* Top overlay: Name and what's included */}
              <div className="flex flex-col items-center pt-4">
                <h3 className="text-4xl font-bold">{furnitureSet.name}</h3>
                <h4 className="text-sm">Set</h4>
                {furnitureSet.whatIncludes && (
                  <p className="text-base mt-6">
                    {furnitureSet.whatIncludes
                      .map((item) => `${t(item.key)}`)
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Bottom cost section*/}
          <div className="flex justify-between gap-2">
            <span className="bg-primary text-white px-5 md:px-1 lg:px-3 py-2 md:py-1 rounded-bl-xl rounded-br-xl text-sm w-[70%]">
              {t("rent")}
              <br />
              {furnitureSet.rentalCost} {t("rentPrice")}
            </span>
            <span className="bg-orange-500 text-white px-5 md:px-2 lg:px-3 py-2 md:py-1 rounded-bl-xl rounded-br-xl text-sm w-[50%]">
              {t("buy")}
              <br />
              {furnitureSet.fullCost} {t("fullPrice")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
