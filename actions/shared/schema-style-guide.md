# Schema Style Guide

Naming conventions:
- Use short, descriptive titles.
- Keep `operationId` unique and stable.
- Name request and response objects by behavior, not by implementation detail.

Request and response naming:
- Keep properties concise and explicit.
- Use one casing style consistently within a schema.
- Document required fields in the schema itself.

Error schema conventions:
- Return a predictable JSON error object.
- Include a machine-readable code and a safe user message.

Examples:
- Include response examples for the happy path.
- Add error examples for auth, validation, and upstream failure.

Versioning:
- Change versions when schema behavior changes in a breaking way.
- Keep changelog notes next to the schema.
