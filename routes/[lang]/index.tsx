import { PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import Hero from "@/components/homepage/Hero.tsx";
import ValueProposition from "@/components/homepage/ValueProposition.tsx";
import StatsSection from "@/components/homepage/StatsSection.tsx";
import Services from "@/components/homepage/Services.tsx";

export default function HomePage(props: PageProps) {
  const { lang } = props.params;

  return (
    <Layout
      lang={lang}
      showHeader={true as boolean}
      showFooter={true as boolean}
    >
      <Hero lang={lang} />
      <ValueProposition lang={lang} />
      <StatsSection lang={lang} />
      <Services lang={lang} />
    </Layout>
  );
}
