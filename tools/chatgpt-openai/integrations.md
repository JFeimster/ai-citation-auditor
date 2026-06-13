# Integrations

This tool interacts with GPT Actions, docs, and repo files.

Workflow:
- Keep action schemas in `/actions/`.
- Keep implementation notes in `tools/chatgpt-openai/`.
- Keep secrets out of git and out of docs examples.

Safety checks:
- Confirm the auth model is documented.
- Confirm the action response shape matches the schema.
