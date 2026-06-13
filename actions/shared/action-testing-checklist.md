# Action Testing Checklist

- Validate the JSON or OpenAPI document.
- Confirm auth behavior matches the declared auth type.
- Run happy-path tests.
- Run empty, invalid, and unavailable-result tests.
- Scan the schema and notes for secrets.
- Review privacy boundaries.
- Check GPT behavior against the documented prompts.
- Keep rollback notes in the changelog.
