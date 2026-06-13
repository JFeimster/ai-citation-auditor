# Integrations

This tool interacts with Git, local files, docs, and deploy previews.

Workflow:
- Make the change on a feature branch.
- Check the repo state before and after edits.
- Keep generated assets and docs in the expected folder structure.
- Push only after local validation passes.

Safety checks:
- Scan for placeholder domains and unsafe root asset references.
- Confirm public pages still use the shared CSS and JS files.
