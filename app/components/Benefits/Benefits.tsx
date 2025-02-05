import React from "react";
import BenefitCard from "./BenefitCard";
import { BenefitCardProps } from "../../lib/interface";

export default function Benefits() {
  const benefitData: BenefitCardProps[] = [
    {
      title: "Flexible Customization",
      description:
        "Give you the opportunity to upgrade or add extra furniture at any time",
      imageUrl: "assets/customization.png",
      textPosition: "top-left",
      blurTextBg: true,
    },
    {
      title: "Service",
      description: "Fix the items for the entire duration of the subscription",
      imageUrl: "assets/service.jpg",
      textPosition: "bottom-left",
      blurTextBg: true,
    },
    {
      title: "Free Delivery & Assembly",
      description: "Free Delivery and Assembly of all items",
      imageUrl: "assets/moving.jpg",
      textPosition: "top-left",
      blurTextBg: true,
    },
  ];

  return (
    <div id="benefits" className="mt-10 lg:mt-20 text-center max-w-6xl mx-auto">
      <div>
        <h1 className="title">
          The <span className="text-primary">smart</span> choice for
          <br />
          your workspace
        </h1>
        <h3 className="description-text customTopMargin dark:invert">
          Our product is not only about a different way of using furniture but
          also about a range of advantages
          <br />
          that allow you to <span className="text-primary">
            stop worrying
          </span>{" "}
          about furniture altogether
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
