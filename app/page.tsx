import CTASection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import OtherInfoSection from "@/components/home/other-info-section";
import OurWorkSection from "@/components/home/our-work-section";
import ServicesOverviewSection from "@/components/home/services-overview-section";
import TestimonialsSection from "@/components/home/testimonials-section";
// import TrustBadgesSection from "@/components/home/trust-badges-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <TrustBadgesSection /> */}
      <div className="mx-auto grid max-w-7xl gap-8 p-4">
        <ServicesOverviewSection />
        <OurWorkSection />
        <TestimonialsSection />
        <CTASection />
        <OtherInfoSection />
      </div>
    </>
  );
}
