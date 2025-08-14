import * as React from "react";
import { cn } from "@/lib/utils";

const PageSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(function PageSection({ className, ...props }, ref) {
  return (
    <section
      ref={ref}
      data-slot="page-section"
      className={cn("grid gap-4", className)}
      {...props}
    />
  );
});
PageSection.displayName = "PageSection";

const PageSectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function PageSectionHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="page-section-header"
      className={cn("", className)}
      {...props}
    />
  );
});
PageSectionHeader.displayName = "PageSectionHeader";

const PageSectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" }
>(function PageSectionTitle({ className, as: Comp = "h2", ...props }, ref) {
  return (
    <Comp
      ref={ref}
      data-slot="page-section-title"
      className={cn("mb-2 text-4xl font-bold tracking-tight", className)}
      {...props}
    />
  );
});
PageSectionTitle.displayName = "PageSectionTitle";

const PageSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function PageSectionDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      data-slot="page-section-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
});
PageSectionDescription.displayName = "PageSectionDescription";

const PageSectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function PageSectionContent({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="page-section-content"
      className={cn("", className)}
      {...props}
    />
  );
});
PageSectionContent.displayName = "PageSectionContent";

const PageSectionFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function PageSectionFooter({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="page-section-footer"
      className={cn("", className)}
      {...props}
    />
  );
});
PageSectionFooter.displayName = "PageSectionFooter";

export {
  PageSection,
  PageSectionHeader,
  PageSectionTitle,
  PageSectionDescription,
  PageSectionContent,
  PageSectionFooter,
};
