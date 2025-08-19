import FAQTopQSection from "@/components/faq-top-q-section";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/home/hero-section";
import OurWorkSection from "@/components/home/our-work-section";
import ServicesOverviewSection from "@/components/home/services-overview-section";
// import TestimonialsSection from "@/components/home/testimonials-section";
// import TrustBadgesSection from "@/components/home/trust-badges-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <TrustBadgesSection /> */}
      <div className="mx-auto grid max-w-7xl gap-32 p-4">
        <ServicesOverviewSection />
        <OurWorkSection />
        {/* <TestimonialsSection /> */}
        <FAQTopQSection />
        <CTASection />
      </div>
    </>
  );
}
