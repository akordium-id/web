// Pure markdown formatting helpers (unit-tested) + the HTMLRewriter driver
// that converts a page's <main> region to markdown.

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

interface ConvertState {
  md: string;
  inMain: boolean;
  inPre: boolean;
  list: { ordered: boolean; index: number }[];
  linkHref: string | null;
}

/**
 * Convert the <main id="main-content"> region of a rendered Akordium page to
 * markdown using the Cloudflare HTMLRewriter Workers global. Returns "" when
 * the page has no main-content region. Async because handler execution is
 * driven by consuming the transformed response body.
 *
 * Design: a single `*` text handler emits all text; element handlers emit only
 * structural delimiters via the start handler + onEndTag. This avoids
 * duplicating text (which would happen if both a specific selector and `*`
 * registered text handlers for the same node).
 */
export async function convertHtmlToMarkdown(
  html: string,
): Promise<string> {
  const s: ConvertState = {
    md: "",
    inMain: false,
    inPre: false,
    list: [],
    linkHref: null,
  };
  const A = (text: string) => {
    s.md += text;
  };
  const blockBefore = () => {
    s.md = s.md.replace(/\s+$/, "");
    A("\n\n");
  };

  const transformed = new HTMLRewriter()
    .on("main#main-content", {
      element() {
        s.inMain = true;
      },
    })
    .on("script,style,noscript,svg,template,form,button", {
      element(el) {
        el.remove();
      },
    })
    .on("h1,h2,h3,h4,h5,h6", {
      element(el) {
        if (!s.inMain) return;
        blockBefore();
        A("#".repeat(headingLevel(el.tagName)) + " ");
      },
    })
    .on("p", {
      element() {
        if (s.inMain) blockBefore();
      },
    })
    .on("blockquote", {
      element() {
        if (s.inMain) blockBefore();
      },
    })
    .on("ul,ol", {
      element(el) {
        if (!s.inMain) return;
        blockBefore();
        s.list.push({ ordered: /^ol$/i.test(el.tagName), index: 0 });
        el.onEndTag(() => {
          s.list.pop();
        });
      },
    })
    .on("li", {
      element() {
        if (!s.inMain) return;
        const top = s.list[s.list.length - 1];
        if (!top) return;
        s.md = s.md.replace(/\n+$/, "");
        A("\n" + listItemBullet(top.ordered, top.index) + " ");
        top.index += 1;
      },
    })
    .on("pre", {
      element(el) {
        if (!s.inMain) return;
        blockBefore();
        A("```\n");
        s.inPre = true;
        el.onEndTag(() => {
          A("\n```");
          s.inPre = false;
        });
      },
    })
    .on("hr", {
      element() {
        if (s.inMain) {
          blockBefore();
          A("---");
        }
      },
    })
    .on("br", {
      element() {
        if (s.inMain && !s.inPre) A("\n");
      },
    })
    .on("img", {
      element(el) {
        if (!s.inMain) return;
        A(formatImage(el.getAttribute("alt"), el.getAttribute("src")));
      },
    })
    .on("a", {
      element(el) {
        s.linkHref = el.getAttribute("href");
        if (s.inMain && !s.inPre) A("[");
        el.onEndTag(() => {
          if (s.inMain && !s.inPre) A(`](${s.linkHref ?? ""})`);
        });
      },
    })
    .on("strong,b", {
      element(el) {
        if (s.inMain && !s.inPre) {
          A("**");
          el.onEndTag(() => {
            if (s.inMain && !s.inPre) A("**");
          });
        }
      },
    })
    .on("em,i", {
      element(el) {
        if (s.inMain && !s.inPre) {
          A("*");
          el.onEndTag(() => {
            if (s.inMain && !s.inPre) A("*");
          });
        }
      },
    })
    .on("code", {
      element(el) {
        if (s.inMain && !s.inPre) {
          A("`");
          el.onEndTag(() => {
            if (s.inMain && !s.inPre) A("`");
          });
        }
      },
    })
    .on("*", {
      text(t) {
        if (!s.inMain || s.inPre) return;
        if (!t.text) return;
        A(t.text.replace(/\s+/g, " "));
      },
    })
    .transform(new Response(html));

  await transformed.text();
  return s.md.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
