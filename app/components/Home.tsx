"use client"

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { TypeWriter } from "../lib/interface";

export default function Home() {

  
  const TypeWriterOptions:TypeWriter = {
    strings: ["office, hotel and home"],
    autoStart: true,
    loop: false,
    deleteSpeed: Infinity,
    delay: 50,
    cursor: "_"
  }

  return (
    <div className="relative mt-20 text-center px-4 mx-auto max-w-6xl">
      <div className="relative">
        <h1 className="title">
          Furnish your 
          <br />
          <span className="text-primary">
            <Typewriter options={TypeWriterOptions} />
          </span>
       
          with subscription
        </h1>
        <h3 className="customTopMargin description-text dark:invert">
          Provide your spaces with stylish, ergonomic furniture on a flexible subscription model
          <br /> no upfront costs, easy upgrades, and hassle-free maintenance.
        </h3>
      </div>

      <div className="relative customTopMargin">
        <Image
          src="/assets/homeSelection.png"
          width={1312}
          height={724}
          alt="home"
          className="rounded-xl mx-auto"
          priority
        />
      </div>
      {/* Brands Logos */}
      <div className="mt-6">
        <Image src="/assets/brandsLogoTransparent.png"
        width={1312}
        height={100}
        alt="brands"
        className="rounded-lg dark:invert opacity-40 mx-auto"/>
      </div>
    </div>
  );
}