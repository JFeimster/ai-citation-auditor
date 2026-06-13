# GPT Actions

GPT Actions are the repo's machine-readable action scaffolds for OpenAI-style integrations.

Use them when:
- A GPT needs to fetch public data.
- A GPT needs an API-key-backed operation.
- A GPT needs OAuth access to user-authorized data.

Auth types:
- No-auth: public lookup, public metadata, and static read-only operations.
- API key: authenticated service calls where the key is stored outside the repo.
- OAuth: user-consented access with least-privilege scopes.

Rules:
- Never commit secrets or production credentials.
- Keep schemas validated before upload or use.
- Store test prompts and changelog notes with real actions.
- Keep `/actions/` as the canonical schema home.
