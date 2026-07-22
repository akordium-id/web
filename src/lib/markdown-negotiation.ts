// Pure helpers for Markdown-for-Agents content negotiation. No runtime deps.

/** True when the Accept header explicitly asks for markdown. */
export function acceptsMarkdown(
  accept: string | null | undefined,
): boolean {
  return !!accept && accept.toLowerCase().includes("text/markdown");
}

/** True when a Content-Type value is HTML (ignores charset/params). */
export function isHtmlContentType(
  contentType: string | null | undefined,
): boolean {
  return !!contentType && contentType.toLowerCase().includes("text/html");
}

/** Rough token estimate (~4 chars/token), minimum 1. */
export function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}
