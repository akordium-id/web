import { JSX } from "preact";
import { useSignal } from "@preact/signals";

export default function Hero(): JSX.Element {
  const language = useSignal<"en" | "id" | "jv">("en");

  const heroText = {
    en: "Your Digital Partner for Growth",
    id: "Mitra Digital untuk Pertumbuhan Bisnis Anda",
    jv: "Mitra seng peduli karo sampeyan",
  };

  return (
    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div class="flex-1 text-left">
            <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-6">
              Software Company
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
              {heroText[language.value]}
            </h1>
            <p class="text-gray-600 text-lg mb-8">
              Secure and reliable • Result-driven approach • Fast-paced
              development • Professional
            </p>
            <div class="flex gap-4 mb-6">
              <button
                onClick={() => language.value = "en"}
                class={`px-3 py-1 rounded ${
                  language.value === "en"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => language.value = "id"}
                class={`px-3 py-1 rounded ${
                  language.value === "id"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                Indonesian
              </button>
              <button
                onClick={() => language.value = "jv"}
                class={`px-3 py-1 rounded ${
                  language.value === "jv"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                Javanese
              </button>
            </div>
            <button
              type="button"
              class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book a Call
            </button>
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
