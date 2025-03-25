export default function RateLimitError({ reset }: { reset: number }) {
  const resetDate = new Date(reset * 1000).toLocaleTimeString();

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 class="text-4xl font-bold text-red-500 mb-4">429</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Too Many Requests
        </h2>
        <p class="text-gray-600 mb-4">
          You have exceeded the rate limit. Please try again at {resetDate}
        </p>
        <button
          onClick={() => globalThis.location.reload()}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
