# Cursor Guide

## Project Summary
AI Citation Auditor is a static finance-content microsite for a custom GPT that audits AI citation readiness, answer clarity, extraction structure, schema fit, internal links, trust signals, and risky claims.

## Brand Guardrails
- Keep the tone sharp and operator-friendly.
- Avoid hype and generic SEO language.
- Use citation readiness, risk-aware wording, and fit-based phrasing.
- Do not imply guaranteed rankings, citations, traffic, approvals, funding, or credit improvement.

## Safe File-Editing Rules
- Do not add frameworks.
- Do not add inline CSS unless explicitly requested.
- Use `/assets/css/styles.css`.
- Use `/assets/js/main.js`.
- Preserve CTA URLs.
- Preserve no-guarantee finance language.
- Prefer semantic HTML and minimal markup changes.

## Prompt Examples
- Audit this page for citation readiness and risky claims.
- Rewrite this section with safer finance wording.
- Map internal links for this page cluster.
- Recommend schema that matches the visible content.

## Common Tasks
- Add a resource doc under `docs/resources/`.
- Add a tool guide under `docs/tools/`.
- Check for broken internal links.
- Update metadata and navigation when new pages are added.

## Do-Not-Change List
- Main GPT CTA URL.
- Mailto audit CTA unless a better CTA already exists.
- Claim guardrails.
- Existing accessible skip links and focus behavior.
- One H1 per page.
