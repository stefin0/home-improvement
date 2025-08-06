import { siFacebook, siInstagram } from "simple-icons";

export const siteConfig = {
  name: "Company Name",
  description:
    "Top-rated home remodeling services in San Diego, specializing in windows, roofing, and more.",
  url: "https://home-improvement-tau.vercel.app/",
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: siFacebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: siInstagram,
    },
  ],
  contact: {
    phone: "+1 (555) 555-5555",
    email: "contact@example.com",
    address: "1234 Innovation Drive, San Diego, CA 92101",
    serviceArea: "Proudly serving the greater San Diego County.",
  },
  licensing: {
    licenseNumber: "CSLB #123456",
    info: "Licensed, Bonded & Insured",
  },
};
