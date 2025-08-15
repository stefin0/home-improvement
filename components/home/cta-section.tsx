import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import CTAButton from "../ui/cta-button";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InView } from "@/components/ui/in-view";

export default function CTASection() {
  return (
    <PageSection className="my-8">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        }}
        viewOptions={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <PageSectionHeader className="mb-8 text-center">
          <PageSectionTitle>Ready to Start Your Project?</PageSectionTitle>
          <PageSectionDescription>
            We&apos;re here to help you get started. Reach out to us for a free
            quote, or if you have any questions.
          </PageSectionDescription>
        </PageSectionHeader>
        <PageSectionContent className="grid justify-items-center gap-4">
          <CTAButton />
          <div className="text-muted-foreground">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Phone className="size-[0.875rem] shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="size-[0.875rem] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </PageSectionContent>
      </InView>
    </PageSection>
  );
}
