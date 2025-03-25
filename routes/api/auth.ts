import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req) {
    // Handle GitHub OAuth redirect
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (code) {
      // Redirect to admin with the code in the hash
      return new Response(null, {
        status: 302,
        headers: {
          "Location": `/admin#auth-callback=${code}`
        }
      });
    }

    return await new Response("No code provided", { status: 400 });
  },

  async POST(req) {
    try {
      // Parse the request body
      const body = await req.json();
      const code = body.code;

      if (!code) {
        return new Response(JSON.stringify({ error: "No code provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      // GitHub OAuth configuration
      const clientId = "Ov23liJSf1T2kc8slkHe"; // Replace with your actual client ID
      const clientSecret = Deno.env.get("GITHUB_CLIENT_SECRET") || ""; // Get from environment variable

      // Exchange code for token with GitHub
      const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code
        })
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return new Response(JSON.stringify({ error: tokenData.error }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify({
        access_token: tokenData.access_token
      }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error("Auth error:", error);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
