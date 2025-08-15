import paintingBefore from "@/public/images/before-after/painting/before-001.jpg";
import paintingAfter from "@/public/images/before-after/painting/after-001.jpg";
import roofingBefore from "@/public/images/before-after/roofing/before-001.jpg";
import roofingAfter from "@/public/images/before-after/roofing/after-001.jpg";
import windowsBefore from "@/public/images/before-after/windows/before-001.jpg";
import windowsAfter from "@/public/images/before-after/windows/after-001.jpg";
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
  PageSectionFooter,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/comparison";
import { GripVertical } from "lucide-react";

const ourWorkData = [
  {
    service: "Painting",
    before: paintingBefore,
    after: paintingAfter,
    description:
      "This project gave the home's exterior a complete refresh, replacing the faded, dated paint with a modern color scheme. The fresh coat not only provides a stunning boost to curb appeal but also adds a crucial layer of protection against the elements.",
    testimonial: {
      quote:
        "We're absolutely thrilled with the transformation. The attention to detail was exceptional, and our home looks brand new again. The entire team was professional, efficient, and a pleasure to have around.",
      client: "The Johnson Family",
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
];

export default function OurWorkSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Our Work</PageSectionTitle>
        <PageSectionDescription>View our previous work.</PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent className="grid gap-4">
        <ul className="grid gap-8">
          {ourWorkData.map((work) => (
            <li key={work.service}>
              <Card className="pt-0">
                <CardContent className="p-0">
                  <AspectRatio ratio={3 / 2}>
                    <ImageComparison
                      className="h-full"
                      enableHover
                      springOptions={{
                        bounce: 0.3,
                      }}
                    >
                      <ImageComparisonImage
                        src={work.before.src}
                        alt="before image"
                        position="left"
                        className="rounded-t-2xl"
                      />
                      <ImageComparisonImage
                        src={work.after.src}
                        alt="after image"
                        position="right"
                        className="rounded-t-2xl"
                      />
                      <ImageComparisonSlider className="w-2 bg-white">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-0.5 py-1.5">
                          <GripVertical className="text-muted-foreground" />
                        </div>
                      </ImageComparisonSlider>
                    </ImageComparison>
                  </AspectRatio>
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
      <PageSectionFooter className="grid grid-cols-2 gap-4 justify-self-center">
        <Button variant={"outline"}>
          <Link href="/gallery">View Gallery</Link>
        </Button>
        <Button variant={"outline"}>
          <Link href="/testimonials">View Testimonials</Link>
        </Button>
      </PageSectionFooter>
    </PageSection>
  );
}
