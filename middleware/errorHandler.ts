import { FreshContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
): Promise<Response> {
  try {
    const resp = await ctx.next();
    return resp;
  } catch (err) {
    console.error("Unhandled error:", err);

    // Return JSON for API routes
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) {
      return new Response(
        JSON.stringify({
          error: "Internal Server Error",
          message: "An unexpected error occurred",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Redirect to error page for regular routes
    return new Response("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
