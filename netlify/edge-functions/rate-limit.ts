import type { Context } from "https://edge.netlify.com";

// Simple in-memory rate limiter: max 5 requests per IP per minute
const requests = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000; // 1 minute

export default async function handler(request: Request, context: Context) {
  if (request.method === "OPTIONS") {
    return context.next();
  }

  const ip = context.ip ?? "unknown";
  const now = Date.now();

  const record = requests.get(ip);

  if (!record || now > record.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return context.next();
  }

  if (record.count >= MAX_REQUESTS) {
    return new Response(
      JSON.stringify({ success: false, message: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": "60",
        },
      },
    );
  }

  record.count++;
  return context.next();
}
