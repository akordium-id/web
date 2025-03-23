import { languageSignal } from "../utils/languageState.ts";

export default function HeroContent() {
  const content = {
    en: {
      tagline: "Software Company",
      heading: "Your Digital Partner for Growth",
      subheading: "Secure and reliable • Result-driven approach • Fast-paced development • Professional",
      cta: "Book a Call"
    },
    id: {
      tagline: "Perusahaan Software",
      heading: "Mitra Digital untuk Pertumbuhan Bisnis Anda",
      subheading: "Aman dan terpercaya • Berorientasi hasil • Pengembangan cepat • Profesional",
      cta: "Jadwalkan Konsultasi"
    },
    jv: {
      tagline: "Perusahaan Software",
      heading: "Mitra seng peduli karo njenengan",
      subheading: "Aman lan terpercaya • Fokus ing hasil • Pengembangan cepet • Profesional",
      cta: "Hubungi Kita"
    }
  };

  const currentContent = content[languageSignal.value];

  return (
    <>
      <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-6">
        {currentContent.tagline}
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
        {currentContent.heading}
      </h1>
      <p class="text-gray-600 text-lg mb-8">
        {currentContent.subheading}
      </p>
      <button
        type="button"
        class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        {currentContent.cta}
      </button>
    </>
  );
}
