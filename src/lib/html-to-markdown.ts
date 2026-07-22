// Pure markdown formatting helpers. Unit-tested. The HTMLRewriter driver
// (convertHtmlToMarkdown) is added in the next task and calls these.

/** Heading level from a tagName like "H2" -> 2; unknown tags -> 1. */
export function headingLevel(tagName: string): number {
  const match = /^h([1-6])$/i.exec(tagName);
  return match ? Number(match[1]) : 1;
}

/** `[text](href)`, or just `text` when href is empty/absent. */
export function formatLink(text: string, href: string | null): string {
  const t = text.trim();
  const h = (href ?? "").trim();
  return h ? `[${t}](${h})` : t;
}

/** `![alt](src)`, or "" when src is empty/absent. */
export function formatImage(alt: string | null, src: string | null): string {
  const s = (src ?? "").trim();
  return s ? `![${(alt ?? "").trim()}](${s})` : "";
}

/** Bullet/number prefix for a list item. */
export function listItemBullet(ordered: boolean, index: number): string {
  return ordered ? `${index + 1}.` : "-";
}
