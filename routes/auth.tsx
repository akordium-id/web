import { Head } from "$fresh/runtime.ts";
import GitHubAuth from "@/islands/GitHubAuth.tsx";

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>GitHub Authentication</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-2xl font-bold mb-4">GitHub Authentication Example:</h1>
        <GitHubAuth />
      </div>
    </>
  );
}
