import { languageSignal } from "../../utils/languageState.ts";

const content = {
  en: {
    tagline: "Software Company",
    heading: "Your Digital Partner for Growth",
    subheading:
      "Secure and reliable • Result-driven approach • Fast-paced development • Professional",
    cta: "Book a Call",
    work: "See Our Work",
  },
  id: {
    tagline: "Perusahaan Software",
    heading: "Mitra Digital untuk Pertumbuhan Bisnis Anda",
    subheading:
      "Aman dan terpercaya • Berorientasi hasil • Pengembangan cepat • Profesional",
    cta: "Jadwalkan Konsultasi",
    work: "Lihat Hasil Kami",
  },
  jv: {
    tagline: "Perusahaan Software",
    heading: "Mitra seng peduli karo njenengan",
    subheading:
      "Aman lan terpercaya • Fokus ing hasil • Pengembangan cepet • Profesional",
    cta: "Hubungi Kita",
    work: "Lihat Hasil Kami",
  },
};

export default function HeroContent() {
  const currentContent = content[languageSignal.value];

  return (
    <>
      <div class="container mx-auto px-4 grid gap-8 md:gap-12 items-center relative z-10">
        <div class="space-y-4 md:space-y-6 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            {currentContent.heading}
          </h1>
          <p class="text-gray-700 text-base md:text-lg">
            {currentContent.subheading}
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#"
              class="bg-tertiary hover:bg-tertiary-light text-base rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg transition-colors"
            >
              {currentContent.cta}
            </a>
            <a
              href="#"
              class="border-2 border-primary text-primary hover:bg-primary hover:text-base rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg font-medium transition-colors"
            >
              {currentContent.work}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
