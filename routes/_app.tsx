import { type PageProps } from "$fresh/server.ts";
import { defaultSEO, generateMetaTags } from "../utils/seo.ts";

export default function App({ Component }: PageProps) {
  const metaTags = generateMetaTags();

  return (
    <html lang="id">
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
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
