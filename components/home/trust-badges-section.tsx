import { siteConfig } from "@/config/site";
import bbb from "@/public/images/home/bbb-a-plus.svg";
import licensedBondedInsured from "@/public/images/home/licensed-bonded-insured.svg";
import fiveStars from "@/public/images/home/five-stars.svg";
import satisfactionGuarantee from "@/public/images/home/satisfaction-guarantee.svg";
import Image from "next/image";
import { PageSection, PageSectionContent } from "@/components/ui/page-section";

const trustSignals = [
  {
    alt: "Better Business Bureau A+ Rating",
    image: bbb,
    text: (
      <>
        Better Business Bureau <span className="underline">A+ Rating</span>
      </>
    ),
    href: siteConfig.bbbHref,
  },
  {
    alt: "Licensed, bonded, insured",
    image: licensedBondedInsured,
    text: (
      <>
        Licensed, bonded, and insured:{" "}
        <span className="underline">({siteConfig.licensing.display})</span>
      </>
    ),
    href: siteConfig.licensing.href,
  },
  {
    alt: "5-star reviews",
    image: fiveStars,
    text: (
      <>
        Over {siteConfig.reviewCount}{" "}
        <span className="underline">5-star reviews</span>
      </>
    ),
    href: siteConfig.reviewsHref,
  },
  {
    alt: "100% Satisfaction Guarantee",
    image: satisfactionGuarantee,
    text: (
      <>
        100% <span className="underline">Satisfaction Guarantee</span>
      </>
    ),
    href: siteConfig.guaranteeHref,
  },
];

export default function TrustBadgesSection() {
  return (
    <PageSection>
      <PageSectionContent>
        <ul className="mx-auto grid max-w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-4">
          {trustSignals.map((trustSignal) => (
            <li
              key={trustSignal.alt}
              className="hover:bg-accent max-w-[12rem] rounded-md p-2 transition-all"
            >
              <a
                href={trustSignal.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={trustSignal.image}
                  alt={trustSignal.alt}
                  className="mx-auto max-w-[8rem] rounded-md"
                />
                <p className="mt-4 text-center text-balance">
                  {trustSignal.text}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </PageSectionContent>
    </PageSection>
  );
}
