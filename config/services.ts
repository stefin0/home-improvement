import { StaticImageData } from "next/image";
import painting from "@/public/images/services/painting.jpg";
import roofing from "@/public/images/services/roofing.jpg";
import windows from "@/public/images/services/windows.jpg";

export type Service = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

export const services: Service[] = [
  {
    title: "Painting",
    description:
      "Enhance your home's beauty and protect its surfaces with a fresh, expertly applied coat of paint.",
    href: "/services/painting",
    image: painting,
  },
  {
    title: "Roofing",
    description:
      "Protect your most valuable asset with a durable, high-quality roof.",
    href: "/services/roofing",
    image: roofing,
  },
  {
    title: "Windows",
    description:
      "Energy-efficient windows that enhance your home's beauty and reduce your energy bills.",
    href: "/services/windows",
    image: windows,
  },
];
