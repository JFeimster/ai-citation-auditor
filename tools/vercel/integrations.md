# Integrations

This tool interacts with Git, deployment previews, and static assets.

Workflow:
- Make the change on a feature branch.
- Validate locally before opening or updating a preview.
- Use the preview to confirm the page layout and metadata.
- Push only after the preview matches the repository expectations.

Safety checks:
- Confirm the deployed asset URLs match the repository paths.
- Do not rely on unpublished drafts as proof of deploy health.
