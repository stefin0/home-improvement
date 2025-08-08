import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HomePageSection from "./home-page-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { services } from "@/config/services";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";

export default function ServicesOverviewSection() {
  return (
    <HomePageSection
      title="All Services"
      subheading="Quality craftsmanship for every part of your home."
    >
      <ul className="grid-auto-rows-[auto_1fr_auto] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.title} className="contents">
            <Card className="row-span-3 grid grid-rows-subgrid pt-0">
              <CardContent className="overflow-hidden rounded-t-xl p-0">
                <Link href={service.href}>
                  <AspectRatio ratio={3 / 2}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover transition hover:scale-110"
                    />
                  </AspectRatio>
                </Link>
              </CardContent>
              <CardHeader className="gap-0 self-start">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </HomePageSection>
  );
}
