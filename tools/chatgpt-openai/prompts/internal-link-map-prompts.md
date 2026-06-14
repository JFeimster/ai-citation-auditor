# Internal Link Map Prompts

## Purpose
Copy-paste prompts for internal link map prompts in AI Citation Auditor workflows.

## When to use it
- Use when you need a reusable prompt for pillar-to-spoke maps, supporting article maps, comparison-page maps, definition pages, service pages, FAQ support pages, and anchor text.
- Use when a coding agent or GPT needs a structured finance-aware instruction.
- Use when the task should stay review-before-publishing and no-guarantee safe.

## Inputs needed
- Source text or URL
- Task goal
- Audience or page type
- Known constraints

## Output format
- A structured table or checklist
- Safer rewrite or planning notes
- A concise summary of next actions

## Safety and compliance guardrails
- Do not guarantee AI citations, rankings, traffic, funding, approvals, or financial outcomes.
- Do not claim legal, tax, underwriting, lending, or compliance approval.
- Keep the prompts specific and reviewable.

## Reusable prompts
### Prompt 1
```text
Audit the following internal link map for pillar-to-spoke maps, supporting article maps, comparison-page maps, definition pages, service pages, FAQ support pages, and anchor text. Return a table with issue, severity, evidence, fix, and next step. Do not guarantee rankings, citations, funding, approvals, or financial outcomes.
```

### Prompt 2
```text
Rewrite only the risky or unclear parts of the internal link map. Preserve intent, keep the copy useful, and remove absolute or unsupported claims.
```

### Prompt 3
```text
Break the task into sections and evaluate each section separately for pillar-to-spoke maps, supporting article maps, comparison-page maps, definition pages, service pages, FAQ support pages, and anchor text. Quote the exact line or heading that needs attention.
```

### Prompt 4
```text
Create a concise checklist for pillar-to-spoke maps, supporting article maps, comparison-page maps, definition pages, service pages, FAQ support pages, and anchor text that an operator can run before publishing or shipping.
```

### Prompt 5
```text
Return a structured summary for internal link map with what is working, what is weak, what is risky, and what should happen next.
```

### Prompt 6
```text
If the request is out of scope, explain the boundary clearly and suggest the safest next action.
```

## Example use cases
- Audit a finance page before publish.
- Generate a safe rewrite or planning brief.
- Hand off a task to ChatGPT, Codex, Claude Code, Gemini, or another agent.

## QA checklist
- Prompts are copy/paste-ready.
- The output format is explicit.
- The no-guarantee rule is visible.
- The prompt stays scoped to finance, GPT, or registry work.

## Related files
- [ChatGPT / OpenAI toolkit README](/tools/chatgpt-openai/README.md)
- [Actions index](/tools/chatgpt-openai/actions.md)
- [Skills index](/tools/chatgpt-openai/skills.md)
- [Registry README](/registries/README.md)
- [Root actions README](/actions/README.md)

## Version notes
- Initial version generated on 2026-06-13.
- Designed for copy/paste use in ChatGPT, Custom GPTs, Codex, Claude Code, Gemini, and similar agents.
