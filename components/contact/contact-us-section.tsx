import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmailButton, PhoneButton } from "@/components/ui/custom-buttons";
import {
  PageSection,
  PageSectionHeader,
  PageSectionTitle,
  PageSectionDescription,
  PageSectionContent,
} from "@/components/ui/page-section";
import { Mail, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Talk to a real human during business hours.",
    actionComponent: <PhoneButton />,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll get back to you as soon as possible.",
    actionComponent: <EmailButton />,
  },
];

export default function ContactUsSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle as="h1">Contact Us</PageSectionTitle>
        <PageSectionDescription>
          We&apos;re here to help. Reach out with any questions or for a free,
          no-obligation estimate on your next project.
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent className="grid gap-4 md:grid-cols-2">
        {contactMethods.map((method) => (
          <Card key={method.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <method.icon size={"1.5rem"} />
                {method.title}
              </CardTitle>
              <CardDescription>{method.description}</CardDescription>
            </CardHeader>
            <CardFooter>{method.actionComponent}</CardFooter>
          </Card>
        ))}
      </PageSectionContent>
    </PageSection>
  );
}
