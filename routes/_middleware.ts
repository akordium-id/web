import { FreshContext } from "$fresh/server.ts";
import { getSavedLanguage, SUPPORTED_LANGUAGES } from "../utils/i18n.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  // Check localStorage first when accessing root
  if (url.pathname === "/" || url.pathname === "") {
    // Only access localStorage in the browser environment
    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
      const savedLanguage = localStorage.getItem("preferredLanguage") as string;
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        return Response.redirect(`${url.origin}/${savedLanguage}`, 307);
      }
    }

    const preferredLang = getSavedLanguage();
    return Response.redirect(`${url.origin}/${preferredLang}`, 307);
  }

  // Set language in state for components
  const [, pathLang] = url.pathname.split("/");
  ctx.state.lang = pathLang || getSavedLanguage();

  return await ctx.next();
}