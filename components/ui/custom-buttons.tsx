import { Mail, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

type CustomButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function CTAButton({ className, variant, ...props }: CustomButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <Link href="/free-quote">Get a Free Quote</Link>
    </Button>
  );
}

function PhoneButton({ className, variant, ...props }: CustomButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <a href={`tel:${siteConfig.contact.phone}`}>
        <Phone />
        {siteConfig.contact.phone}
      </a>
    </Button>
  );
}

function EmailButton({ className, variant, ...props }: CustomButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <a href={`mailto:${siteConfig.contact.email}`}>
        <Mail />
        {siteConfig.contact.email}
      </a>
    </Button>
  );
}

export { CTAButton, PhoneButton, EmailButton };
