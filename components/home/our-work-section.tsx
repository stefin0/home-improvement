import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";
import windowsBefore from "@/public/images/before-after/windows/before-001.jpg";
import windowsAfter from "@/public/images/before-after/windows/after-001.jpg";
import roofingBefore from "@/public/images/before-after/roofing/before-001.jpg";
import roofingAfter from "@/public/images/before-after/roofing/after-001.jpg";
import sidingBefore from "@/public/images/before-after/siding/before-001.jpg";
import sidingAfter from "@/public/images/before-after/siding/after-001.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";

const ourWorkData = [
  {
    service: "Windows",
    before: windowsBefore,
    after: windowsAfter,
    description:
      "This project involved a complete overhaul of the home's windows, replacing old, inefficient units with modern, energy-efficient models. The new windows not only enhance the home's curb appeal but also provide significant savings on energy bills.",
    testimonial: {
      quote:
        "We were blown away by the difference the new windows made. Our home is quieter, more comfortable, and our energy bills have dropped significantly. The team was professional, efficient, and a pleasure to work with.",
      client: "John and Jane Doe",
    },
  },
  {
    service: "Roofing",
    before: roofingBefore,
    after: roofingAfter,
    description:
      "This project involved replacing an old, worn-out roof with a durable, high-quality new one. The new roof not only looks great but also provides superior protection from the elements, ensuring the home stays safe and dry for years to come.",
    testimonial: {
      quote:
        "The new roof is fantastic. It has completely transformed the look of our home, and we have peace of mind knowing we're protected from the elements. The crew was professional and cleaned up everything perfectly.",
      client: "The Smiths",
    },
  },
  {
    service: "Siding",
    before: sidingBefore,
    after: sidingAfter,
    description:
      "This project involved updating the home's exterior with beautiful and resilient new siding. The new siding not only gives the home a fresh, modern look but also provides an extra layer of protection against the weather.",
    testimonial: {
      quote:
        "The new siding is absolutely beautiful. Our home looks like a brand-new house. The installation team was meticulous and their attention to detail was impressive. We couldn't be happier with the result.",
      client: "The Williams Family",
    },
  },
];

export default function OurWorkSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Our Work</PageSectionTitle>
        <PageSectionDescription>View our previous work.</PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <ul className="grid gap-8">
          {ourWorkData.map((work) => (
            <li key={work.service}>
              <Card className="pt-0">
                <CardContent className="p-0">
                  <ReactCompareSlider
                    itemOne={<Image src={work.before} alt="before image" />}
                    itemTwo={<Image src={work.after} alt="after image" />}
                    className="rounded-t-2xl"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl">{work.service}</CardTitle>
                  <CardDescription className="grid md:grid-cols-2">
                    <p className="mb-8 md:mr-4 md:mb-0">{work.description}</p>
                    <blockquote className="border-l-2 pl-6 italic">
                      &quot;{work.testimonial.quote}&quot;
                      <br />
                      <br />
                      <cite className="not-italic">
                        - {work.testimonial.client}
                      </cite>
                    </blockquote>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </PageSectionContent>
    </PageSection>
  );
}
