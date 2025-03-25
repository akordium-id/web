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
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">
        </script>
      </head>
      <body>
        <Component />
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `,
        }}
      />
    </html>
  );
}
