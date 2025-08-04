import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="-z-1 object-cover top-0 w-full absolute h-3/4 brightness-30"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="pl-4">
        <h1 className="text-4xl font-semibold text-primary-foreground">
          The Best Home Remodeling
        </h1>
        <Button>Get a Free Quote</Button>
      </div>
    </div>
  );
}
