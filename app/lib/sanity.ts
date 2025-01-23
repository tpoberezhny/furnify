import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilderOptions } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  apiVersion: "2023-03-25",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: ImageUrlBuilderOptions) {
  return builder.image(source);
}
