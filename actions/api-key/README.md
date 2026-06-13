# API-Key Actions

API-key actions are authenticated actions that use a secret stored outside the repo.

Use them when:
- The action needs a private service account or protected endpoint.
- The action should stay read-only but still requires authentication.

Secret handling rules:
- Never commit the real key.
- Keep environment variable names documented.
- Rotate secrets when access changes.

Required files for real actions:
- `README.md`
- `openapi.json`
- `test-prompts.md`
- `changelog.md`

Testing checklist:
- Confirm the header name matches the service contract.
- Confirm unauthorized requests fail safely.
- Confirm successful requests return only intended data.

Risk boundaries:
- Do not expose private user data unless the use case requires it and the schema documents it.
- Do not hide write behavior behind a read-only description.
