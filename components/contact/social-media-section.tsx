import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/ui/page-section";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icon";
import { SocialButton } from "@/components/ui/custom-buttons";

export default function SocialMediaSection() {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Social Media</PageSectionTitle>
        <PageSectionDescription>
          Follow us on social media to stay up-to-date with our latest projects
          and offers.
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {siteConfig.socials.map((social) => (
          <Card key={social.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Icon path={social.icon.path} size="1.5rem" />
                {social.name}
              </CardTitle>
              <CardDescription>{social.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <SocialButton social={social} variant={"secondary"}>
                Visit our {social.name}
              </SocialButton>
            </CardFooter>
          </Card>
        ))}
      </PageSectionContent>
    </PageSection>
  );
}
