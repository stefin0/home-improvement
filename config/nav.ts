import { services } from "./services";

export type NavLink = {
  title: string;
  value: string;
  subLinks: {
    href: string;
    text: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    title: "Services",
    value: "item-1",
    subLinks: [
      { href: "/services", text: "All Services" },
      ...services.map((service) => ({
        href: service.href,
        text: service.title,
      })),
    ],
  },
  {
    title: "About",
    value: "item-2",
    subLinks: [
      { href: "/about-us", text: "About Us" },
      { href: "/testimonials", text: "Testimonials" },
      { href: "/gallery", text: "Gallery" },
    ],
  },
  {
    title: "Careers",
    value: "item-3",
    subLinks: [{ href: "/careers", text: "Careers" }],
  },
  {
    title: "Support",
    value: "item-4",
    subLinks: [
      { href: "/contact", text: "Contact Us" },
      { href: "/faq", text: "FAQ" },
    ],
  },
];
