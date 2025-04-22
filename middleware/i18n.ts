import { FreshContext } from "$fresh/server.ts";
import { getAcceptedLanguage, loadLocale, Locale } from "@/utils/i18n.ts";

export interface I18nState {
  lang: string;
  locale: Locale;
}

export async function handler(
  req: Request,
  ctx: FreshContext<I18nState>,
) {
  // 1. Determine language (e.g., from header, cookie, or path)
  //    For now, we'll use the Accept-Language header.
  const lang = getAcceptedLanguage(req);

  // 2. Load the locale data for the determined language
  const locale = await loadLocale(lang);

  // 3. Store language and locale data in state for access in routes/components
  ctx.state.lang = lang;
  ctx.state.locale = locale;

  // Set Vary header to indicate response varies based on Accept-Language
  const response = await ctx.next();
  response.headers.set("Vary", "Accept-Language");
  return response;
}