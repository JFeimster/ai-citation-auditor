# Workflows

Typical workflow:
1. Inspect the existing page or asset pattern.
2. Generate or edit the smallest set of files needed.
3. Validate HTML, CSS, JS, and any JSON or SVG assets.
4. Commit only after the repository is clean enough to review.

Branch behavior:
- Work on a feature branch.
- Keep the diff scoped to the requested task.
- Preserve prior generated assets unless a newer intentional fix exists.

Safety checks:
- No placeholder domains.
- No inline style blocks.
- No root `styles.css` or `script.js`.
- No accidental public-page regressions.
