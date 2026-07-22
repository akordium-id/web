import {
  acceptsMarkdown,
  isHtmlContentType,
  estimateTokens,
} from "../src/lib/markdown-negotiation";
import { convertHtmlToMarkdown } from "../src/lib/html-to-markdown";

// Keep the markdown response consistent with robots.txt Content-Signal.
const CONTENT_SIGNAL = "ai-train=no, search=yes, ai-input=yes";

export const onRequest: PagesFunction = async (context) => {
  if (!acceptsMarkdown(context.request.headers.get("accept"))) {
    return context.next();
  }

  const upstream = await context.next();
  const contentType = upstream.headers.get("content-type") ?? "";
  if (!upstream.ok || !isHtmlContentType(contentType)) {
    return upstream;
  }

  const markdown = await convertHtmlToMarkdown(await upstream.text());
  if (!markdown.trim()) {
    // No <main id="main-content"> region (e.g. an HTML error page) — pass through.
    return upstream;
  }

  const headers = new Headers(upstream.headers);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("content-signal", CONTENT_SIGNAL);
  headers.set("x-markdown-tokens", String(estimateTokens(markdown)));
  headers.append("vary", "Accept");
  headers.delete("etag");
  headers.delete("last-modified");
  headers.delete("content-encoding");
  headers.delete("content-length");

  return new Response(markdown, { status: 200, headers });
};
