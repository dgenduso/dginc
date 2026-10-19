# Platform Operating System — Full Spec

This document captures the full entity model and design decisions for the platform's operating system layer. It is the living spec — update it as the model evolves.

---

## Philosophy

The platform exists to create and maintain **organizational alignment** — not as a one-time workshop output, but as a durable, operational property of how the organization works.

Most organizations lose alignment the moment the offsite ends. Strategy drifts from execution. What the org intends and what actually happens diverge. Tacit knowledge stays in people's heads. Agents can't operate in that environment — they need things made explicit.

This platform makes alignment structural:

- **Values → Policy → Jobs → Activities → Work** — the organization's identity flows down into every unit of work. What the org believes is aligned with what gets done, day to day.
- **People and Agents as Workers** — human and digital workers operate in the same system, the same role structure, the same accountability model. Not siloed, not separate — aligned.
- **Work as a learning loop** — every piece of work is evaluated. That evaluation reveals where alignment has broken down or where understanding is incomplete. The feedback feeds the next cycle. The organization gets smarter continuously, not periodically.
- **Customer value as the signal** — the loop is grounded in what customers actually need. Learning surfaces gaps. Innovation closes them. The org stays aligned with the people it serves.

Alignment isn't achieved once. It's maintained through two mechanisms:
- **Learning** — surfaces misalignment. Stakeholder interviews, evaluations, and feedback loops reveal where what the org intends and what happens have drifted apart.
- **Operationalizing** — locks alignment in. When a policy gets written into the system, when a Job gets defined and an Agent gets the context to do it, when a process becomes explicit rather than tacit, alignment stops being aspirational and becomes structural.

The Align → Learn → Innovate engagement cycle is three expressions of the same idea: align the organization, learn where alignment has broken or where it needs to grow, then innovate to restore or extend it. Then repeat.

The platform is what makes that loop sustainable at scale — across people, agents, functions, and time zones.

---

## Vision

The platform helps organizations operate using a new model: Jobs define roles, Activities define repeatable processes, and Workers (people or agents) do Work. Every piece of work is tracked, assigned, and produces a deliverable. This is the same model whether the worker is an AI agent conducting an intake conversation or a city employee cleaning up a block.

The organization itself is a structured container — not just a tenant in a database, but a living representation of how the org operates and what it believes: its values, policies, standards, knowledge, roles, and jobs. When an agent is deployed into a role, it draws from that container. When a human joins, they're oriented by it. The container is what alignment is made of.

---

## Core Entities

### Organization

The top-level container. Every entity belongs to an Organization.

- `isPlatform: boolean` — marks DG Inc as the platform org
- All entities below scoped to an Organization

---

### Person

A human individual. Can be a platform user, a client, or a city resident.

- `firstName`, `lastName`
- `email`, `phone?`
- `companyName?`, `jobTitle?`
- `OneToOne → User` (optional — not all Persons have accounts)

---

### Agent

A digital worker. Has a system prompt, belongs to an Organization.

- `name`, `slug`
- `systemPrompt: string`
- `organization → Organization`

---

### Worker

The join between a Person or Agent and an Organization. Represents someone doing work for that org.

- `person? → Person`
- `agent? → Agent`
- `organization → Organization`
- One of `person` or `agent` must be set

---

### Job

A role definition within an Organization. Describes what a Worker in this role is responsible for.

```
Job
  id, name, slug, description?
  organization → Organization
```

**Example:** "Block Cleaner", "Intake Specialist", "Block Manager"

---

### Activity

A repeatable process template. The "what" — describes a unit of work that can be done repeatedly.

```
Activity
  id, name, slug
  objective?         — what this activity is trying to accomplish
  estimatedDuration? — minutes, for human workers (future: cost estimate for agents)
  deliverableType    — enum: STORY | NONE
  organization → Organization
```

**Example:** "Pick up trash", "Conduct intake conversation", "Pressure wash sidewalk"

**Note:** Economic fields (`defaultWage`, `defaultWageType`, `budgetMin`, `budgetMax`) are deferred to a follow-on spec once the payment model is finalized.

---

### JobActivity

Join table linking Jobs to Activities, with RASCI accountability flags.

```
JobActivity
  id
  job → Job
  activity → Activity
  responsible: boolean = true    ← MVP: only this one matters
  accountable: boolean = false
  supported: boolean = false
  consulted: boolean = false
  informed: boolean = false
```

**Example:** Block Cleaner Job → "Pick up trash" Activity, `responsible: true`

RASCI flags are stored but not enforced in this iteration.

---

### Work

A specific instance of an Activity being done. The "instance" to Activity's "template."

