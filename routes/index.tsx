import Hero from "../components/Hero.tsx";
import Header from "../components/Header.tsx";
import ValueProposition from "../islands/ValueProposition.tsx";
import StatsSection from "../components/StatsSection.tsx";
import RecentWork from "../islands/RecentWork.tsx";

export default function Home() {
  return (
    <main class="flex flex-col flex-grow min-h-screen font-sans">
      <Header />
      <Hero />
      <ValueProposition />
      <StatsSection />
      <RecentWork />
    </main>
  );
}
