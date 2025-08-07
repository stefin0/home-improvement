import { siFacebook, siInstagram, siYoutube } from "simple-icons";

const CSLB_LICENSE_NUMBER = 123456;
const FOUNDING_YEAR = 2000;
const NAME = "Company Name";
const URL = "https://home-improvement-tau.vercel.app/";

const companyNameForHref = NAME.replaceAll(" ", "+");

export const siteConfig = {
  name: NAME,
  description:
    "Top-rated home remodeling services in San Diego, specializing in windows, roofing, and more.",
  url: URL,
  yearFounded: FOUNDING_YEAR,
  yearsOfExperience: new Date().getFullYear() - FOUNDING_YEAR,
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
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: siYoutube,
    },
  ],
  contact: {
    phone: "+1 (555) 555-5555",
    email: "contact@example.com",
    address: "1234 Innovation Drive, San Diego, CA 92101",
    serviceArea: "Proudly serving the greater San Diego County.",
  },
  licensing: {
    number: CSLB_LICENSE_NUMBER,
    info: "Licensed, Bonded & Insured",
    href: `https://www.cslb.ca.gov/${CSLB_LICENSE_NUMBER}`,
    display: `CSLB #${CSLB_LICENSE_NUMBER}`,
  },
  bbbHref: "https://www.bbb.org/",
  reviewsHref: `https://www.google.com/search?q=${companyNameForHref}+Reviews`,
  reviewCount: 250,
  guaranteeHref: `${URL}faq`,
};
