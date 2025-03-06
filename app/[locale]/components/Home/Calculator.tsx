"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

type CalculatorProps = {
  onClose: () => void;
};

export default function Calculator({ onClose }: CalculatorProps) {
  const t = useTranslations("calculator");
  const [numPeople, setNumPeople] = useState<number>(3);
  console.log(numPeople);

  const coworkingPrice = Number.isNaN(numPeople) ? 0 : numPeople * 6000;
  const subscriptionPrice = Number.isNaN(numPeople)
    ? 0
    : numPeople === 1
    ? 8000
    : numPeople === 2
    ? 12000
    : numPeople * 4600;

  return (
    <div className="fixed inset-0 md:inset-auto md:absolute z-50 flex items-center justify-center md:top-[calc(35%+10px)] md:right-6 bg-black/50 bg-opacity-50 md:bg-transparent">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg md:shadow-none max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">{t("title")}</h2>
        <h3 className="text-base font-semibold mb-4">{t("description")}</h3>
        <div className="mb-4">
          <label
            htmlFor="numPeople"
            className="block text-base font-medium mb-1"
          >
            {t("numberOfPeople")}
          </label>
          <input
            id="numPeople"
            type="number"
            min="1"
            max="200"
            value={numPeople}
            onChange={(e) => setNumPeople(parseInt(e.target.value))}
            className="w-full border rounded px-3 py-2 text-center dark:invert"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary text-white p-4 rounded text-center">
            <p className="text-sm">{t("rent")}</p>
            <p className="font-bold text-lg">
              {subscriptionPrice} {t("czk")}
            </p>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded text-center">
            <p className="text-sm">{t("coworking")}</p>
            <p className="font-bold text-lg">
              {coworkingPrice} {t("czk")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
