
import { FreshContext } from "$fresh/server.ts";
import { renderToString } from "https://esm.sh/preact-render-to-string@6.2.1";
import RateLimitError from "../components/RateLimitError.tsx";

const WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS = 100; // Maximum requests per window

// Initialize Deno KV
const kv = await Deno.openKv();

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
  const now = Date.now();

  // Get rate limit info from KV
  const key = ["ratelimit", ip];
  const rateLimitEntry = await kv.get<{ count: number; resetTime: number }>(key);

  let rateLimitInfo = rateLimitEntry.value;
  if (!rateLimitInfo || now > rateLimitInfo.resetTime) {
    rateLimitInfo = { count: 0, resetTime: now + WINDOW_MS };
  }

  // Increment request count using atomic operation
  rateLimitInfo.count++;
  await kv.set(key, rateLimitInfo, { expireIn: WINDOW_MS });

  // Check if rate limit exceeded
  if (rateLimitInfo.count > MAX_REQUESTS) {
    const resetTime = Math.ceil(rateLimitInfo.resetTime / 1000);
    const html = renderToString(RateLimitError({ reset: resetTime }));

    return new Response(html, {
      status: 429,
      headers: {
        "Content-Type": "text/html",
        "X-RateLimit-Limit": MAX_REQUESTS.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": resetTime.toString(),
      },
    });
  }

  // Add rate limit headers
  const response = await ctx.next();
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString());
  newResponse.headers.set(
    "X-RateLimit-Remaining",
    (MAX_REQUESTS - rateLimitInfo.count).toString(),
  );
  newResponse.headers.set(
    "X-RateLimit-Reset",
    Math.ceil(rateLimitInfo.resetTime / 1000).toString(),
  );

  return newResponse;
}