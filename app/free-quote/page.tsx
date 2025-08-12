import ContactForm from "@/components/contact-form";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";

export default function FreeQuote() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <PageSection>
        <PageSectionHeader>
          <PageSectionTitle as="h1">
            Get a Free Quote for Your Project
          </PageSectionTitle>
          <PageSectionDescription>
            Fill out the form below, and one of our experts will get back to you
            within 24 hours with a no-obligation estimate.
          </PageSectionDescription>
        </PageSectionHeader>
        <PageSectionContent>
          <ContactForm />
        </PageSectionContent>
      </PageSection>
    </div>
  );
}
