# AGENTS.md

## Project
AI Citation Auditor is a static microsite for a GPT that audits finance content for AI citation readiness, answer clarity, extraction structure, schema fit, internal links, trust signals, and risky claims.

## Stack
- Plain static HTML, CSS, and vanilla JS.
- No framework.
- No build step.
- No React, Next.js, Astro, Tailwind, npm packages, bundlers, or external UI kits.
- Deploys as a static site on Vercel.

## Canonical file paths
- Global CSS: `/assets/css/styles.css`
- Global JS: `/assets/js/main.js`
- Favicon: `/assets/img/brand/favicon.svg`
- OG image: `https://ai-citation-auditor.vercel.app/assets/img/ui/og-default.svg`

## Code rules
- Do not add large inline style blocks to HTML pages.
- Use `assets/css/styles.css` for reusable styles.
- Use `assets/js/main.js` for site behavior.
- Do not create root `script.js`.
- Do not create root `styles.css`.
- Keep pages lightweight and semantic.
- Preserve skip links, focus states, accessible buttons, and one H1 per page.
- Use root-relative links for internal assets and pages.
- Use absolute production URLs for canonical and `og:url` metadata.

## Brand voice
Sharp, tactical, finance-aware, operator-friendly, anti-generic SEO sludge. Clear and useful beats hype.

## Claim guardrails
Never claim or imply:
- guaranteed AI citations
- guaranteed rankings
- guaranteed traffic
- guaranteed approvals
- guaranteed funding
- guaranteed credit improvement
- guaranteed financial outcomes
- compliance approval
- legal, tax, underwriting, lending, credit, or financial advice

Use safer phrases:
- “citation readiness”
- “may improve clarity”
- “can help structure”
- “risk-aware wording”
- “eligibility-based”
- “fit-based”
- “review before publishing”
- “not a guarantee”

## Structured data rules
- Only include FAQPage schema when the FAQ is visibly present on the same page.
- FAQPage schema questions must match visible FAQ questions exactly.
- Article schema is only for article-style pages.
- Do not use HowTo schema unless the visible page has real sequential instructions.

## CTA rules
Preserve the main GPT CTA:
https://chatgpt.com/g/g-6a2cefb19d3c81919b49852b4c53fc9d-ai-citation-auditor

Use mailto CTAs for manual audit/service requests unless a better existing CTA is already present.

## Do not invent
- testimonials
- client logos
- partner claims
- performance stats
- case study outcomes
- compliance approvals
- lender relationships
- ranking/citation results

## Pre-commit checks
Run:
git grep "dummyimage.com" || true
git grep "https://example.com" || true
git grep 'href="styles.css"' || true
git grep 'src="script.js"' || true
git grep "<style>" -- "*.html" || true
git grep "Placeholder page" || true

Expected: no matches, except unsafe claim phrases may appear only when clearly labeled as examples of risky wording to avoid.
