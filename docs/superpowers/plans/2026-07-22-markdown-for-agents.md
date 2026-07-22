# Markdown for Agents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve markdown representations of Akordium's pages to AI agents via `Accept: text/markdown` content negotiation, using a Cloudflare Pages Function (works on the Free plan).

**Architecture:** A catch-all Pages Function (`functions/[[path]].ts`) inspects the `Accept` header. When markdown is requested AND the upstream static response is `200` HTML, it converts the `<main id="main-content">` region to markdown via Cloudflare `HTMLRewriter` and returns it with `text/markdown` + policy headers. All other requests pass through to static assets untouched. Pure logic (negotiation, formatting) is unit-tested in Node with vitest; the runtime pieces (converter, function) are verified via `wrangler pages dev` + curl.

**Tech Stack:** Astro 7 (static output), Cloudflare Pages Functions, Cloudflare HTMLRewriter (Workers runtime global), vitest.

## Global Constraints

- Site stays `output: "static"` in `astro.config.mjs` — no Astro build/source changes.
- No npm dependency for HTML conversion — use the Workers runtime `HTMLRewriter` global (typed via an ambient declaration, conflict-free with the DOM lib).
- `Response`, `Request`, `Headers` types come from the DOM lib already in the project — do NOT add `@cloudflare/workers-types` (it conflicts with DOM globals).
- Markdown responses MUST set `Content-Signal: ai-train=no, search=yes, ai-input=yes` to stay consistent with `public/robots.txt`.
- Node `>=22.12.0` (per `package.json` engines).

---

### Task 1: Project setup (deps, scripts, ambient types)

**Files:**

- Modify: `package.json` (scripts + devDependencies)
- Modify: `src/env.d.ts` (ambient `HTMLRewriter` + `PagesFunction` declarations)
- Create: `vitest.config.ts`

**Interfaces:**

- Produces: `HTMLRewriter` and `PagesFunction` ambient types (consumed by Tasks 3 & 4); `npm test` and `npm run preview:cf` scripts.

- [ ] **Step 1: Add devDependencies and scripts**

Edit `package.json` — add to `devDependencies`:

```json
"vitest": "^3.2.4",
"wrangler": "^4.40.0"
```

Add to `scripts`:

```json
"test": "vitest run",
"test:watch": "vitest",
"preview:cf": "astro build && wrangler pages dev dist --compatibility-date=2026-07-01"
```

- [ ] **Step 2: Add ambient Cloudflare runtime types**

Append to `src/env.d.ts` (keep the existing `ImportMetaEnv` block):

```ts
// Cloudflare Workers runtime globals used by the Markdown-for-Agents function.
// Declared ambient (not via @cloudflare/workers-types) to avoid DOM-lib conflicts.
type HTMLRewriterElementHandler = {
  element?(element: {
    tagName: string;
    getAttribute(name: string): string | null;
    remove(): void;
    onEndTag(handler: () => void): void;
  }): void;
  text?(text: { text: string; lastInTextNode: boolean }): void;
};

declare class HTMLRewriter {
  on(selector: string, handlers: HTMLRewriterElementHandler): this;
  transform(response: Response): Response;
}

type PagesFunction<Env = unknown> = (context: {
  request: Request;
  env: Env;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  waitUntil(promise: Promise<unknown>): void;
}) => Response | Promise<Response>;
```

- [ ] **Step 3: Add vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
});
```

- [ ] **Step 4: Install and verify setup**

Run: `npm install`
Expected: installs `vitest` and `wrangler`.

Run: `npm run check`
Expected: PASS (no type errors). The new ambient types compile clean.

Run: `npm test`
Expected: "No test files found" (vitest runs, no tests yet) — confirms the runner works.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/env.d.ts vitest.config.ts
git commit -m "chore: add vitest + wrangler, ambient Workers runtime types"
```

---

### Task 2: Negotiation + markdown formatting helpers (TDD)

**Files:**

- Create: `src/lib/markdown-negotiation.ts`
- Create: `src/lib/html-to-markdown.ts` (pure helpers only this task)
- Test: `src/lib/markdown-negotiation.test.ts`

**Interfaces:**

- Produces: `acceptsMarkdown`, `isHtmlContentType`, `estimateTokens` (negotiation); `headingLevel`, `formatLink`, `formatImage`, `listItemBullet` (formatting). Consumed by Tasks 3 & 4.

- [ ] **Step 1: Write the failing tests**

