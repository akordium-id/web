import { FreshContext } from "$fresh/server.ts";

// Route mapping between feature-based URLs and root URLs
const routeMap: Record<string, string> = {
  "/features/home": "/",
  "/features/contact": "/contact",
  // Add more mappings as needed
};

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  const path = url.pathname;

  // Check if the path is in our route map
  if (path in routeMap) {
    return Response.redirect(`${url.origin}${routeMap[path]}`, 307);
  }

  // For root URLs that should use feature-based components internally
  // but maintain the original URL for users
  if (path === "/") {
    // We'll let the index.tsx handle this directly
    return await ctx.next();
  }

  return await ctx.next();
} 