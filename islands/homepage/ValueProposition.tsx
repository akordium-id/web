import { languageSignal } from "../../utils/languageState.ts";

export default function ValueProposition() {
  const content = {
    en: {
      intro:
        "We're not just another tech company. We're your digital partners, bringing together ",
      firstValue: "development expertise, ",
      secondValue: "strategic consulting, ",
      thirdValue: "reliable hosting, ",
      divider: "and ",
      fourthValue: "results-driven marketing ",
      closure: "to help your business thrive online.",
      team: "Our team of ",
      trait: "passionate tech enthusiasts ",
      has: "has ",
      experience: "3+ years of experience ",
      fields:
        "creating digital solutions for banking, marketing, and IoT fields.",
    },
    id: {
      intro:
        "Kami bukan sekadar perusahaan teknologi biasa. Kami adalah mitra digital Anda, menggabungkan ",
      firstValue: "keahlian pengembangan, ",
      secondValue: "konsultasi strategis, ",
      thirdValue: "hosting yang andal, ",
      divider: "dan ",
      fourthValue: "pemasaran berorientasi hasil ",
      closure: "untuk membantu bisnis Anda berkembang secara online.",
      team: "Tim kami ",
      trait: "sebagai penggiat teknologi ",
      has: "dengan ",
      experience: "berpengalaman 3+ tahun ",
      fields:
        "dalam menciptakan solusi digital untuk bidang perbankan, pemasaran, dan IoT.",
    },
    jv: {
      intro:
        "Kita dudu mung perusahaan teknologi biasa. Kita iku partner digital sampeyan, nggabungno ",
      firstValue: "keahlian pengembangan, ",
      secondValue: "konsultasi strategis, ",
      thirdValue: "hosting sing iso dipercaya, ",
      divider: "lan ",
      fourthValue: "pemasaran sing fokus ing hasil ",
      closure: "kanggo mbantu bisnis sampeyan sukses ing online.",
      team: "Tim kita ",
      trait: "sing sueneng teknologi ",
      has: "nduweni ",
      experience: "pengalaman 3+ taun ",
      fields:
        "ing nggawe solusi digital kanggo bidang perbankan, pemasaran, dan IoT.",
    },
  };

  const shortContent = content[languageSignal.value];

  return (
    <>
      {/* Description Section */}
      <section class="py-12 bg-gradient-to-br from-base to-secondary/5">
        <div class="container mx-auto px-4">
          <p class="text-primary/90 max-w-4xl mx-auto text-center text-lg">
            {shortContent.intro}
            <span class="font-semibold text-secondary">
              {shortContent.firstValue}
            </span>
            <span class="font-semibold text-secondary">
              {shortContent.secondValue}
            </span>
            <span class="font-semibold text-secondary">
              {shortContent.thirdValue}
            </span>
            {shortContent.divider}
            <span class="text-tertiary font-semibold">
              {shortContent.fourthValue}
            </span>
            {shortContent.closure}
          </p>
          <div class="mt-8 text-center">
            <p class="text-primary/80">
              {shortContent.team}{" "}
              <span class="font-semibold text-accent">
                {shortContent.trait}
              </span>{" "}
              {shortContent.has}
              <span class="text-tertiary font-semibold">
                {shortContent.experience}
              </span>{" "}
              {shortContent.fields}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
