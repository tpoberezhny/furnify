import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "@lib/sanity";
import type { PortableTextBlock } from "@portabletext/react";

export const revalidate = 60;

interface PrivacyData {
  title: string;
  content: PortableTextBlock[];
}

export default async function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  const documentType = params.locale === "cz" ? "privacyCZ" : "privacy";
  const query = groq`
    *[_type == "${documentType}"][0]{
      title,
      content
    }
  `;

  const privacy: PrivacyData = await client.fetch(query);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="prose lg:prose-xl dark:invert mt-16">
        <h1 className="">{privacy.title}</h1>
        <PortableText value={privacy.content} />
      </article>
    </main>
  );
}
