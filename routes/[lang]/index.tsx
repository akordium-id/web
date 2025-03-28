import { PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import Hero from "@/components/homepage/Hero.tsx";

export default function HomePage(props: PageProps) {
  const { lang } = props.params;

  return (
    <Layout
      lang={lang}
      showHeader={true as boolean}
      showFooter={true as boolean}
    >
      <Hero lang={lang} />
    </Layout>
  );
}
