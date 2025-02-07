"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { TypeWriter } from "../lib/interface";
import { useState } from "react";

export default function Home() {
  const TypeWriterOptions: TypeWriter = {
    strings: ["office, hotel and home"],
    autoStart: true,
    loop: false,
    deleteSpeed: Infinity,
    delay: 50,
    cursor: "_",
  };

  const [activeHover, setActiveHover] = useState<number | null>(null);

  const interactiveCircles = [
    {
      id: 1,
      top: "47.3%",
      left: "14%",
      type: "Armchair",
      title: "Ekenaset - IKEA",
      priceRent: "415 Kč/month",
    },
    {
      id: 2,
      top: "27%",
      left: "43%",
      type: "Chair",
      title: "AlzaErgo Chair Wave 1",
      priceRent: "415 Kč/month",
    },
    {
      id: 3,
      top: "30.3%",
      left: "57%",
      type: "Desk",
      title: "AlzaErgo ET5 AiO Essential",
      priceRent: "415 Kč/month",
    },
    {
      id: 4,
      top: "69%",
      left: "51.5%",
      type: "Bed",
      title: "Brimnes - IKEA",
      priceRent: "725 Kč/month",
    },
    {
      id: 5,
      top: "73%",
      left: "93%",
      type: "Storage Cabinet",
      title: "Walpole - Beliani",
      priceRent: "258 Kč/month",
    },
  ];

  return (
    <div className="relative mt-20 text-center px-4 mx-auto max-w-6xl">
      <div className="relative z-10">
        <h1 className="title">
          Furnish your
          <br />
          <span className="text-primary">
            <Typewriter options={TypeWriterOptions} />
          </span>
          with subscription
        </h1>
        <h3 className="customTopMargin description-text dark:invert">
          Provide your spaces with stylish, ergonomic furniture on a flexible
          subscription model
          <br /> no upfront costs, easy upgrades, and hassle-free maintenance.
        </h3>
      </div>

      <div className="relative md:-mt-10 mt-6 max-w-6xl mx-auto">
        <div className="relative w-full aspect-[1312/724] rounded-xl ">
          <Image
            src="/assets/homeSelection.png"
            alt="home"
            fill
            className="object-cover mx-auto md:mt-0 md:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
            priority
          />

          {/* Interactive Circles */}
          {interactiveCircles.map((circle) => (
            <div
              key={circle.id}
              className="absolute"
              style={{ top: circle.top, left: circle.left }}
            >
              {/* The hotspot circle */}
              <div
                className="w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center z-10"
                onMouseEnter={() => setActiveHover(circle.id)}
                onMouseLeave={() => setActiveHover(null)}
                onClick={() =>
                  // Toggle tooltip on click for mobile: if already active, hide it.
                  setActiveHover(activeHover === circle.id ? null : circle.id)
                }
              ></div>

              {/* Tooltip/modal that appears under the circle */}
              {activeHover === circle.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-50 rounded z-[51]">
                  <p className="mainImageType text-center dark:invert">{circle.type}</p>
                  <p className="mainImageTitle text-center p-1 mb-1 w-full dark:invert">
                    {circle.title}
                  </p>
                  <p className="mainImagePrices text-center dark:invert">
                    {circle.priceRent}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Brands Logos */}
      <div className="mt-6">
        <Image
          src="/assets/brandsLogoTransparent.png"
          width={1312}
          height={100}
          alt="brands"
          className="rounded-lg dark:invert opacity-40 mx-auto"
        />
      </div>
    </div>
  );
}
