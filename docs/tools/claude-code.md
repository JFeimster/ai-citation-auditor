# Claude Code Guide

## Repo Map
- `/assets/css/styles.css` is the global stylesheet.
- `/assets/js/main.js` is the shared interaction script.
- `/pages/` contains public HTML pages.
- `/docs/` contains internal guides, prompts, and reference files.
- `/data/` contains site metadata and structured content.
- `/partials/` contains reusable HTML fragments.

## Commands

PowerShell:
```powershell
Get-ChildItem -Force
rg --files
git status --short
git grep "dummyimage.com" || true
python -m http.server 8080
```

Unix-friendly:
```bash
ls -la
rg --files
git status --short
git grep "dummyimage.com" || true
python -m http.server 8080
```

## Testing Checklist
- Run the pre-commit grep checks.
- Open the page locally in a browser.
- Verify all links and buttons work.
- Check that metadata is present.
- Check that no console errors appear.

## Accessibility Checklist
- One H1 only.
- Skip link present.
- Buttons have accessible labels.
- Focus states are visible.
- Semantic landmarks are used.
- Images have alt text if added.

## Copy Rules
- Keep finance language cautious and factual.
- Avoid guaranteed outcomes.
- Use direct answer blocks.
- Use fit-based and eligibility-based wording.
- Keep CTAs clear and specific.

## PR Review Checklist
- No broken links.
- No duplicated pages without a reason.
- No unsafe finance claims.
- No inline style blocks.
- No root `script.js` or `styles.css`.
- Pages match the shared scaffold.