Create `src/lib/markdown-negotiation.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import {
  acceptsMarkdown,
  isHtmlContentType,
  estimateTokens,
} from "./markdown-negotiation";
import {
  headingLevel,
  formatLink,
  formatImage,
  listItemBullet,
} from "./html-to-markdown";

describe("negotiation", () => {
  it("detects markdown in Accept header", () => {
    expect(acceptsMarkdown("text/markdown")).toBe(true);
    expect(acceptsMarkdown("text/markdown, text/html;q=0.9")).toBe(true);
    expect(acceptsMarkdown("text/html")).toBe(false);
    expect(acceptsMarkdown(null)).toBe(false);
    expect(acceptsMarkdown(undefined)).toBe(false);
  });

  it("detects html content type ignoring charset", () => {
    expect(isHtmlContentType("text/html; charset=utf-8")).toBe(true);
    expect(isHtmlContentType("text/html")).toBe(true);
    expect(isHtmlContentType("application/json")).toBe(false);
    expect(isHtmlContentType(null)).toBe(false);
  });

  it("estimates tokens at ~4 chars each, min 1", () => {
    expect(estimateTokens("")).toBe(1);
    expect(estimateTokens("abcd")).toBe(1);
    expect(estimateTokens("abcde")).toBe(2);
    expect(estimateTokens("abcdefgh")).toBe(2);
  });
});

describe("markdown formatting", () => {
  it("parses heading level from tagName", () => {
    expect(headingLevel("H1")).toBe(1);
    expect(headingLevel("h3")).toBe(3);
    expect(headingLevel("H6")).toBe(6);
    expect(headingLevel("div")).toBe(1);
  });

  it("formats links, dropping empty href", () => {
    expect(formatLink("world", "/about")).toBe("[world](/about)");
    expect(formatLink("world", null)).toBe("world");
    expect(formatLink("  world ", " /x ")).toBe("[world](/x)");
  });

  it("formats images, empty when no src", () => {
    expect(formatImage("logo", "/img.png")).toBe("![logo](/img.png)");
    expect(formatImage(null, "")).toBe("");
    expect(formatImage("alt", null)).toBe("");
  });

  it("builds list item bullets ordered vs unordered", () => {
    expect(listItemBullet(false, 0)).toBe("-");
    expect(listItemBullet(true, 0)).toBe("1.");
    expect(listItemBullet(true, 2)).toBe("3.");
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — modules `./markdown-negotiation` and `./html-to-markdown` not found.

- [ ] **Step 3: Implement negotiation helpers**

Create `src/lib/markdown-negotiation.ts`:

```ts
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
  return (
    !!contentType && contentType.toLowerCase().includes("text/html")
  );
}

/** Rough token estimate (~4 chars/token), minimum 1. */
export function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}
```

- [ ] **Step 4: Implement pure formatting helpers**

Create `src/lib/html-to-markdown.ts` (pure helpers only this task; the converter is added in Task 3):

```ts
// Pure markdown formatting helpers. Unit-tested here. The HTMLRewriter driver
// (convertHtmlToMarkdown) is added in Task 3 and calls these.

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
export function formatImage(
  alt: string | null,
  src: string | null,
): string {
  const s = (src ?? "").trim();
  return s ? `![${(alt ?? "").trim()}](${s})` : "";
}

