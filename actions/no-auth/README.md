# No-Auth Actions

No-auth actions are public read-only or lookup-style actions that do not require a user secret.

Use cases:
- Public lookup
- Public calculator
- Public metadata check
- Static JSON fetch

Risks:
- Public endpoints only.
- No private user data.
- No hidden write actions.

Required files for each action:
- `README.md`
- `openapi.json`
- `test-prompts.md`
- `changelog.md`
