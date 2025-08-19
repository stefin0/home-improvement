import { CTAButton, PhoneButton } from "@/components/ui/custom-buttons";
import { TextEffect } from "@/components/ui/text-effect";

export default function HeroSection() {
  return (
    <section className="relative flex h-[85svh] items-center justify-center">
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
          San Diego&apos;s Home Improvement Experts.
        </TextEffect>
        <TextEffect
          per="char"
          preset="blur"
          delay={2.5}
          speedReveal={2}
          className="text-primary-foreground/80 max-w-md"
        >
          We specialize in painting, roofing, and windows with a commitment to
          quality and integrity.
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
