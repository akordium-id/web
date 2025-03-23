import { JSX } from "preact";
import HeroContent from "../islands/HeroContent.tsx";

export default function Hero(): JSX.Element {
  return (
    <div class="bg-white font-sans">
      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div class="flex-1 text-left">
            <HeroContent />
          </div>
          <div class="flex-1">
            <img
              src="/logo.svg"
              alt="Digital Transformation Illustration"
              class="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
