import { useSignal } from "@preact/signals";

export default function HeroContent() {
  const language = useSignal<"en" | "id" | "jv">("en");

  const heroText = {
    en: "Digital Partner for Your Business",
    id: "Mitra Digital untuk Bisnismu",
    jv: "Mitra Digital kanggo Bisnis Sampeyan",
  };

  return (
    <>
      <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
        {heroText[language.value]}
      </h1>
      <div class="flex gap-4 mb-6">
        <button
          onClick={() => language.value = "en"}
          class={`px-3 py-1 rounded ${
            language.value === "en" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>
        <button
          onClick={() => language.value = "id"}
          class={`px-3 py-1 rounded ${
            language.value === "id" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Indonesian
        </button>
        <button
          onClick={() => language.value = "jv"}
          class={`px-3 py-1 rounded ${
            language.value === "jv" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Javanese
        </button>
      </div>
    </>
  );
}
