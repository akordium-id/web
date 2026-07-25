---
# akdw-21lr
title: 'Agent-readiness: Link headers, Content Signals, Agent Skills index'
status: completed
type: feature
priority: normal
created_at: 2026-07-21T05:40:49Z
updated_at: 2026-07-21T05:59:51Z
---

Implement 3 applicable isitagentready.com items for akordium.id (static Astro site on Cloudflare Pages): (1) Content-Signal directive in robots.txt [ai-train=no, search=yes, ai-input=yes]; (2) Link response headers via public/_headers pointing to sitemap + agent-skills index; (3) Agent Skills discovery index at /.well-known/agent-skills/ with one company-profile SKILL.md. Skip OAuth/MCP/API-catalog/WebMCP/DNS-AID (no surface/infra). Files: public/robots.txt (edit), public/_headers (new), public/.well-known/agent-skills/index.json (new), public/.well-known/agent-skills/akordium-profile.md (new).

## Summary of Changes

Delivered 3 of 11 isitagentready.com items (the rest deliberately skipped — see spec `docs/superpowers/specs/2026-07-21-agent-readiness-design.md`):

- [x] **Content Signals** — `public/robots.txt`: appended `Content-Signal: ai-train=no, search=yes, ai-input=yes` (draft-romm-aipref-contentsignals, marketing-friendly).
- [x] **Link headers** — `public/_headers` (new, Cloudflare Pages): `rel=sitemap` -> sitemap-index.xml, `rel=service-meta` -> agent-skills index; explicit Content-Type for the two `.well-known` assets.
- [x] **Agent Skills index** — `public/.well-known/agent-skills/`: RFC v0.2.0 `index.json` ($schema + skills[]) with one `akordium-profile` skill; sha256 computed live from the file on disk and verified to match in `dist/`.

**Verified locally:** `npm run build` clean (10 pages); `dist/` contains `_headers`, `robots.txt`, `.well-known/agent-skills/*`; `index.json` sha256 == `sha256sum dist/.well-known/agent-skills/akordium-profile.md` (458026d9...).

**Commit:** f56ca4d (spec: aa4bf78).

**Post-deploy verification needed (cannot confirm pre-deploy):** `curl -I https://akordium.id/` shows the two `Link` headers; `curl .../robots.txt` shows `Content-Signal`; `curl .../.well-known/agent-skills/index.json` returns valid JSON.

**Out of scope / deferred:** Markdown for Agents (needs host-side content negotiation), DNS-AID (DNS provider + DNSSEC, infra). API catalog / OAuth / MCP items become relevant only if Akordium ships an API/auth/MCP server later.
