import React from "react";
import BenefitCard from "./BenefitCard";
import { BenefitCardProps } from "@lib/interface";

export default function Benefits() {
  const benefitData: BenefitCardProps[] = [
    {
      title: "Saving Money",
      description:
        "Low initial costs for cash flow-oriented individuals and businesses.",
      imageUrl: "assets/moneySavingBenefit.png",
      textPosition: "top-left",
      blurTextBg: true,
    },
    {
      title: "More Cost-Effective Than Coworking",
      description:
        "If you have a team of 5 or more people, an office space furnished with our furniture will cost you up to 40% less than a coworking space.",
      imageUrl: "assets/costEffective.png",
      textPosition: "bottom-left",
      blurTextBg: true,
    },
    {
      title: "Free Delivery and Assembly",
      description:
        "Our team will come to your location, carry the furniture upstairs, and assemble it completely free of charge.",
      imageUrl: "assets/delivery.png",
      textPosition: "top-left",
      blurTextBg: true,
    },
  ];

  return (
    <div id="benefits" className="mt-10 lg:mt-20 text-center max-w-6xl mx-auto scroll-mt-20">
      <div>
        <h1 className="title">
          The <span className="text-primary">smart</span> choice for
          <br />
          your workspace
        </h1>
        <h3 className="description-text customTopMargin dark:invert">
          Our product is not only about a different way of using furniture but
          also about a range of <span className="text-primary dark:invert">advantages </span>
          <br className="hidden md:block"/>
          that allow you to stop worrying about furniture altogether
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 justify-items-center ">
        {benefitData.map((card, index) => (
          <BenefitCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
