# Deployment Checks

Before deploy:
- Verify the branch is current with the target base branch.
- Confirm the site builds as a static site without extra tooling.
- Scan for placeholder domains, inline styles, and root asset references.

Production URL checks:
- Confirm root pages load.
- Confirm key public pages resolve with the expected canonical URL.
- Check that shared assets load from `/assets/`.

Sitemap and robots:
- Confirm `sitemap.xml` contains public HTML pages only.
- Confirm `robots.txt` points to the production sitemap.

Cache and asset checks:
- Ensure images and CSS references are correct and cache-safe.
- Verify PNG fallback assets exist only where intended.

Rollback notes:
- Revert the latest deployment commit if a public page regresses.
- Keep the static asset paths stable when possible.
