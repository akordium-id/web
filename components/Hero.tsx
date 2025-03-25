import { JSX } from "preact";
import HeroContent from "../islands/HeroContent.tsx";

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

      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <HeroContent />

        <div class="relative mt-8 md:mt-0">
          <div class="absolute -top-10 -left-10 w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full">
          </div>
          <div class="absolute -bottom-5 -right-5 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full">
          </div>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team working on digital solutions"
            width={500}
            height={400}
            class="rounded-lg relative z-10 object-cover w-full h-auto shadow-lg"
          />
          <div class="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-base p-3 md:p-4 rounded-full shadow-lg z-20">
            <img
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Award badge"
              width={60}
              height={60}
              class="rounded-full w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
