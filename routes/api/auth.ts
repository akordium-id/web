import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const clientId = Deno.env.get("GITHUB_CLIENT_ID");
  const clientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");

  console.log("Auth endpoint accessed");
  console.log("Client ID exists:", !!clientId);
  console.log("Client Secret exists:", !!clientSecret);

  if (!clientId || !clientSecret) {
    console.error("Missing OAuth credentials");
    return new Response("GitHub OAuth credentials not configured", { status: 500 });
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  console.log("Received code:", code);

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  try {
    console.log("Requesting access token from GitHub...");
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

    console.log("Token response status:", tokenResponse.status);
    const responseText = await tokenResponse.text();
    console.log("Token response body:", responseText);

    if (!tokenResponse.ok) {
      return new Response("Failed to get access token: " + responseText, { status: 500 });
    }

    const data = JSON.parse(responseText);
    console.log("Access token received:", !!data.access_token);

    // Redirect back to admin with the token
    const redirectUrl = `/admin/#access_token=${data.access_token}`;
    console.log("Redirecting to:", redirectUrl);

    return Response.redirect(`https://akordium.id${redirectUrl}`);
  } catch (error) {
    console.error("Detailed auth error:", error);
    return new Response(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 });
  }
}