import Hero from "../components/Hero.tsx";
import ContentGrid from "../components/ContentGrid.tsx";
import Header from "../components/Header.tsx";
import ValueProposition from "../islands/ValueProposition.tsx";

export default function Home() {
  return (
    <main class="bg-[#0f1419] flex flex-col min-h-screen font-sans">
      <Header />
      <Hero />
      <ValueProposition />
      <ContentGrid />
    </main>
  );
}
