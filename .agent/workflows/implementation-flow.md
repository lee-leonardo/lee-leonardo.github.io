---
description: Standard workflow for implementing new features and changes. strict-plan-first approach.
---

1. **Analysis & Exploration**:
   - thoroughly explore the relevant parts of the codebase.
   - understand the user's requirements and constraints.

2. **Feasibility & Planning**:
   - Create or update `implementation_plan.md` in the artifacts directory.
   - **CRITICAL RULE**: You MUST NOT write any implementation code until the plan is reviewed.
   - The plan must include:
     - User Review Required items.
     - Proposed Changes (file by file).
     - Verification Plan.
   - Call `notify_user` to request approval for the plan.

3. **Execution**:
   - Once approved, proceed with `task_boundary` mode = EXECUTION.
   - Implement changes iteratively.
   - Maintain `task.md`.

4. **Verification**:
   - Verify code with tests or manual checks.
   - specific verification steps (e.g. `npm run build`, `npm test`).
   - Create `walkthrough.md` with proof of work.