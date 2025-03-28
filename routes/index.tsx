import { Handlers, PageProps } from "$fresh/server.ts";
import { DEFAULT_LANGUAGE } from "../utils/i18n.ts";

// Redirect ke bahasa default
export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    return Response.redirect(`${url.origin}/${DEFAULT_LANGUAGE}`, 307);
  },
};

export default function Home() {
  return null; // Tidak akan dirender karena redirect
}
