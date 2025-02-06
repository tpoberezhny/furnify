"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { TypeWriter } from "../lib/interface";

export default function Home() {
  const TypeWriterOptions: TypeWriter = {
    strings: ["office, hotel and home"],
    autoStart: true,
    loop: false,
    deleteSpeed: Infinity,
    delay: 50,
    cursor: "_",
  };

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

      <div className="relative md:-mt-10">
        <Image
          src="/assets/homeSelection.png"
          width={1312}
          height={724}
          alt="home"
          className="rounded-xl mx-auto mt-6 md:mt-0 md:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          priority
        />
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
