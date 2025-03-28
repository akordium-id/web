import { PageProps } from "$fresh/server.ts";
import { translate } from "@/utils/i18n.ts";

export default function CustomPage(props: PageProps) {
  const { lang } = props.params;
  
  return (
    <>
      {/* Konten khusus halaman ini */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">{translate("section1", lang)}</h2>
          <p>{translate("section1_content", lang)}</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">{translate("section2", lang)}</h2>
          <p>{translate("section2_content", lang)}</p>
        </div>
      </div>
    </>
  );
}