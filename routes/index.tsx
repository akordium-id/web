import Hero from "../components/homepage/Hero.tsx";
import Header from "../components/homepage/Header.tsx";
import ValueProposition from "../islands/homepage/ValueProposition.tsx";
import StatsSection from "../components/homepage/StatsSection.tsx";
import RecentWork from "../islands/homepage/RecentWork.tsx";
import ClientTestimonials from "../islands/homepage/ClientTestimonials.tsx";

export default function Home() {
  return (
    <main class="flex flex-col flex-grow min-h-screen font-sans">
      <Header />
      <Hero />
      <ValueProposition />
      <StatsSection />
      <RecentWork />
      <ClientTestimonials />
    </main>
  );
}
