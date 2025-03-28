import { translate } from "@/utils/i18n.ts";

export default function CallToAction({ lang }: { lang: string }) {
  return (
    <section className="bg-gradient-to-b from-base to-primary/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          {translate("cta_title", lang)}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-secondary">
          {translate("cta_description", lang)}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href={`/${lang}/contact`}
            className="bg-tertiary text-base px-5 py-2 rounded-full hover:bg-tertiary-light transition-colors"
          >
            {translate("cta_contact", lang)}
          </a>
          <a
            href={translate("cta_whatsapp_link", lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-tertiary text-tertiary px-5 py-2 rounded-full hover:bg-tertiary/10 transition-colors"
          >
            {translate("cta_whatsapp", lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
