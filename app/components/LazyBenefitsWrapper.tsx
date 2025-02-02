"use client";

import dynamic from "next/dynamic";

const LazyBenefits = dynamic(() => import('./Benefits'), {
  ssr: false,
  loading: () => <p>Loading benefits</p>,
});

export default LazyBenefits;