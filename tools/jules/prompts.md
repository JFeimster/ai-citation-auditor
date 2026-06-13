# Prompts

Repo-safe prompts:
- Review an existing static page for missing metadata, broken links, or duplicate content.
- Draft a new static page that matches the existing finance-content tone and uses root-relative assets.
- Rewrite a finance claim so it is safer, clearer, and not framed as a guarantee.

Page-generation prompts:
- Build a new page that uses the shared header/footer scaffold and links to the relevant docs.
- Create a comparison page that explains scope, fit, and boundaries without making performance claims.

QA and review prompts:
- Check the page for absolute canonical URLs, absolute `og:url`, and a single `h1`.
- Verify the page does not use inline styles, root `styles.css`, or root `script.js`.

Refactor prompts:
- Move shared logic into the global stylesheet or shared JS only when it is reused across pages.
- Keep page-specific CSS and JS thin, scoped, and easy to remove.
