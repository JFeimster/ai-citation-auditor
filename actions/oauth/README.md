# OAuth Actions

OAuth actions are user-consented actions that access private data with least-privilege scopes.

Use them when:
- The action needs user authorization.
- The integration must read or act on scoped account data.

OAuth safety notes:
- Document every requested scope.
- Keep consent language narrow.
- Use the least privilege needed for the workflow.

Required files for real OAuth actions:
- `README.md`
- `openapi.json`
- `test-prompts.md`
- `changelog.md`

Do not treat OAuth as a shortcut for hidden permissions or undeclared data access.
