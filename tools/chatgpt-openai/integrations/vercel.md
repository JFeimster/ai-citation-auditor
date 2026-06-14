# Vercel Integration

## Purpose
Planning guidance for connecting deployment status, latest production URL, build logs, and domain config to the registry architecture and workflow docs.

## When to use
- Use when mapping deployment status, latest production URL, build logs, and domain config.
- Use when you need source-to-registry traceability.
- Use when the task needs a safe, reviewable integration plan.

## What to map
- Source records
- Normalized fields
- Registry outputs
- Traceability notes

## Potential outputs
- /registries/generated/deployment-checks.json
- /registries/generated/environment-variables.json
- /registries/generated/domain-checklist.json
- /registries/generated/routes.json

## Required fields
- Source identifier or URL
- Field map
- Destination JSON path

## Safety and privacy
- Do not expose secrets or private data.
- Keep the source as a reference, not a credential.
- Do not over-collect data.

## Example workflow
- Confirm the source.
- Map the fields.
- Export or summarize the records.
- Validate the destination files.

## QA checklist
- Source is named.
- Output files exist.
- No secret values are included.
- Traceability is preserved.

## Related skills
- /tools/chatgpt-openai/skills/data-source-mapping.md
- /tools/chatgpt-openai/skills/registry-validation.md

## Related actions
- /tools/chatgpt-openai/actions.md

## Related registries
- /registries/README.md
- /registries/generated/README.md
- /registries/manual/README.md

## Version notes
- Initial version generated on 2026-06-13.
- This playbook is planning guidance, not a secret-bearing connector spec.
