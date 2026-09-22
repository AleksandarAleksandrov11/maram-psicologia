import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesPreview from "@/components/home/ServicesPreview";
import SessionsSection from "@/components/home/SessionsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <ServicesPreview />
      <SessionsSection showCTA />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
