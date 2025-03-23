import { languageSignal } from "../utils/languageState.ts";

export default function HeroContent() {
  const heroText = {
    en: "Digital Partner for Your Business",
    id: "Mitra Digital untuk Bisnismu",
    jv: "Mitra Digital kanggo Bisnis Sampeyan",
  };

  return (
    <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
      {heroText[languageSignal.value]}
    </h1>
  );
}