```
Work
  id
  activity → Activity
  organization → Organization
  status: WorkStatus             — PENDING | IN_PROGRESS | COMPLETE | NEEDS_REWORK
  context: json?                 — flexible bag: { chatId, location, contactId, ... }
  proofUrl?: string              — photo/file URL submitted as proof of completion
  startedAt?: Date
  completedAt?: Date
```

**Key design:** Work starts PENDING with no assignment. It is **claimable** — it appears on a board and any eligible Worker can claim it. This matches the gig economy model (DoorDash, public works board). The `WorkAssignment` is created at claim time, not at Work creation time.

**Economic fields deferred:** `budget`, `wageType`, `actualCost` will be added in a follow-on spec.

---

### WorkAssignment

Created when a Worker claims a Work item. Links Work to the specific Worker doing it.

```
WorkAssignment
  id
  work → Work (OneToOne)
  worker → Worker
  assignedAt: Date = now()
```

- For agent-driven work: created by the agent BullMQ worker at job-start
- For human work: created when the human claims from the board (UI follow-on)

**Deferred:** `hoursLogged` (for hourly work), assignment acceptance/decline status

---

### Story

The structured deliverable output from an intake-type Activity (`deliverableType: STORY`).

```
Story
  id
  work → Work (OneToOne)
  organization → Organization
  personName: string
  currentState?: string
  desiredFutureState?: string
  painPoints?: string
  themes?: string
  rawNotes?: string
  status: StoryStatus            — DRAFT | COMPLETE
```

