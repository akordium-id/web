# Markdown for Agents — Pages Function Content Negotiation

**Date:** 2026-07-22
**Site:** <https://akordium.id> (Astro static output, Cloudflare Pages)
**Status:** Approved
**Related:** `2026-07-21-agent-readiness-design.md` (prior agent-readiness work)

## Context

`isitagentready.com` reports "Markdown for Agents" as missing. This is the one
item from the generic checklist that is genuinely actionable for this site — a
static marketing site with no API, no auth, and no MCP server (see prior spec for
why the other items are deliberately skipped).

Markdown for Agents lets AI agents request a markdown representation of a page via
`Accept: text/markdown` content negotiation, while browsers keep receiving HTML.
Requirements (per the markdown-negotiation skill):

- Request with `Accept: text/markdown` → return markdown representation.
- `Content-Type: text/markdown` on the response.
- HTML remains the default for requests without the markdown accept header.
- Include `x-markdown-tokens` with the token count if available.

Cloudflare offers a native "Markdown for Agents" feature, but it is **only
available on Pro/Business/Enterprise plans** (and SSL for SaaS). The
`akordium.id` zone is on the **Free plan**, so the native feature is unavailable.
This spec implements the equivalent with a Cloudflare Pages Function, which works
on all plans including Free (100k requests/day limit).

## Non-goal

No changes to Astro build, components, layouts, or `astro.config.mjs`. The site
stays `output: "static"`. Markdown is produced on demand at the edge from the
static HTML, not pre-rendered at build time.

## Design

### Architecture & data flow

```text
Request → functions/[[path]].ts (catch-all Pages Function)
  → Accept header contains "text/markdown"?
       NO → context.next() → static HTML served as-is (browser default; no overhead)
       YES → fetch HTML via context.next()
              → only if status 200 AND Content-Type text/html
              → extract <main id="main-content">, convert to markdown
              → Response with text/markdown + full header set
              → otherwise pass the upstream response through unchanged
```

The `functions/` directory is processed by Cloudflare Pages separately from the
Astro build. Astro still emits static HTML to `dist/`; the function runs on the
edge and transforms responses only when a markdown variant is requested.

### Converter — HTMLRewriter, main-content-focused

Uses Cloudflare `HTMLRewriter` (native to the Workers runtime, **zero npm
dependency**, no bundle/size risk on Free). Targets the stable `<main
id="main-content">` container from `src/layouts/Layout.astro`, so output excludes
chrome (Navbar, Footer, scripts, styles, meta) and contains only page-relevant
content — which is more useful to agents than a full-DOM dump.

Element subset handled: `h1`–`h6`, `p`, `a` (`[text](href)`), `ul`/`ol`/`li`,
`strong`/`em`, `img` (`![alt](src)`), `blockquote`, `pre`/`code` (code fence),
`hr`, `br`, `table` (best-effort).

**Alternative considered:** `turndown` + `linkedom` (DOM polyfill in Workers) for
out-of-box quality on complex tables/lists. Rejected as default because it adds
bundle weight/size-limit risk on Free and converts the whole document rather than
the main content. Can be swapped in later if HTMLRewriter output proves
insufficient during testing.

### Response headers (markdown response)

Start from the upstream response's headers (which already include the `Link`/HSTS
headers applied by `_headers`), then:

- Set `Content-Type: text/markdown; charset=utf-8`.
- Add `Vary: Accept` (so caches store separate HTML and markdown variants).
- Set `Content-Signal: ai-train=no, search=yes, ai-input=yes` — **critical** to
  preserve the site's robots.txt training policy. Without this the markdown
  response would carry no signal; setting it explicitly keeps the two views
  consistent.
- Add `x-markdown-tokens: <ceil(len/4)>` — approximate token estimate (the header
  is optional per spec; value is a rough char/4 estimate).
- Drop `ETag` and `Last-Modified` (body differs from the HTML, so conditional
  requests would be invalid). `Content-Length` is recomputed automatically by the
  runtime when the body is a string.

### Path / asset handling

Conversion happens **only** when the upstream response is `200 OK` with
`Content-Type: text/html`. Everything else passes through unchanged:

- Static assets (favicon, CSS, JS, images, PDF) → skipped.
- `/.well-known/**` (existing JSON and `.md` files) → skipped (not HTML).
- `/sitemap-index.xml`, `/robots.txt` → skipped.
- `4xx`/`5xx` errors and `3xx` redirects → passed through as-is.
- `HEAD` requests → passed through.

Result: agents can request markdown for every marketing route (`/`, `/about`,
`/services`, `/blog`, `/blog/<slug>`, `/contact`).

## Files Touched

| File | Action |
| ------ | -------- |
| `functions/[[path]].ts` | New — catch-all content negotiation |
| `src/lib/html-to-markdown.ts` | New — HTMLRewriter-based converter |
| `public/_headers` | Edit — add `Content-Signal` header to `/*` for consistency on HTML responses too |

No Astro source, component, layout, or build-config changes.

## Verification

- `npm run build` succeeds; `dist/` unchanged in structure from before.
- `npx wrangler pages dev dist` then:
  - `curl -H "Accept: text/markdown" http://localhost:8788/` → `Content-Type: text/markdown; charset=utf-8`, markdown body, `Content-Signal: ai-train=no, search=yes, ai-input=yes`, `x-markdown-tokens` present, `Vary: Accept` present.
  - Browser-style request (no Accept header) → HTML, unchanged.
  - `curl -H "Accept: text/markdown" http://localhost:8788/favicon.ico` → still the icon (skipped).
  - `curl -H "Accept: text/markdown" http://localhost:8788/.well-known/agent-skills/index.json` → still JSON (skipped).
- Spot-check markdown output for `/` and one `/blog/<slug>` for readability.

## Risks & Mitigations

- **Conversion imperfect on complex markup** — the marketing site markup is simple
  and the handled subset covers it; the converter is straightforward to extend.
- **`context.next()` carries `_headers`-applied headers** — assumption verified
  during implementation; if not, the function sets the `Link` headers directly.
- **Token count is approximate** — documented as an estimate; the header is
  optional per spec.

## Out of Scope

- Cloudflare native "Markdown for Agents" toggle (requires Pro+; revisit if the
  zone is ever upgraded).
- The six non-applicable discovery items (API catalog, OAuth/OIDC, OAuth
  Protected Resource, Auth.md, MCP Server Card, WebMCP) — remain skipped per the
  prior spec; none describe surfaces this site exposes.
- DNS-AID — remains a separate Cloudflare DNS + DNSSEC infra task, outside this
  repo.
