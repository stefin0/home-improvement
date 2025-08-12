import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";

export default function OtherInfoSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Need More Information?</PageSectionTitle>
        <PageSectionDescription>Explore our site.</PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <p>Child of OtherInfoSection</p>
      </PageSectionContent>
    </PageSection>
  );
}
