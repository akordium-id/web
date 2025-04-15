import { JSX } from "preact";
import HeroContent from "@/islands/homepage/HeroContent.tsx";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-base to-base-muted py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
