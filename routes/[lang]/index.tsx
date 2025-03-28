import { PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import { translate } from "@/utils/i18n.ts";

export default function HomePage(props: PageProps) {
  const { lang } = props.params;

  return (
    <Layout
      lang={lang}
      showHeader={true as boolean}
      showFooter={true as boolean}
    >
      <div class="py-12">
        {/* Konten halaman utama */}
      </div>
    </Layout>
  );
}
