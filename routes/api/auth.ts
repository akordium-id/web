import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const clientId = Deno.env.get("GITHUB_CLIENT_ID");
  const clientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");

  if (!clientId || !clientSecret) {
    console.error("Missing OAuth credentials");
    return new Response("GitHub OAuth credentials not configured", { status: 500 });
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      console.error("GitHub token response not OK:", await tokenResponse.text());
      return new Response("Failed to get access token", { status: 500 });
    }

    const data = await tokenResponse.json();

    // Redirect back to admin with the token
    return Response.redirect(`/admin/#access_token=${data.access_token}`);
  } catch (error) {
    console.error("Auth error:", error);
    return new Response("Authentication failed", { status: 500 });
  }
}