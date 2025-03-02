import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "@lib/sanity";
import type { PortableTextBlock } from "@portabletext/react";

export const revalidate = 60;

interface TermsData {
  title: string;
  content: PortableTextBlock[];
}

export default async function TermsPage(/**{params}: {params: {locale: string}}*/) {
  
  // const documentType = params.locale === "cz" ? "termsCz" : "termsEn";
  /**Then pass docum,entType to groq (terms) */
  const query = groq`
    *[_type == "terms"][0]{
      title,
      content
    }
  `;

  const terms: TermsData = await client.fetch(query);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="prose lg:prose-xl mt-16 dark:invert">
        <h1 className="text-center">{terms.title}</h1>
        <PortableText value={terms.content} />
      </article>
    </main>
  );
}
