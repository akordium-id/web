import { translate } from "@/utils/i18n.ts";

export default function ValueProposition(
  { lang }: { lang: string },
) {
  return (
    <>
      <section class="bg-base-subtle py-12">
        <div class="container mx-auto px-4">
          <p class="text-primary max-w-4xl mx-auto text-center text-lg">
            {translate("vp_intro", lang)}
            <span class="font-semibold text-secondary">
              {translate("vp_first_value", lang)}
            </span>
            <span class="font-semibold text-secondary">
              {translate("vp_second_value", lang)}
            </span>
            <span class="font-semibold text-secondary">
              {translate("vp_third_value", lang)}
            </span>
            {translate("vp_divider", lang)}
            <span class="font-semibold text-tertiary">
              {translate("vp_fourth_value", lang)}
            </span>
            {translate("vp_closure", lang)}
          </p>
          <div class="mt-8 text-center">
            <p class="text-primary/80">
              {translate("vp_team", lang)}{" "}
              <span class="font-semibold text-accent">
                {translate("vp_trait", lang)}
              </span>{" "}
              {translate("vp_has", lang)}
              <span class="text-tertiary font-semibold">
                {translate("vp_experience", lang)}
              </span>{" "}
              {translate("vp_fields", lang)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
