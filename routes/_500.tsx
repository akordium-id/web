import BaseLayout from "@/components/layout/BaseLayout.tsx";

export default function Error500() {
  return (
    <BaseLayout
      seo={{
        title: "500 - Server Error | Akordium",
        description:
          "An unexpected error occurred on our server. Please try again later.",
        noIndex: true,
      }}
      showHeader={false}
    >
      <div className="min-h-screen bg-tertiary text-white flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-8xl font-bold mb-4">500</h1>
              <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
              <h2 className="text-3xl font-semibold mb-4">
                Server Error
              </h2>
              <p className="text-gray-100 mb-8">
                We're sorry, but something went wrong on our end. Our team has
                been notified and is working to fix the issue.
              </p>
            </div>

            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white 
                     hover:bg-white hover:text-tertiary transition-colors duration-200"
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
