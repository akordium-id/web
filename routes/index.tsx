import Hero from "../components/Hero.tsx";
import ContentGrid from "../components/ContentGrid.tsx";
import Partners from "../components/Partners.tsx";

export default function Home() {
  return (
    <main class="bg-[#0f1419]">
      <Hero />
      <Partners />
      <ContentGrid />
    </main>
  );
}
