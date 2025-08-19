import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import { InView } from "@/components/ui/in-view";
import {
  CTAButton,
  EmailButton,
  PhoneButton,
} from "@/components/ui/custom-buttons";

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
          <div className="flex flex-col">
            <PhoneButton
              variant={"link"}
              className="hover:text-foreground text-muted-foreground underline"
            />
            <EmailButton
              variant={"link"}
              className="hover:text-foreground text-muted-foreground underline"
            />
          </div>
        </PageSectionContent>
      </InView>
    </PageSection>
  );
}
