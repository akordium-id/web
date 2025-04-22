import { FreshContext } from "$fresh/server.ts";
import { handler as i18nHandler, I18nState } from "@/middleware/i18n.ts";
// Assuming your rate limiter middleware is in routes/_rateLimiter.ts
// If it's elsewhere, adjust the import path.
// If you don't have a rate limiter middleware applied globally, remove these lines.
import { handler as rateLimitHandler } from "@/middleware/rateLimiter.ts";

export const handler = [
  async (req: Request, ctx: FreshContext<I18nState>) => {
    // Run i18n middleware first to set ctx.state.lang and ctx.state.locale
    return await i18nHandler(req, ctx);
  },
  // Add other global middleware here, like the rate limiter
  // Make sure the context type matches what the middleware expects
  async (req: Request, ctx: FreshContext<I18nState>) => {
    // Note: The rate limiter might need adjustments if it uses ctx.state
    // or if its error component needs access to the locale from ctx.state
    return await rateLimitHandler(req, ctx);
  }
  // Add other middleware as needed
];