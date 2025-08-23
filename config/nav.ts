import { getServicesForNav } from "@/lib/strapi";

export type NavLink = {
  title: string;
  value: string;
  subLinks: {
    href: string;
    text: string;
  }[];
};

export async function getNavLinks(): Promise<NavLink[]> {
  const services = await getServicesForNav();

  return [
    {
      title: "Services",
      value: "item-1",
      subLinks: [{ href: "/services", text: "All Services" }, ...services],
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
}
