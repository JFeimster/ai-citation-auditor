# Error Response Patterns

Common error codes:
- `400` validation error
- `401` unauthorized
- `403` forbidden
- `404` not found
- `429` rate limited
- `502` upstream unavailable
- `500` unexpected failure

Standard JSON error object:
- `error.code`
- `error.message`
- `error.request_id` when available

Safe user-facing language:
- Explain the failure in plain language.
- Do not expose secrets or internal stack traces.
- Offer a retry path when appropriate.
