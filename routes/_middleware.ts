import { FreshContext } from "$fresh/server.ts";
import { getSavedLanguage } from "../utils/i18n.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  const savedLang = getSavedLanguage();
  console.log("savedLang", savedLang);
  // Redirect to saved language if available
  if (savedLang && url.pathname === "/") {
    return Response.redirect(`${url.origin}/${savedLang}`, 307);
  }

  // // Check localStorage first when accessing root
  // if (url.pathname === "/" || url.pathname === "") {
  //   const preferredLang = getSavedLanguage();
  //   console.log("preferredLang", preferredLang);
  //   return Response.redirect(`${url.origin}/${preferredLang}`, 307);
  // }

  // // Set language in state for components
  // const [, pathLang] = url.pathname.split("/");
  // ctx.state.lang = pathLang || getSavedLanguage();

  return await ctx.next();
}