Created in DRAFT status when the agent sends its opening message. Updated as the conversation progresses. Stories serve as the case context — both the immediate (what needs to happen now) and longitudinal (what's causing this, patterns over time).

---

## Entity Relationships

```
Organization
  ├── Job (many)
  │     └── JobActivity (many) ──→ Activity
  ├── Activity (many)
  ├── Worker (many)
  │     ├── person? → Person
  │     └── agent? → Agent
  └── Work (many)
        ├── activity → Activity
        ├── WorkAssignment (one) ──→ Worker
        └── Story (one, if deliverableType = STORY)
```

---

## Work Lifecycle

```
PENDING
  │  (Worker claims → WorkAssignment created)
  ▼
IN_PROGRESS  (startedAt set)
  │  (Worker completes, submits proof)
  ▼
COMPLETE     (completedAt set, proofUrl set)

  or

IN_PROGRESS → NEEDS_REWORK → IN_PROGRESS → COMPLETE
```

---

## Intake Flow (Current Implementation)

1. Resident/prospect submits intake form → `requestChat` mutation
2. `chat.service.ts` creates:
   - `User` (PREACTIVATED) + `Person` + activation email sent
   - `Contact` linking Person to platform org
   - `Chat`
   - `Work` (`activity: intakeActivity, status: PENDING, context: { chatId }`)
3. BullMQ enqueues `{ workId }` to `agentOpeningMessage` queue
4. Agent BullMQ worker:
   - Loads `Work` by `workId`
   - Creates `WorkAssignment` (agent claims the work)
   - Sets `work.status = IN_PROGRESS`
   - Calls Anthropic API with `agent.systemPrompt`
   - Writes opening message to chat
   - Creates `Story` (DRAFT) linked to Work
   - Sets `work.status = COMPLETE`

---

## Seed Data (DG Inc)

```
Organization: DG Inc (isPlatform: true)
  Person: Dan Genduso
  User: dan@dgenduso.com (ACTIVATED)
  Worker: Dan → DG Inc

  Agent: Intake Agent (systemPrompt: "...")
  Worker: Intake Agent → DG Inc

  Job: Intake Specialist (slug: intake-specialist)
  Activity: Conduct intake conversation (slug: intake-conversation, deliverableType: STORY)
  JobActivity: Intake Specialist → Conduct intake conversation (responsible: true)
```

---

## Deferred / Future Specs

### Economic Layer
- `Activity.defaultWage`, `defaultWageType` (FIXED | HOURLY)
- `Work.budget` (inherited from Activity at creation — the org's max willingness to pay)
- `Work.actualCost` (written on completion — token cost for agents, agreed wage for humans)
- `WorkAssignment.hoursLogged` (for hourly human work)
- Design question: fixed price (incentive-aligned) vs hourly (incentivizes slow work) — leaning fixed for public board work

### Human Worker Inbox
- Work board UI: list of PENDING Work items available to claim
- Claim action: creates WorkAssignment
- Work detail: accept → start → submit proof → complete

### Contact Permissions
- User settings: list of orgs that have your Contact info
- Per-org permission flags (deferred from Contact entity)

### Prompt Generation
- Generate agent system prompt from Job + Activity + Knowledge Articles
- Currently: `Agent.systemPrompt` is a static text blob

### Story Evolution
- Stories should be updateable/appendable as conversations progress
- Story review / sign-off flow
- Longitudinal pattern analysis across Stories for a block/location

### Advanced Work Model
- `WorkStep`: ordered steps within a Work item (DoorDash-style: go here → pick up → verify → deliver → photo → complete)
- `WorkEvidence`: first-class entity for proof submissions (vs `proofUrl` string)
- RASCI enforcement: accountable/supported/consulted/informed flags have meaning but no enforcement logic yet
- Rework lifecycle: `NEEDS_REWORK` status exists, no workflow around it yet

### Multi-Org / Job Library
- JobTemplate layer (org-agnostic activity definitions)
- Shared Activity library across organizations

### Values, Policies, Standards, Knowledge Articles
- Organizational context that informs how Work should be done
- Future input to agent prompt generation

### Evaluation / Review / Feedback — The Quality Signal Loop

Three names are in play for what is fundamentally the same concept at different scopes. The naming hasn't been resolved yet — all three are valid lenses:

- **Review** — emphasizes the act of inspecting the work: "was this done correctly and should it be accepted?"
- **Evaluation** — emphasizes the assessment output: "how well was this done, and what is the quality score?" Common in agent/AI contexts where evals are a standard practice for measuring output quality.
- **Feedback** — emphasizes the signal that enables improvement: "here is what was wrong and why." Feedback is what makes Review or Evaluation actionable — without it, you know the work failed but not how to do better next time.

The relationship between them:
- An **Evaluation** determines the outcome (APPROVED / NEEDS_REWORK / REJECTED) and contains **Feedback** explaining why
- **Feedback** is the substance — specific notes about what was correct, what was wrong, what to do differently
- A **Review** is the process — a Worker (person or agent) with a responsible JobActivity for "review" examines the Work and produces an Evaluation with Feedback

**The learning loop this enables:**

```
Learn / Train
     ↓
Understand (internalize the Activity's objective and acceptance criteria)
     ↓
Apply (do the Work)
     ↓
Evaluate (Review produces Evaluation + Feedback)
     ↓
Learn better (agent updates via fine-tuning or prompt update; person gets coaching)
```

This loop applies equally to agents and humans. For agents, Evaluations are the signal that drives prompt improvement, fine-tuning, or model selection. For humans, they aggregate into periodic performance reviews rather than being per-Work events — though the underlying per-Work signal is the same.

**Acceptance criteria** is the missing link: Work doesn't currently define what "done correctly" means. That likely lives on `Activity` — "here is what good looks like for this type of work" — and the Evaluation checks the Work output against those criteria.

**Proposed entity shape (not yet built):**

```
Evaluation
  id
  work → Work                        ← the specific Work being evaluated
  reviewer → Worker                  ← person or agent doing the evaluation
  outcome: EvaluationOutcome         ← APPROVED | NEEDS_REWORK | REJECTED
  score?: number                     ← optional quality score (0-100)
  createdAt: Date

EvaluationFeedback
  id
  evaluation → Evaluation
  criterion?: string                 ← which acceptance criterion this feedback addresses
  observation: string                ← what was observed (specific, not vague)
  suggestion?: string                ← what to do differently next time
  sentiment: FeedbackSentiment       ← POSITIVE | CONSTRUCTIVE | CRITICAL
```

**Customer feedback** fits here too — a customer/recipient of the Work output can submit an Evaluation, with their Worker role being "customer" or "recipient." Their perspective is a different type of Evaluation but the same structure.

**Scope levels:**
- Per-Work → `Evaluation` (immediate, close to the event)
- Per-Worker over time → aggregate of Evaluations across a period (the performance review; generated, not manually authored)
- Per-Agent → the same aggregate, but used to drive prompt/model improvement rather than coaching

**Open questions for the spec:**
- Is `Evaluation` attached to `Work` directly, or to `WorkAssignment` (since the assignment is who did it)?
- Can a Work item have multiple Evaluations (peer review + customer review)?
- Does the Evaluation trigger the Work status transition to APPROVED/NEEDS_REWORK, or does it just inform it?
- Where do acceptance criteria live — on `Activity`, on `Work`, or on `JobActivity`?

---

## GitHub Issues

| # | Title | Status |
|---|-------|--------|
| [#2](https://github.com/dgenduso/dginc/issues/2) | feat: Job, Activity, JobActivity, Work, WorkAssignment, Story entities + wire intake agent | Open |
