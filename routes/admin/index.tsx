import { Head } from "$fresh/runtime.ts";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="description" content="Admin panel for blog content" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        {/* Add config for DecapCMS */}
        <script>
          {`
            window.CMS_MANUAL_INIT = true;
          `}
        </script>
      </Head>
      <div>
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
        {/* Initialize CMS with custom config */}
        <script>
          {`
            const config = {
              backend: {
                name: "git-gateway",
                branch: "main",
              },
              media_folder: "static/images/uploads",
              public_folder: "/images/uploads",
              collections: [
                {
                  name: "blog",
                  label: "Blog",
                  folder: "content/blog",
                  create: true,
                  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Publish Date", name: "date", widget: "datetime" },
                    { label: "Featured Image", name: "thumbnail", widget: "image", required: false },
                    { label: "Body", name: "body", widget: "markdown" },
                    { label: "Tags", name: "tags", widget: "list", required: false }
                  ]
                }
              ]
            };
            
            // Initialize the CMS
            window.addEventListener('load', function() {
              CMS.init({ config });
            });
          `}
        </script>
      </div>
    </>
  );
}