import { StaticImageData } from "next/image";
import windows from "@/public/images/services/windows.jpg";
import roofing from "@/public/images/services/roofing.jpg";
import siding from "@/public/images/services/siding.jpg";
import doors from "@/public/images/services/doors.jpg";
import insulation from "@/public/images/services/insulation.jpg";
import accessories from "@/public/images/services/accessories.jpg";

export type Service = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

export const services: Service[] = [
  {
    title: "Windows",
    description:
      "Energy-efficient windows that enhance your home's beauty and reduce your energy bills.",
    href: "/services/windows",
    image: windows,
  },
  {
    title: "Roofing",
    description:
      "Protect your most valuable asset with a durable, high-quality roof.",
    href: "/services/roofing",
    image: roofing,
  },
  {
    title: "Siding",
    description:
      "Transform and protect your home's exterior with our beautiful and resilient siding options.",
    href: "/services/siding",
    image: siding,
  },
  {
    title: "Doors",
    description:
      "Make a great first impression with a stylish and secure new entry door.",
    href: "/services/doors",
    image: doors,
  },
  {
    title: "Insulation",
    description:
      "Improve your home's comfort and significantly lower your energy costs.",
    href: "/services/insulation",
    image: insulation,
  },
  {
    title: "Accessories",
    description:
      "Complete your home's transformation with the perfect finishing touches, including custom trim, gutters, and decorative accents.",
    href: "/services/accessories",
    image: accessories,
  },
];
