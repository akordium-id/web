# Audit 001 Follow-up: Approved revisions

**Date:** 2026-11-11  
**Scope:** The 12 Indonesian and English drafts listed in [Audit 001](audit-001-2026-11-11.md)  
**Authorization:** The user approved revisions for findings 1 through 5.

## Changes made

1. **Punctuation:** Removed em dash punctuation from the ten affected drafts. A scan of all 12 drafts found no remaining instances.
2. **Contrast-and-caveat framing:** Reworked repeated openings to lead with the business decision or next action. Kept qualifications where they explain a real operational limit.
3. **Article rhythm:** Varied the decision-led openings and article-specific endings. Retained checklists where they directly support a launch, pilot, readiness, or operational decision.
4. **Calls to action:** Rewrote all 12 closing invitations to identify a discussion relevant to each topic, without promising an unconfirmed deliverable.
5. **Voice:** Made the recommendations more direct and business-oriented. Did not add anecdotes, customer examples, or first-hand claims because no verified source material for those details was provided. The explicitly hypothetical coordination example remains labeled as hypothetical.

## Files revised

- `../content-drafts/id/logistics-website-quote-requests.md`
- `../content-drafts/en/logistics-website-quote-requests.md`
- `../content-drafts/id/fleet-coordination-chat-spreadsheets.md`
- `../content-drafts/en/fleet-coordination-chat-spreadsheets.md`
- `../content-drafts/id/fleet-system-pilot-checklist.md`
- `../content-drafts/en/fleet-system-pilot-checklist.md`
- `../content-drafts/id/fleet-dashboard-kpis-workflows.md`
- `../content-drafts/en/fleet-dashboard-kpis-workflows.md`
- `../content-drafts/id/fleet-geofence-operational-exceptions.md`
- `../content-drafts/en/fleet-geofence-operational-exceptions.md`
- `../content-drafts/id/gps-tracking-small-fleet-readiness.md`
- `../content-drafts/en/gps-tracking-small-fleet-readiness.md`

## Round 2: independent re-audit (Sonnet 5.5) and revisions 1 to 5

The user asked for a second audit and approved all five of its recommendations. Items 1 and 2 cover recommendation 1; items 3 to 6 cover recommendations 2, 3, 5, and 4.

1. **Leaked editorial note and off-topic link:** Removed the internal sentence ("Artikel ini berfokus pada…") from both dashboard drafts and the unrelated GPS protocol link from both logistics drafts.
2. **Links to unpublished articles:** Removed links to `geofencing-postgis`, `gps-data-postgresql-timescaledb`, and `realtime-pipeline-reliability`, which are still `draft: true` in the najib.id blog. Re-add them once those articles are published.
3. **Announcement sentences:** Replaced "Panduan ini membantu…" style openings with a direct recommendation or question in the dashboard, geofence, GPS-readiness, and pilot drafts.
4. **Company voice:** Added restrained "kami" / "we" recommendations to all 12 drafts. They state a recommendation only; none claims client experience, results, or numbers.
5. **Defensive disclaimers:** Rewrote repeated "jangan / tidak otomatis / do not" statements as positive instructions. Kept the hypothetical-example label and the caveats that change a decision.
6. **CTA closers:** Each closing now asks for one concrete input (a past delay, a trip-status flow, a service page and quote form, a list of systems and data) instead of repeating the same invitation.

### Verification

- No em dash, en dash, or double hyphen in any of the 12 drafts.
- No links to unpublished najib.id articles or the off-topic protocol link remain.
- All 12 drafts keep `status: draft`.
- Remaining "bukan / not" phrasing is limited to two section headings and factual statements (for example, "tidak adanya event bukan bukti…").
- Not run: no code tests, since only draft Markdown changed.
