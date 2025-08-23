export type StrapiMedia = {
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
};

export type Hero = {
  heading: string;
  subtitle: string;
  backgroundVideo: StrapiMedia;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: StrapiMedia;
};
