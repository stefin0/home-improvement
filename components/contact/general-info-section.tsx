import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

const generalInfoItems = [
  {
    icon: Clock,
    title: "Business Hours",
    description: "Our team is available during these times.",
    content: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
  {
    icon: MapPin,
    title: "Service Area",
    description: "Proudly serving our local communities.",
    content: ["We serve the greater San Diego area."],
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded, Insured",
    description: "Your peace of mind is our priority.",
    content: [
      "We are a fully licensed and insured contractor, committed to professional and safe service.",
      "License #: 123456",
    ],
  },
];

export default function GeneralInfoSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>General Information</PageSectionTitle>
        <PageSectionDescription>
          Key details about our operations and commitment to you.
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {generalInfoItems.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <item.icon size={"1.5rem"} className="shrink-0" />
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {item.content.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </PageSectionContent>
    </PageSection>
  );
}
