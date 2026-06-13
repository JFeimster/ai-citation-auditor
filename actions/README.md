# Actions

This directory stores GPT Action schemas and the operational files that support them.

Directory structure:
- `no-auth/`
- `api-key/`
- `oauth/`
- `shared/`
- `archive/`

Auth types:
- `no-auth`
- `api-key`
- `oauth`

Rules:
- Never commit secrets.
- Never commit production API keys.
- Document required environment variables.
- Include test prompts for each action.
- Include a changelog for each real action.
- Validate OpenAPI JSON before upload.

Naming convention:
- `actions/{auth-type}/{action-name}/openapi.json`
