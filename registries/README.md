# Registries

## Purpose
The registry tree stores the structured records that connect prompts, skills, integrations, actions, services, and content workflows across this repo.

## Folder map
- `manual/` for hand-curated JSON records.
- `generated/` for records produced from Notion, APIs, repository scans, or scripts.
- `schemas/` for JSON Schema files that validate registry shapes.
- `sources/` for extraction configs and source manifests.
- `archive/` for retired or superseded registries.

## Manual vs generated rules
- Use `manual/` when a human is curating the record or when the source is a maintained reference list.
- Use `generated/` when the record is produced from a source system, scan, or export.
- Keep source references and timestamps in both cases when they help traceability.

## Naming conventions
- Use lowercase, kebab-case file names.
- Use stable slugs in record identifiers.
- Keep related registry names aligned with the related prompt, skill, or integration file names.

## Slug conventions
- Prefer short, readable slugs.
- Avoid spaces, underscores, and camelCase.
- Keep slugs stable once published.

## Required metadata conventions
- Include `schema_version` where the file benefits from versioning.
- Include `generated_at` or `last_updated` when freshness matters.
- Include `source_url` or a source identifier when traceability helps.
- Use `null` for unknown values.

## No secrets rule
- Never commit live API keys, private tokens, production credentials, or confidential identifiers.
- Use variable names only when documenting environment variables.
- Use `.invalid` domains for template-only endpoints.

## JSON validation instructions
- Run `python -m json.tool` on every JSON file under `registries/` before committing.
- Check that schemas and records agree on required fields and types.
- Re-run validation whenever a registry changes.

## Notion integration notes
- Document Notion databases as source identifiers in `registries/generated/notion-databases.json`.
- Keep workspace URLs as references, not credentials.
- Normalize Notion exports before they become registry records.

## GitHub/repo scan notes
- Index only files that actually exist in the repo.
- Keep scan outputs tied to paths and last review dates.
- Separate planning docs from implementation artifacts.

## Refresh cadence recommendations
- Funding partners: monthly.
- Custom GPTs: weekly.
- Site pages: on commit.
- Blog posts: on publish.
- Actions: on schema change.
- Registries: on source update.

## Relationship to tools/chatgpt-openai/
- The prompt packs, skills, actions, and integrations in `tools/chatgpt-openai/` explain how the registry records should be used.
- The registry files provide the structured data that those docs reference.

## Relationship to root /actions/
- Keep the canonical action schemas in `/actions/`.
- Use the planning docs in `tools/chatgpt-openai/actions/` to explain and test them.

## Relationship to knowledge files
- The knowledge files under `knowledge/` or the GPT upload manifest should reference the same source-of-truth ordering used in the registries.
- When a knowledge file changes, update the relevant registry record and the upload manifest.
