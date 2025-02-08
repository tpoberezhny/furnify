"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { itemProps } from "../lib/interface";
import { urlFor } from "../lib/sanity";

interface PricesClientProps {
  data: itemProps[];
}

export default function PricesClient({ data }: PricesClientProps) {
  const [mainTypeFilter, setMainTypeFilter] = useState<string>("all");
  const [additionalTypeFilter, setAdditionalTypeFilter] = useState<string>("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const officeAdditionalTypes = [
    { value: "chair", label: "Chair" },
    { value: "desk", label: "Desk" },
    { value: "storageCabinet", label: "Storage Cabinet" },
    { value: "entrywayCloset", label: "Entryway Closet" },
    { value: "sofa", label: "Sofa" },
    { value: "armchair", label: "Armchair" },
  ];

  const hotelHomeAdditionalTypes = [
    { value: "bed", label: "Bed" },
    { value: "entrywayCloset", label: "Entryway Closet" },
    { value: "wardrobe", label: "Wardrobe" },
    { value: "sofa", label: "Sofa" },
    { value: "armchair", label: "Armchair" },
    { value: "dresser", label: "Dresser" },
    { value: "bedsideTable", label: "Bedside Table" },
    { value: "kitchenTable", label: "Kitchen Table" },
    { value: "diningChair", label: "Dining Chair" },
  ];

  const allAdditionalTypes = [
    { value: "chair", label: "Chair" },
    { value: "desk", label: "Desk" },
    { value: "storageCabinet", label: "Storage Cabinet" },
    { value: "bed", label: "Bed" },
    { value: "wardrobe", label: "Wardrobe" },
    { value: "entrywayCloset", label: "Entryway Closet" },
    { value: "sofa", label: "Sofa" },
    { value: "armchair", label: "Armchair" },
    { value: "dresser", label: "Dresser" },
    { value: "bedsideTable", label: "Bedside Table" },
    { value: "kitchenTable", label: "Kitchen Table" },
    { value: "diningChair", label: "Dining Chair" },
  ];

  const allowedAdditionalTypes =
    mainTypeFilter === "office"
      ? officeAdditionalTypes
      : mainTypeFilter === "hotelHome"
      ? hotelHomeAdditionalTypes
      : allAdditionalTypes;

  useEffect(() => {
    const allowedValues = allowedAdditionalTypes.map((type) => type.value);
    if (additionalTypeFilter && !allowedValues.includes(additionalTypeFilter)) {
      setAdditionalTypeFilter("");
    }
  }, [mainTypeFilter, additionalTypeFilter, allowedAdditionalTypes]);

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

  const filteredData = data.filter((item) => {
    const matchedMainType =
      mainTypeFilter === "all" || item.mainType === mainTypeFilter;
    const matchedAdditionalType =
      additionalTypeFilter === "" ||
      item.additionalType === additionalTypeFilter;
    return matchedMainType && matchedAdditionalType;
  });

  return (
    <div className="max-w-5xl mt-20 text-center mx-auto">
      <h1 className="title mb-8">
        Price
        <span className="text-primary">s</span>
      </h1>
      <h3 className="description-text mb-10 md:mb-16 max-w-3xl mx-auto">
        Contact us, describe your request, and we will send you a full furniture
        catalog tailored to your needs. What you see on the website is just a
        small part of our assortment.
      </h3>
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:justify-between mb-8 space-y-5 md:space-y-0">
        {/* Main Type Filter */}
        <div className="w-full md:w-auto">
          <h3 className="font-medium text-lg mb-2 md:mb-4">
            Filter by Main Type
          </h3>
          <div className="space-x-2">
            <Button
              variant={mainTypeFilter === "all" ? "default" : "outline"}
              onClick={() => setMainTypeFilter("all")}
            >
              All
            </Button>
            <Button
              variant={mainTypeFilter === "hotelHome" ? "default" : "outline"}
              onClick={() => setMainTypeFilter("hotelHome")}
            >
              Hotel & Home
            </Button>
            <Button
              variant={mainTypeFilter === "office" ? "default" : "outline"}
              onClick={() => setMainTypeFilter("office")}
            >
              Office
            </Button>
          </div>
        </div>

        {/* Additional Type Filter */}
        <div className="w-full md:w-auto">
          <h3 className="font-medium text-lg mb-2">
            Filter by Additional Type
          </h3>
          <select
            className="p-2 border rounded-md w-full md:w-auto"
            value={additionalTypeFilter}
            onChange={(e) => setAdditionalTypeFilter(e.target.value)}
          >
            <option value="">All</option>
            {allowedAdditionalTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item, index) => (
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
              <h4 className="text-md leading-6 h-[24px] md:h-[48px] flex items-center justify-center text-center prices">
                {item.title}
              </h4>
              <h4 className="font-sm text-sm underline mt-1 prices">
                {item.brand}
              </h4>
              <p className="text-gray-500 mt-2 prices">
                {item.rentPrice} Kč / month
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
