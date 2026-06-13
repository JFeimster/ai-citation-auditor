# Example Public Lookup Action

Purpose:
- Template example for a public, no-auth lookup action.

Endpoint behavior:
- The example exposes a single read-only lookup endpoint for a public query string.

How to adapt it:
- Replace the placeholder server with your real public endpoint.
- Keep the response shape stable.
- Add any query validation your real service requires.

Testing notes:
- Verify the action works without user secrets.
- Confirm empty, ambiguous, and unavailable queries fail safely.

Warning:
- This is a template, not a production integration.
