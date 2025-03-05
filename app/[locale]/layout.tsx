import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

import ClientProviders from "./components/Nav/ClientProviders";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Nav/Footer";
import { Analytics } from "@vercel/analytics/react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furnify",
  description: "Rent your furnitures with Furnify",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string | undefined };
}) {
  const resolvedParams = await Promise.resolve(props.params);
  const locale = resolvedParams.locale || "en";

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ClientProviders>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NavBar />
            <main className="max-w-8xl mx-auto py-5">
              {props.children}
              <Analytics />
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
