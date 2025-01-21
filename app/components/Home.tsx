import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mt-20 text-center">
      <div className="relative">
        <h1 className="title">
          Furnish your 
          <br />
           office, hotel and home
          <br />
          with subscription furniture
        </h1>
        <h3 className="mt-10 description-text dark:invert">
          Provide your spaces with stylish, ergonomic furniture
          <br /> on a flexible subscription model — no upfront costs,
         easy upgrades, and hassle-free maintenance.
        </h3>
      </div>

      <div className="relative mt-10">
        <Image
          src="/assets/homeSelection.png"
          width={1056}
          height={724}
          alt="home"
          className="rounded-xl mx-auto"
          priority
        />
      </div>
      {/* Brands Logos */}
      <div className="mt-6">
        <Image src="/assets/brandsLogoTransparent.png"
        width={1056}
        height={724}
        alt="brands"
        className="rounded-lg dark:invert opacity-40"/>
      </div>
    </div>
  );
}