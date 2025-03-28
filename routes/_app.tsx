import { type PageProps } from "$fresh/server.ts";
import { defaultSEO, generateMetaTags } from "@/utils/seo.ts";
import { DEFAULT_LANGUAGE } from "@/utils/i18n.ts";
import Layout from "@/components/Layout.tsx";

export default function App({ Component, state }: PageProps) {
  const metaTags = generateMetaTags();
  // Mengambil bahasa dari state (yang diatur oleh middleware)
  // atau menggunakan bahasa default jika tidak tersedia
  const lang = state?.lang || DEFAULT_LANGUAGE;

  return (
    <html lang={lang as string}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{defaultSEO.title}</title>
        {metaTags.map((tag) => (
          <meta
            {...tag}
            key={tag.name || tag.property}
          />
        ))}
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout lang={lang as string}>
          <Component />
        </Layout>
      </body>
    </html>
  );
}
