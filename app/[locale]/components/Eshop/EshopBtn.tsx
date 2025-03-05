"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@components/ui/button";

export default function EshopBtn() {
  const params = useParams();
  const currentLocale = params.locale || "en";

  return (
    <Link href={`/${currentLocale}/eshop`}>
      <Button className="customTopMargin p-6 rounded-2xl font-medium text-md" title="Prices">E-shop</Button>
    </Link>
  )
}