import { ImageUrlBuilderOptions } from "@sanity/image-url/lib/types/types";

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
  titleImage: ImageUrlBuilderOptions;
  rentPrice: number;
  mainType: string;
  additionalType: string;
}