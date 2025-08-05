import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative flex h-3/4 items-center justify-center">
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
      <div className="grid max-w-7xl justify-items-center gap-5 px-4 text-center text-balance">
        <h1
          className="text-primary-foreground leading-none font-extrabold tracking-tighter"
          style={{ fontSize: "clamp(1rem, 5vw + 1rem, 5rem)" }}
        >
          San Diego&apos;s Premier Home Improvement Experts.
        </h1>
        <p className="text-primary-foreground/80 max-w-md">
          We specialize in roofing, windows, and exterior painting with a
          commitment to quality and integrity.
        </p>
        <Button asChild>
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  );
}
