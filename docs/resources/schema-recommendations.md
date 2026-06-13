# Schema Recommendations

## SoftwareApplication Schema
Use for pages that describe the AI Citation Auditor GPT or another tool page.

Include:
- name
- description
- applicationCategory
- operatingSystem
- offers only if there is a real offer

Do not use it for unrelated editorial pages.

## FAQPage Schema
Use only when the page visibly includes an FAQ section.

Requirements:
- Questions must match the visible questions exactly.
- Answers must match the visible answers closely.
- Keep the FAQ on the same page as the schema.

## BreadcrumbList Schema
Use when the page visibly shows breadcrumbs.

Requirements:
- Match the visible trail.
- Keep item positions correct.
- Use the actual page hierarchy, not a fabricated one.

## Organization Schema
Use when the page is describing the site or brand.

Include:
- name
- logo
- url
- sameAs only if the URLs are real and relevant

Do not use it to pad unrelated pages.

## Article Schema
Use only on article-style pages with a clear editorial structure.

Include:
- headline
- description
- author if known
- datePublished
- dateModified

## When Not to Use HowTo Schema
Do not use HowTo schema unless the page truly contains sequential instructions that are visible on the page.

Examples of pages that usually should not use HowTo:
- opinion pages
- comparison pages
- service pages
- FAQ pages
- landing pages with loose advice

## Validation Checklist
- Schema matches visible content.
- No hidden FAQ entries.
- No fabricated dates.
- No unsupported offer data.
- No schema for content not present on the page.
- Rich results test or validator passes without critical errors.

## Common Mistakes
- Adding FAQPage schema without a visible FAQ.
- Adding HowTo to a page with no real step-by-step process.
- Using Article schema on a service landing page.
- Making the schema more promotional than the page.
- Describing content that does not appear in the HTML.
