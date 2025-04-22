import { type PageProps } from "$fresh/server.ts";
import { defaultSEO, generateMetaTags } from "@/utils/seo.ts";
import { I18nState } from "@/middleware/i18n.ts"; // Import the state interface

// The App component now receives the state via props
export default function App({ Component, state }: PageProps<unknown, I18nState>) {
  const metaTags = generateMetaTags();
  const lang = state.lang; // Get language from state

  return (
    // Set the lang attribute dynamically
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You might want to translate the title too */}
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
        {/* Pass state down if needed, or Component might access it directly if it's a route */}
        <Component />
      </body>
    </html>
  );
}
