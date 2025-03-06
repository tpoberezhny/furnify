import { ImageUrlBuilderOptions } from "@sanity/image-url/lib/types/types";
import type { PortableTextBlock } from "@portabletext/react";

export interface carusel {
  title: string;
  titleImage: ImageUrlBuilderOptions;
}

export interface TypeWriter {
  strings: string[];
  autoStart: boolean;
  loop: boolean;
  deleteSpeed: number;
  delay: number;
  cursor: string;
}

export interface itemProps {
  title: string;
  brand?: string;
  titleImage: ImageUrlBuilderOptions;
  rentPrice: number;
  mainType?: string;
  additionalType?: string;
  content?: PortableTextBlock[];
  price: number;
  description?: string[];
}

export interface BenefitCardProps {
  title: string;
  description: string;
  imageUrl: string;
  textPosition?: "top-left" | "bottom-left" | "center";
  blurTextBg?: boolean;
}

export type FAQItemProps = {
  question: React.ReactNode;
  answer: React.ReactNode;
};