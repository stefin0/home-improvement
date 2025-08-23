"use client";

import { CTAButton, PhoneButton } from "@/components/ui/custom-buttons";
import { TextEffect } from "@/components/ui/text-effect";
import { Hero } from "@/lib/types";

type HeroSectionProps = {
  data: Hero;
};

export default function HeroSection({ data }: HeroSectionProps) {
  const { heading, subtitle, backgroundVideo } = data;
  const videoUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundVideo.url}`;

  return (
    <section className="relative flex h-[85svh] items-center justify-center">
      {/* Background: Hero Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-1 h-full w-full object-cover brightness-30"
        key={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="grid max-w-7xl justify-items-center gap-6 px-4 text-center text-balance">
        {/* Foreground: Hero Text */}
        <TextEffect
          as="h1"
          per="char"
          preset="blur"
          speedReveal={0.5}
          className="text-primary-foreground max-w-4xl leading-none font-extrabold tracking-tighter"
          style={{ fontSize: "clamp(1rem, 5vw + 1rem, 5rem)" }}
        >
          {heading}
        </TextEffect>
        <TextEffect
          per="char"
          preset="blur"
          delay={2.5}
          speedReveal={2}
          className="text-primary-foreground/80 max-w-md"
        >
          {subtitle}
        </TextEffect>

        {/* Foreground: CTA Buttons */}
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <PhoneButton
            variant={"outline"}
            className="text-primary-foreground bg-transparent"
          />
          <CTAButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
