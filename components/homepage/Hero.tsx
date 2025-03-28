import { JSX } from "preact";
import HeroContent from "@/islands/homepage/HeroContent.tsx";

export default function Hero(): JSX.Element {
  return (
    <section class="bg-base to-base-muted py-12 md:py-24 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
