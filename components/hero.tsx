import Link from "next/link";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <div className="relative flex h-2/3 items-center justify-center">
      {/* Background: Hero Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-1 h-full w-full object-cover brightness-30"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground: Hero Text & Call To Actions */}
      <div className="grid max-w-7xl justify-items-center gap-6 px-4 text-center text-balance">
        <h1
          className="text-primary-foreground leading-none font-extrabold tracking-tighter"
          style={{ fontSize: "clamp(1rem, 5vw + 1rem, 5rem)" }}
        >
          San Diego&apos;s Home Improvement Experts.
        </h1>
        <p className="text-primary-foreground/80 max-w-md">
          We specialize in roofing, windows, and exterior painting with a
          commitment to quality and integrity.
        </p>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Button
            variant="outline"
            className="text-primary-foreground bg-transparent"
            asChild
          >
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone />
              {siteConfig.contact.phone}
            </a>
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
