---
# akdw-ft2b
title: Fix duplicate contradictory Content-Signal in robots.txt
status: completed
type: bug
created_at: 2026-07-21T06:45:01Z
updated_at: 2026-07-21T06:45:01Z
---

Post-deploy curl revealed robots.txt had TWO Content-Signal lines with conflicting ai-input (no vs yes). Root cause: merge 1c69eae combined a6dd4fb (Faiq's 19 Jul attempt, ai-input=no) with my f56ca4d (ai-input=yes); both added the directive at different line positions so git saw no conflict and kept both. Fix: removed the stale ai-input=no line, kept ai-input=yes per the chosen Marketing-friendly preference. Verified: 1 Content-Signal line in source + dist.

## Summary of Changes

Removed duplicate Content-Signal line from public/robots.txt (stale ai-input=no from a6dd4fb). Single clean directive remains: ai-train=no, search=yes, ai-input=yes. Verified 1 line in source + dist. Commit 50cde2a.
