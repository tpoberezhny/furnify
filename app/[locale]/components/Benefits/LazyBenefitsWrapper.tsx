"use client";

import dynamic from "next/dynamic";

const LazyBenefits = dynamic(() => import("./Benefits"), {
  ssr: false,
  loading: () => <p className="text-center mt-5 mb-5">Loading benefits</p>,
});

export default LazyBenefits;
