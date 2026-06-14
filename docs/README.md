# Docs

This folder holds supporting documentation for the static site.

Common subfolders and files:
- `docs/resources/` for audit and content resources
- `docs/tools/` for user-facing tool notes
- `tools/` for deeper operational playbooks
- `actions/` for GPT Action schemas and supporting files
- `knowledge/` for repo knowledge and prompt references
- `registries/` for structured records, source manifests, and JSON schemas

## Custom GPT knowledge workflow
- Keep source documents in clear, reviewable markdown.
- Split large files before upload if they become hard to maintain.
- Mirror the source-of-truth order in the knowledge manifest and registries.
- Remove stale instructions instead of duplicating them in multiple files.
