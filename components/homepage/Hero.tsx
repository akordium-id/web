import { JSX } from "preact";
import HeroContent from "@/islands/homepage/HeroContent.tsx";

export default function Hero(): JSX.Element {
  return (
    <section class="bg-base py-12 md:py-24 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="5" fill="#673b75">
            </circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          >
          </rect>
        </svg>
      </div>

      {/* Geometric Decorations */}
      <div class="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
      
      {/* Floating Shapes */}
      <div class="absolute top-10 right-[20%] w-8 h-8 border-4 border-accent/20 rounded-lg rotate-12"></div>
      <div class="absolute bottom-20 left-[30%] w-12 h-12 border-4 border-primary/20 rounded-full"></div>
      <div class="absolute top-[40%] right-10 w-10 h-10 bg-tertiary/20 rounded-md rotate-45"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
