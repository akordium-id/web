import { FreshContext } from "$fresh/server.ts";
import { getLanguageFromURL } from "../utils/i18n.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  const lang = getLanguageFromURL(url);
  
  // Tambahkan informasi bahasa ke state
  ctx.state.lang = lang;
  
  return await ctx.next();
}