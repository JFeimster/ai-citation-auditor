# Knowledge Files

This directory tracks files intended for upload to the AI Citation Auditor Custom GPT's **Knowledge** section.

Use these files as the GPT's durable reference layer: audit rules, rewrite banks, schema guidance, service context, prompt patterns, and project-specific operating notes.

## Purpose

Knowledge files should help the GPT answer consistently about:

- AI citation readiness
- finance-content audit criteria
- risky finance claim rewrites
- schema fit and structured-data choices
- internal-link mapping
- service offers and manual-audit scope
- brand voice and no-guarantee claim guardrails

## Recommended Upload Set

Start with these repo files when refreshing the Custom GPT knowledge base:

- `AGENTS.md`
- `docs/prompts.md`
- `docs/copy-bank.md`
- `docs/schema.md`
- `docs/service-offers.md`
- `docs/qa.md`
- `docs/resources/audit-checklist.md`
- `docs/resources/prompt-template.md`
- `docs/resources/risky-claims-rewrite-bank.md`
- `docs/resources/schema-recommendations.md`
- `docs/resources/internal-link-template.md`
- `docs/resources/sample-audit-output.md`
- `docs/resources/content-refresh-brief.md`

## Maintenance Rules

- Keep knowledge files plain-text friendly.
- Prefer Markdown for uploaded reference files.
- Avoid duplicate files with conflicting instructions.
- Keep claim guardrails synchronized across `AGENTS.md`, `docs/copy-bank.md`, and rewrite-bank files.
- Remove stale service offers or CTAs before uploading.
- Re-upload revised files after meaningful changes to prompts, services, risky claims, schema guidance, or site positioning.

## What Not to Upload

Avoid uploading files that are primarily implementation details unless the GPT needs them for a specific support workflow:

- full HTML pages
- full CSS files
- generated sitemap files
- robots.txt
- raw screenshots
- temporary Codex/Jules working notes

## Suggested Refresh Workflow

1. Review the files listed in the recommended upload set.
2. Confirm no files contain outdated CTAs, pricing, or service claims.
3. Confirm no file implies guaranteed rankings, citations, funding, approvals, credit improvement, or compliance approval.
4. Upload the current file set to the Custom GPT Knowledge section.
5. Test the GPT with one content audit prompt, one risky claim rewrite prompt, and one schema recommendation prompt.
