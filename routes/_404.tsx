import BaseLayout from "@/components/layout/BaseLayout.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Handle redirects for features routes
    if (path === "/features/home") {
      return Response.redirect(`${url.origin}/`, 307);
    }
    if (path === "/features/contact") {
      return Response.redirect(`${url.origin}/contact`, 307);
    }

    // Continue to the 404 page for other paths
    return ctx.render();
  },
};

export default function Error404() {
  return (
    <BaseLayout
      seo={{
        title: "404 - Page not found | Akordium",
        description:
          "The page you're looking for might have been removed or is temporarily unavailable.",
        noIndex: true,
      }}
      showHeader={false}
    >
      <div className="min-h-screen bg-primary text-white flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-8xl font-bold mb-4">404</h1>
              <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
              <h2 className="text-3xl font-semibold mb-4">
                Oops! Page not found
              </h2>
              <p className="text-gray-300 mb-8">
                The page you're looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
            </div>

            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white 
                     hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
