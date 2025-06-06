import { languageSignal } from "@/utils/languageState.ts";

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
        "Awak dewe gak mung perusahaan teknologi biasa. Awak dewe iki partner digital sampean, nggabungno ",
      firstValue: "keahlian pengembangan, ",
      secondValue: "konsultasi strategis, ",
      thirdValue: "hosting seng iso dipercaya, ",
      divider: "lan ",
      fourthValue: "pemasaran seng fokus hasil ",
      closure: "gawe ngewangi bisnis sampean sukses nang online.",
      team: "Tim awak dewe ",
      trait: "seng seneng teknologi ",
      has: "nduweni ",
      experience: "pengalaman 3+ taun ",
      fields: "gawe solusi digital nang bidang perbankan, pemasaran, lan IoT.",
    },
  };

  const shortContent = content[languageSignal.value];

  return (
    <>
      {/* Description Section */}
      <section className="py-12 bg-base-muted">
        <div className="container mx-auto px-4">
          <p className="text-primary/90 max-w-4xl mx-auto text-center text-lg">
            {shortContent.intro}
            <span className="font-semibold text-secondary">
              {shortContent.firstValue}
            </span>
            <span className="font-semibold text-secondary">
              {shortContent.secondValue}
            </span>
            <span className="font-semibold text-secondary">
              {shortContent.thirdValue}
            </span>
            {shortContent.divider}
            <span className="text-tertiary font-semibold">
              {shortContent.fourthValue}
            </span>
            {shortContent.closure}
          </p>
          <div className="mt-8 text-center">
            <p className="text-primary/80">
              {shortContent.team}{" "}
              <span className="font-semibold text-accent">
                {shortContent.trait}
              </span>{" "}
              {shortContent.has}
              <span className="text-tertiary font-semibold">
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
