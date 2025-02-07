import { Button } from "@/components/ui/button";
import { client } from "../lib/sanity";
import { carusel } from "../lib/interface";
import SwiperComponent from "./SwiperComponent";
import Link from "next/link";

async function getCaruselData() {
  const query = `*[_type == "furnify"] | order(_createdAt desc) {
    title,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Explore() {
  const data: carusel[] = await getCaruselData();

  return (
    <div className="relative mt-10 lg:mt-20 text-center scroll-mt-20" id="furniture">
      <h1 className="title">
        Everything you need
        <br />
        for <span className="text-primary">work</span> and <span className="text-primary">life</span>
      </h1>
      <h3 className="description-text customTopMargin dark:invert">
        Explore a wide selection of furniture for offices, hotels,
        <br /> and homes, designed to combine style, functionality, and comfort
        for any space
      </h3>
      <Link href="/prices">
        <Button className="customTopMargin p-6 rounded-2xl font-medium text-md" title="Prices">
          Prices
        </Button>
      </Link>
      <SwiperComponent data={data} />
    </div>
  );
}
