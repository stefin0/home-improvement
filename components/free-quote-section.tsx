import ContactForm from "@/components/contact-form";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import { fetchApi } from "@/lib/strapi";
import { Service } from "@/lib/types";

export default async function FreeQuoteSection() {
  const services = await fetchApi<Service[]>("services");

  return (
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
        <ContactForm services={services.data} />
      </PageSectionContent>
    </PageSection>
  );
}
