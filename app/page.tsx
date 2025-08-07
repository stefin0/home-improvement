import CTASection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import OtherInfoSection from "@/components/home/other-info-section";
import OurWorkSection from "@/components/home/our-work-section";
import ServicesOverviewSection from "@/components/home/services-overview-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="py-4">
        <WhyChooseUsSection />
        <ServicesOverviewSection />
        <OurWorkSection />
        <TestimonialsSection />
        <CTASection />
        <OtherInfoSection />
      </main>
    </>
  );
}
