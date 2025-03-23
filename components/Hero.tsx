import { JSX } from "preact";
import { useSignal } from "@preact/signals";
import LanguageSwitcher from "../islands/LanguageSwitcher.tsx";

export default function Hero(): JSX.Element {
  const language = useSignal<"en" | "id" | "jv">("en");

  const content = {
    en: {
      tagline: "Software Company",
      heading: "Your Digital Partner for Growth",
      subheading:
        "Secure and reliable • Result-driven approach • Fast-paced development • Professional",
      cta: "Book a Call",
    },
    id: {
      tagline: "Perusahaan Software",
      heading: "Mitra Digital untuk Pertumbuhan Bisnis Anda",
      subheading:
        "Aman dan terpercaya • Berorientasi hasil • Pengembangan cepat • Profesional",
      cta: "Jadwalkan Konsultasi",
    },
    jv: {
      tagline: "Perusahaan Software",
      heading: "Mitra seng peduli karo njenengan",
      subheading:
        "Aman lan terpercaya • Fokus ing hasil • Pengembangan cepet • Profesional",
      cta: "Hubungi Kita",
    },
  };

  return (
    <div class="bg-white">
      <nav class="fixed top-0 left-0 right-0 bg-white z-50">
        <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
          <div class="text-xl font-bold">Akordium</div>
          <div class="flex gap-8 items-center">
            <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Bookshelf</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Academy</a>
            <div class="flex gap-2 mr-4">
              <LanguageSwitcher language={language} />
            </div>
            <button
              type="button"
              class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Let's Talk!
            </button>
          </div>
        </div>
      </nav>

      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div class="flex-1 text-left">
            <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-6">
              {content[language.value].tagline}
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
              {content[language.value].heading}
            </h1>
            <p class="text-gray-600 text-lg mb-8">
              {content[language.value].subheading}
            </p>
            <button
              type="button"
              class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {content[language.value].cta}
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
