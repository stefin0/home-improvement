import ContactUsSection from "@/components/contact/contact-us-section";
import GeneralInfoSection from "@/components/contact/general-info-section";
import SocialMediaSection from "@/components/contact/social-media-section";
import FAQTopQSection from "@/components/faq-top-q-section";
import FreeQuoteSection from "@/components/free-quote-section";

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-7xl gap-32 p-4">
      <ContactUsSection />
      <GeneralInfoSection />
      <FAQTopQSection />
      <SocialMediaSection />
      <FreeQuoteSection />
    </div>
  );
}
