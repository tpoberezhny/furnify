import { client } from "../lib/sanity";
import PricesClient from "../components/PricesClient";

async function getData() {
  const query = `*[_type == "furnify"] | order(_createdAt desc) {
    title,
    brand,
    titleImage,
    rentPrice,
    mainType,
    additionalType
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Prices() {
  const data = await getData();

  return <PricesClient data={data} />;
}
