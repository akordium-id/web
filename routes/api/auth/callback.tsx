import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (code) {
      // Redirect to admin with the code in the hash
      return new Response(null, {
        status: 302,
        headers: {
          "Location": `/admin#auth-callback=${code}`,
        },
      });
    }

    return await new Response("No code provided", { status: 400 });
  },
};

export default function CallbackPage() {
  return null;
}
