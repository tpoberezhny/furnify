"use client";

import FAQItem from "./FaqItem";
import { FAQItemProps } from "@/app/lib/interface";
import { useTranslations } from "next-intl";

export default function Faq() {
  const t = useTranslations("faq");
  const faqData: FAQItemProps[] = [
    {
      question: t("1question"),
      answer: t("1answer"),
    },
    {
      question: t("2question"),
      answer: t("2answer"),
    },
    {
      question: t("3question"),
      answer: t("3answer"),
    },
    {
      question: t("4question"),
      answer: t("4answer"),
    },
    {
      question: t("5question"),
      answer: t("5answer"),
    },
    {
      question: t("6question"),
      answer: t("6answer"),
    },
    {
      question: t("7question"),
      answer: t("7answer"),
    },
  ];

  return (
    <div
      id="faq"
      className="relative mt-20 px-4 mx-auto max-w-6xl scroll-mt-20"
    >
      <div className="text-center mb-10">
        <h1 className="title">
          FA
          <span className="text-primary">Q</span>
        </h1>
      </div>
      {faqData.map((children, index) => (
        <FAQItem
          key={index}
          question={children.question}
          answer={children.answer}
        />
      ))}
    </div>
  );
}
