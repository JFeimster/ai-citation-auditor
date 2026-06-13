# Skills

Practical skills:
- Design action schemas with clear auth boundaries.
- Keep action docs aligned with repo conventions.
- Separate no-auth, API-key, and OAuth use cases cleanly.

Boundaries:
- No secrets in the repo.
- No hidden write behavior.
- No broad scopes without a documented reason.

Review checklist:
- Schema validates.
- Auth type matches the use case.
- Test prompts are included.
- Changelog notes are included.
