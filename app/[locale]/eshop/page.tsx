import { client } from "@lib/sanity";
import PricesClient from "../components/Eshop/PricesClient";
import type { itemProps } from "@lib/interface";

export const revalidate = 60;

async function getData(props: {
  params: { locale: string };
}): Promise<itemProps[]> {
  const { locale } = await props.params;
  const documentType = locale === "cz" ? "furnifyCZ" : "furnify";
  const query = `*[_type == "${documentType}"] | order(rentPrice asc) {
    title,
    titleImage,
    rentPrice,
    price,
    content,
  }`;

  const data: itemProps[] = await client.fetch(query);
  return data;
}

export default async function Prices({
  params,
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  const data = await getData({ params });
  return <PricesClient data={data} />;
}
