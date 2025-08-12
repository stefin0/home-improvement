import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";

export default function CTASection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Ready to Start Your Project?</PageSectionTitle>
        <PageSectionDescription>
          We&apos;ll help you get started.
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <p>Child of CTASection</p>
      </PageSectionContent>
    </PageSection>
  );
}
