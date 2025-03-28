import { PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import { translate } from "@/utils/i18n.ts";

export default function HomePage(props: PageProps) {
  const { lang } = props.params;
  
  return (
    <Layout 
      lang={lang} 
      useCustomHeader={true} // Gunakan header kustom
    >
      <div class="py-12">
        <h1 class="text-4xl font-bold">{translate("welcome", lang)}</h1>
        {/* Konten halaman utama */}
      </div>
    </Layout>
  );
}