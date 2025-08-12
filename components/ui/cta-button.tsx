import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTAButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button asChild className={cn(className)} {...props}>
      <Link href="/free-quote">Get a Free Quote</Link>
    </Button>
  );
}
