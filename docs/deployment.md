# Deployment Guide

## General Notes
- Static site only.
- No build command required.
- Use local preview for testing:
  ```powershell
  python -m http.server 8080
  ```

## Vercel
- Connect the repo as a static project.
- Leave the build command empty if the platform allows it.
- Set the output root to the repository root.
- Verify canonical URLs and OG URLs use the production domain.

## Netlify
- Deploy as a static site.
- No build step required.
- Use the repository root as the publish directory.

## GitHub Pages
- Use the root or `docs/` strategy only if it matches the repo structure.
- Confirm asset paths resolve from the published base path.

## Cloudflare Pages
- Deploy the static root.
- No build command required.
- Verify asset and page paths after publish.

## Custom Domain Checklist
- Point the domain to the hosting provider.
- Update canonical URLs if the production domain changes.
- Verify root-relative asset links still resolve.

## DNS Checklist
- Confirm A or CNAME records are correct.
- Verify the apex and `www` behavior.
- Confirm SSL is active.
- Check that redirects preserve the canonical host.

## Pre-Launch QA Checklist
- All pages load without build tools.
- All internal links work.
- Metadata is present.
- Skip links work.
- No console errors.
- CTA links resolve correctly.
