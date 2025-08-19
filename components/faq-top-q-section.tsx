import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionFooter,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/faq";
import { FAQButton } from "@/components/ui/custom-buttons";

export default function FAQTopQSection() {
  const topFaqs = faqs.slice(0, 3);

  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Frequently Asked Questions</PageSectionTitle>
        <PageSectionDescription>
          Here are some of the most frequently asked questions we get from our
          customers.
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <Accordion type="single" collapsible>
          {topFaqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageSectionContent>
      <PageSectionFooter className="justify-self-center">
        <FAQButton variant={"outline"} />
      </PageSectionFooter>
    </PageSection>
  );
}
