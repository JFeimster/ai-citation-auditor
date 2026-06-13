# QA Checklist

## Content
- No guaranteed ranking or AI citation claims.
- No guaranteed funding, approval, credit, or financial outcome claims.
- CTA links work.
- Page explains who it is for in the first screen.
- Page explains what output the GPT provides.

## Technical
- Mobile nav works.
- FAQ interactions work.
- Copy prompt button works.
- All anchor links work.
- No console errors.
- Metadata is present.
- Page loads without build tools.

## Accessibility
- Buttons have accessible labels.
- Focus states are visible.
- Color contrast is readable.
- Sections use semantic landmarks.
- Images have alt text if added.

## SEO
- Title is unique.
- Meta description is unique.
- Canonical URL is absolute.
- `og:url` is absolute.
- Open Graph title and description match the page.
- One H1 only.
- Internal links are descriptive.

## Schema
- Schema matches the visible content.
- FAQPage only appears when FAQ content is visible.
- Article schema only appears on article-style pages.
- HowTo schema is not used unless the page truly contains steps.
- Structured data validates without critical errors.

## Internal Links
- Hub pages link to spokes.
- Spokes link back to the right hub.
- Anchor text is descriptive.
- No orphan pages remain.
- No dead-end CTA blocks.

## Deployment
- Static preview works locally.
- Production asset paths resolve.
- Sitemap includes public HTML pages.
- Robots file points to the sitemap.
- Canonical URLs match the live domain.

## GitHub PR Review
- Diff is scoped to the request.
- No unrelated formatting churn.
- No invented claims or metrics.
- No duplicate thin pages.
- Commit message reflects the batch.
- Branch name matches the task.
