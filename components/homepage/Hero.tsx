import { JSX } from "preact";
import { translate } from "@/utils/i18n.ts";

export default function Hero({ lang }: { lang: string }): JSX.Element {
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
      <div class="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl">
      </div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl">
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl">
      </div>

      {/* Floating Shapes */}
      <div class="absolute top-10 right-[20%] w-8 h-8 border-4 border-accent/20 rounded-lg rotate-12">
      </div>
      <div class="absolute bottom-20 left-[30%] w-12 h-12 border-4 border-primary/20 rounded-full">
      </div>
      <div class="absolute top-[40%] right-10 w-10 h-10 bg-tertiary/20 rounded-md rotate-45">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="text-center space-y-6 md:space-y-8">
            <span class="inline-block text-sm md:text-base text-primary/80 font-medium mb-2">
              {translate("hero_tagline", lang)}
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              {translate("hero_heading", lang)}
            </h1>
            <p class="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
              {translate("hero_subheading", lang)}
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a
                href={`/${lang}/contact`}
                class="bg-tertiary hover:bg-tertiary-light text-base rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg transition-colors"
              >
                {translate("hero_cta", lang)}
              </a>
              <a
                href={`/${lang}/portfolio`}
                class="border-2 border-primary text-primary hover:bg-primary hover:text-base rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg font-medium transition-colors"
              >
                {translate("hero_work", lang)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
