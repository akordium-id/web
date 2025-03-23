import Hero from "../components/Hero.tsx";
import ContentGrid from "../components/ContentGrid.tsx";
import Partners from "../components/Partners.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <main class="bg-[#0f1419]">
      <Navbar />
      <Hero />
      <Partners />
      <ContentGrid />
    </main>
  );
}
