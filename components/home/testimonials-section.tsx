import {
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";

export default function TestimonialsSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Testimonials</PageSectionTitle>
        <PageSectionDescription>
          See what our customers have to say.
        </PageSectionDescription>
      </PageSectionHeader>
      <p>Child of TestimonialsSection</p>
    </PageSection>
  );
}
