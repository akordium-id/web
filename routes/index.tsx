import BaseLayout from "@/components/layout/BaseLayout.tsx";
import Hero from "@/components/homepage/Hero.tsx";
import ValueProposition from "@/islands/homepage/ValueProposition.tsx";
import StatsSection from "@/components/homepage/StatsSection.tsx";
import RecentWork from "@/islands/homepage/RecentWork.tsx";
import ClientTestimonials from "@/islands/homepage/ClientTestimonials.tsx";
import Services from "@/islands/homepage/Services.tsx";
import CallToAction from "@/islands/homepage/CallToAction.tsx";

export default function Home() {
  return (
    <BaseLayout
      seo={{
        title: "Akordium",
        description:
          "Akordium adalah partner digital yang peduli untuk perkembangan bisnis Anda serta mengedepankan kenyamanan dan kolaborasi bersama.",
      }}
    >
      <Hero />
      <ValueProposition />
      <StatsSection />
      <Services />
      <RecentWork />
      <ClientTestimonials />
      <CallToAction />
    </BaseLayout>
  );
}
