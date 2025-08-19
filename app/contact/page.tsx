import ContactUsSection from "@/components/contact/contact-us-section";
import GeneralInfoSection from "@/components/contact/general-info-section";

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 p-4">
      <ContactUsSection />
      <GeneralInfoSection />
    </div>
  );
}
