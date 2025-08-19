import { Mail, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { Icon } from "@/components/ui/icon";

type CustomButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function CTAButton({ className, variant, ...props }: CustomButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <Link href="/free-quote">Get a Free Quote</Link>
    </Button>
  );
}

function FAQButton({ className, variant, ...props }: CustomButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)} {...props}>
      <Link href="/faq">View All FAQs</Link>
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

type SocialButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    social: (typeof siteConfig.socials)[0];
    children?: React.ReactNode;
  };

function SocialButton({
  className,
  variant,
  size,
  social,
  children,
  ...props
}: SocialButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(className)}
      {...props}
    >
      <a href={social.href} target="_blank" rel="noopener noreferrer">
        <Icon path={social.icon.path} />
        {children ? (
          <span>{children}</span>
        ) : (
          <span className="sr-only">{social.name}</span>
        )}
      </a>
    </Button>
  );
}

export { CTAButton, FAQButton, PhoneButton, EmailButton, SocialButton };
