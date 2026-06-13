# AI Citation Auditor

Static HTML/CSS/JS site for the AI Citation Auditor GPT.

## Structure

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/brand/favicon.svg`
- `assets/img/ui/og-default.svg`
- `pages/*`
- `pages/blog/*`
- `pages/legal/*`
- `data/*`
- `knowledge/*`

## Local Preview

Run a local server from the repo root:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Do not open `index.html` directly from Windows. The site uses root-relative `/assets` and `/pages` paths that require a server.

## Deploy

Vercel deployment does not require a build command.

## Notes

- Primary CTA: https://chatgpt.com/g/g-6a2cefb19d3c81919b49852b4c53fc9d-ai-citation-auditor
- Contact: jasonfeimster@gmail.com
- Compliance: educational only; not legal, tax, underwriting, lending, credit, or financial advice; no guarantees.
