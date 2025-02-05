"use client";

import FAQItem from "./FaqItem";

export default function Faq() {
  const faqData = [
    {
      question: "What is Furnify and how does it work?",
      answer:
        "Furnify is a company that allows you to acquire furniture through a subscription by paying a monthly fee. Choose the furniture you like, contact us, and we will send you an offer. If you wanted to purchase specific furniture that you !dont! see on our website, send us a link to the item, and we will provide it to you on a subscription basis.",
    },
    {
      question:
        "What types of furniture can be rented on a subscription basis?",
      answer:
        "With our subscription service, you can rent furniture for offices, hotels, or homes: office chairs, office desks, under-desk storage cabinets, beds, wardrobes, entryway closets, sofas, armchairs, dressers, bedside tables, kitchen tables, and dining chairs.",
    },
    {
      question:
        "Why is office furniture on subscription more advantageous than traditional purchasing?",
      answer:
        "With our service, you don't need to spend a large sum of money to set up a new office, open a hotel, or move into a new apartment. You only pay a monthly fee, which is much more convenient. Additionally, we provide furniture maintenance for minor repairs, as well as free delivery and assembly.",
    },
    {
      question:
        "Is it possible to upgrade or add new furniture during an active subscription?",
      answer:
        "Yes, you can upgrade your furniture or add new pieces during your subscription.",
    },
    {
      question: "Who handles delivery and assembly?",
      answer:
        "Delivery and assembly of furniture are handled by our company free of charge.",
    },
    {
      question:
        "Is it possible to cancel the subscription, and what are the terms?",
      answer: `The only condition on our part is a minimum subscription of 12 months. You can cancel your subscription at any time before the term ends by paying the remaining rental balance. For example, if you've been with us for 10 months, to terminate, you would need to pay for the remaining 2 months.`,
    },
  ];

  return (
    <div id="faq" className="relative mt-20 px-4 mx-auto max-w-6xl">
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
