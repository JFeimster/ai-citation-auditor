# Local Markdown Sources Integration

## Purpose
Planning guidance for connecting prompt libraries, skills libraries, docs indexes, and knowledge manifests to the registry architecture and workflow docs.

## When to use
- Use when mapping prompt libraries, skills libraries, docs indexes, and knowledge manifests.
- Use when you need source-to-registry traceability.
- Use when the task needs a safe, reviewable integration plan.

## What to map
- Source records
- Normalized fields
- Registry outputs
- Traceability notes

## Potential outputs
- /registries/generated/prompt-library.json
- /registries/generated/skills-library.json
- /registries/generated/docs-index.json
- /registries/generated/knowledge-manifest.json

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
