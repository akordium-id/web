import { JSX } from "preact";
import StatsCount from "../../islands/homepage/StatsCount.tsx";

export default function StatsSection(): JSX.Element {
  return (
    <section class="py-12 border-gray-200 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pattern-triangles"
            x="0"
            y="0"
            width="65"
            height="65"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0,0 L30,52 L60,0 L60,0 Z" fill="#3a2f7d" stroke="none">
            </path>
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-triangles)"
          />
        </svg>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <StatsCount />
      </div>
    </section>
  );
}
