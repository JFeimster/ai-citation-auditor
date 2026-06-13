# Auth Patterns

No-auth pattern:
- Use for public read-only resources.
- Keep the response public and deterministic.

API-key pattern:
- Use when the service needs a shared secret.
- Keep the key outside the repo and document the header or query contract.

OAuth pattern:
- Use when a user must consent to scoped access.
- Document every scope and keep the permissions minimal.

Choosing the correct auth type:
- Prefer no-auth when public access is sufficient.
- Prefer API key when the service is private but not user-specific.
- Prefer OAuth when the action touches user-specific data.

Secrets checklist:
- No production secrets in git.
- Document environment variables.
- Rotate keys if the access model changes.

User data boundaries:
- Collect the minimum data needed.
- Explain what is read and what is not.
- Never broaden access silently.
