import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import FAQs from "@/components/faqs";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      <HeroHeader />
      <HeroSection />
      <Features />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <FAQs />
      <Footer />
    </main>
  );
}
