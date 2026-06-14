# API-Key Actions

## Purpose
Planning and review guidance for api-key actions in this repo.

## Action category
authenticated service calls with a narrow surface

## Auth type considerations
- State the auth model explicitly.
- Keep secrets outside the repo.
- Use least-privilege scopes when auth is required.

## When to use
- Use when defining the action boundary and user-facing behavior.
- Use when planning schema validation and error handling.
- Use when preparing test prompts for happy path and failure modes.

## When not to use
- Do not use as a substitute for the actual OpenAPI schema.
- Do not include live keys or credentials.
- Do not promise outcomes the upstream service cannot guarantee.

## Required inputs
- Upstream service details
- Auth model
- Request and response needs
- Privacy constraints

## Expected outputs
- Action schema outline
- Error model
- Test prompts
- Risk review

## User-facing behavior
- Explain the action behavior in user-facing terms.
- Keep the action surface narrow.
- Make fallback behavior visible.

## Privacy and safety rules
- Do not bake secrets into examples.
- Do not blur read and write behavior.
- Keep privacy boundaries explicit.

## Error-handling guidance
- Explain validation failures clearly.
- Explain auth failures clearly.
- Explain upstream failures without leaking internals.

## Test prompts
### Test 1
```text
Happy path: execute the action with valid inputs and verify the response shape.
```

### Test 2
```text
Missing parameter: omit a required input and confirm the error is user-friendly.
```

### Test 3
```text
Invalid auth: send an expired or missing credential and confirm the auth failure path.
```

### Test 4
```text
Rate limit: simulate a throttled response and confirm the retry-safe message.
```

### Test 5
```text
Privacy boundary: confirm the action does not expose private data or secrets.
```

## Related root /actions/ schema path
- /actions/api-key/README.md

## Future implementation notes
- Keep this planning doc aligned with the live schema example.
- Add more concrete examples when real actions expand.
