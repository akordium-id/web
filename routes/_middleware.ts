import { FreshContext } from "$fresh/server.ts";
import { getSavedLanguage } from "../utils/i18n.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  
  // Jika di root path ("/"), redirect ke path dengan bahasa yang disimpan
  if (url.pathname === "/") {
    const savedLang = getSavedLanguage();
    return Response.redirect(`${url.origin}/${savedLang}`, 307);
  }
  
  return await ctx.next();
}