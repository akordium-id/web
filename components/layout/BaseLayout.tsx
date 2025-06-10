import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
import {
  defaultSEO,
  generateMetaTags,
  generateStructuredData,
  SEOProps,
} from "@/utils/seo.ts";
import Header from "@/components/homepage/Header.tsx";
import Footer from "@/components/homepage/Footer.tsx";

interface BaseLayoutProps {
  children: ComponentChildren;
  seo?: SEOProps;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function BaseLayout({
  children,
  seo = {},
  showHeader = true,
  showFooter = true,
}: BaseLayoutProps) {
  const metaData = { ...defaultSEO, ...seo };
  const metaTags = generateMetaTags(metaData);
  const structuredData = generateStructuredData(metaData.structuredData);

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        {metaTags.map((tag) => (
          <meta
            {...tag}
            key={tag.name || tag.property}
          />
        ))}
        {metaData.canonicalUrl && (
          <link rel="canonical" href={metaData.canonicalUrl} />
        )}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredData }}
          />
        )}
      </Head>
      <div className="flex flex-col min-h-screen">
        {showHeader && <Header />}
        <main className="flex-grow">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
