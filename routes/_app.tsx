import { type PageProps } from "$fresh/server.ts";
import { defaultSEO, generateMetaTags } from "../utils/seo.ts";

export default function App({ Component, url }: PageProps) {
  const metaTags = generateMetaTags();

  return (
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{defaultSEO.title}</title>
        {metaTags.map((tag) => <meta
          {...tag}
          key={tag.name || tag.property}
        />)}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
