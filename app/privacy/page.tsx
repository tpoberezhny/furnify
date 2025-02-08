import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { client } from '../lib/sanity';

export const revalidate = 60;

interface PrivacyData {
  title: string;
  content: any[];
}

export default async function PrivacyPage() {
  const query = groq`
    *[_type == "privacy"][0]{
      title,
      content
    }
  `;
  
  const privacy: PrivacyData = await client.fetch(query);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="prose lg:prose-xl mt-16">
        <h1 className=''>{privacy.title}</h1>
        <PortableText value={privacy.content} />
      </article>
    </main>
  );
}
