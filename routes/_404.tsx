import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found | Akordium</title>
      </Head>
      <div class="min-h-screen bg-primary text-white flex items-center">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-2xl mx-auto text-center">
            <div class="mb-8">
              <h1 class="text-8xl font-bold mb-4">404</h1>
              <div class="h-1 w-24 bg-white mx-auto mb-8"></div>
              <h2 class="text-3xl font-semibold mb-4">
                Oops! Page not found
              </h2>
              <p class="text-gray-300 mb-8">
                The page you're looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
            </div>

            <a
              href="/"
              class="inline-flex items-center px-6 py-3 border-2 border-white text-white 
                     hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
