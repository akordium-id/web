import { JSX } from "preact";
import { translate } from "@/utils/i18n.ts";

export default function Hero({ lang }: { lang: string }): JSX.Element {
  return (
    <section class="bg-base py-12 md:py-24 relative overflow-hidden">
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