/** Bullet/number prefix for a list item. */
export function listItemBullet(ordered: boolean, index: number): string {
  return ordered ? `${index + 1}.` : "-";
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all negotiation + formatting tests green.

Run: `npm run check`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/markdown-negotiation.ts src/lib/html-to-markdown.ts src/lib/markdown-negotiation.test.ts
git commit -m "feat(markdown-agents): negotiation + formatting helpers"
```

---

### Task 3: HTMLRewriter converter

**Files:**

- Modify: `src/lib/html-to-markdown.ts` (add `convertHtmlToMarkdown`)

**Interfaces:**

- Consumes: `HTMLRewriter` ambient type (Task 1); formatting helpers (Task 2).
- Produces: `convertHtmlToMarkdown(html: string): Promise<string>` — used by Task 4.

**Design note (critical):** HTMLRewriter handlers run as the transformed response body is consumed. The function MUST `await transformed.text()` or handlers will not fire and the result stays empty. The single `*` text handler emits all text; element handlers emit only structural delimiters via start handler + `onEndTag` — this avoids duplicating text that would occur if both a specific selector and `*` registered text handlers.

- [ ] **Step 1: Add the converter**

Append to `src/lib/html-to-markdown.ts`:

```ts
interface ConvertState {
  md: string;
  inMain: boolean;
  inPre: boolean;
  list: { ordered: boolean; index: number }[];
  linkHref: string | null;
}

/**
 * Convert the <main id="main-content"> region of a rendered Akordium page to
 * markdown using the Cloudflare HTMLRewriver Workers global. Returns "" when
 * the page has no main-content region. Async because handler execution is
 * driven by consuming the transformed response body.
 */
export async function convertHtmlToMarkdown(html: string): Promise<string> {
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
```

- [ ] **Step 2: Type-check**

Run: `npm run check`
Expected: PASS. `HTMLRewriter` resolves via the ambient declaration from Task 1.

- [ ] **Step 3: Build to confirm no breakage**

Run: `npm run build`
Expected: build succeeds; `dist/` produced. (`src/lib/` is not imported by any page, so the converter has no build effect yet — this just guards against accidental breakage.)

- [ ] **Step 4: Commit**

```bash
git add src/lib/html-to-markdown.ts
git commit -m "feat(markdown-agents): HTMLRewriter main-content converter"
```

---

### Task 4: Pages Function + Content-Signal header

**Files:**

- Create: `functions/[[path]].ts`
- Modify: `public/_headers`

**Interfaces:**

- Consumes: `acceptsMarkdown`, `isHtmlContentType`, `estimateTokens` (Task 2); `convertHtmlToMarkdown` (Task 3).
- Produces: the live `Accept: text/markdown` endpoint behavior.

- [ ] **Step 1: Write the catch-all Pages Function**

Create `functions/[[path]].ts`:

```ts
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
```

- [ ] **Step 2: Add Content-Signal to the HTML responses too**

Edit `public/_headers` — add the `Content-Signal` line inside the existing `/*` block (keep the two `Link` lines):

```
/*
  Content-Signal: ai-train=no, search=yes, ai-input=yes
  Link: </sitemap-index.xml>; rel="sitemap"; type="application/xml"
  Link: </.well-known/agent-skills/index.json>; rel="service-meta"; type="application/json"
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: succeeds; `dist/` contains `_headers` and the static HTML.

- [ ] **Step 4: Commit**

```bash
git add functions/[[path]].ts public/_headers
git commit -m "feat(markdown-agents): Pages Function content negotiation + Content-Signal"
```

---

### Task 5: End-to-end verification

**Files:** none (verification only).

- [ ] **Step 1: Start the local Pages dev server**

Run: `npm run preview:cf` (in one terminal). This runs `astro build` then `wrangler pages dev dist`. Wait for the local URL (default `http://localhost:8788`).

- [ ] **Step 2: Verify markdown negotiation on the homepage**

Run: `curl -sI -H "Accept: text/markdown" http://localhost:8788/`
Expected:

- `HTTP/1.1 200`
- `content-type: text/markdown; charset=utf-8`
- `content-signal: ai-train=no, search=yes, ai-input=yes`
- `vary: Accept` (may appear alongside an existing value)
- `x-markdown-tokens:` present
- no `etag` / `last-modified`

Run: `curl -s -H "Accept: text/markdown" http://localhost:8788/ | head -20`
Expected: readable markdown — headings as `#`/`##`, paragraphs, links as `[text](href)`, no `<`tags, no nav/footer/script content.

- [ ] **Step 3: Verify HTML is still the default (browsers unaffected)**

Run: `curl -sI http://localhost:8788/`
Expected: `content-type: text/html` (unchanged Astro output).

- [ ] **Step 4: Verify non-HTML assets pass through**

Run: `curl -sI -H "Accept: text/markdown" http://localhost:8788/favicon.ico`
Expected: still the icon content-type (NOT text/markdown).

Run: `curl -sI -H "Accept: text/markdown" http://localhost:8788/.well-known/agent-skills/index.json`
Expected: `content-type: application/json` (NOT text/markdown).

- [ ] **Step 5: Verify a blog post and /about convert**

Run: `curl -s -H "Accept: text/markdown" http://localhost:8788/about/ | head -20`
Expected: readable markdown derived from the about page's main content.

Run: `curl -s -H "Accept: text/markdown" http://localhost:8788/blog/ | head -20`
Expected: readable markdown for the blog index.

- [ ] **Step 6: Final full checks**

Run: `npm test` → all tests pass.
Run: `npm run check` → no type errors.
Run: `npm run build` → succeeds.

- [ ] **Step 7: If all green, no further commit needed**

(Task 4 already committed the code. This task is verification only. If any verification fails, fix and commit with `fix(markdown-agents): …`.)

---

## Self-Review Notes

- **Spec coverage:** converter (Task 3) + negotiation/headers (Task 4) + Content-Signal (Task 4) + path/asset handling (Task 4 guards on `ok`/`isHtmlContentType`) + verification matrix (Task 5) all map to spec sections. `x-markdown-tokens` (Task 4), `Vary: Accept` (Task 4), ETag/Last-Modified dropping (Task 4) covered.
- **Converter correctness:** single `*` text handler avoids duplicate text across matching selectors; `await transformed.text()` ensures handlers fire; `inMain` scopes to `#main-content`; `inPre` preserves code-block content; list stack handles nesting.
- **Type safety:** ambient declarations avoid DOM/workers-types conflict; `Response`/`Headers`/`Request` from DOM lib.
