## Database Schema

I designed a simple yet scalable schema around a single table — tasks:

| Field         | Type                         | Purpose                                           |
| ------------- | ---------------------------- | ------------------------------------------------- |
| `id`          | INTEGER (PK, Auto Increment) | Unique identifier for each task                   |
| `title`       | TEXT                         | Task name                                         |
| `description` | TEXT                         | Brief details about the task                      |
| `priority`    | TEXT                         | Can be “Low”, “Medium”, or “High”                 |
| `status`      | TEXT                         | Tracks progress: “Open”, “In Progress”, or “Done” |
| `due_date`    | DATE                         | Task deadline                                     |
| `created_at`  | TIMESTAMP                    | Tracks when the task was created                  |

Design reasoning:

    I kept it flat (single table) since relationships.

    Text-based enums make it easy to filter or extend later.

    SQLite was chosen for simplicity and portability — ideal for a demo or small-scale app.

## Backend Logic

Built using Express.js and better-sqlite3 for lightweight performance.

### Core Routes:

    GET /tasks → Fetch all tasks

    POST /tasks → Create a new task

    PATCH /tasks/:id → Update task status or priority

    DELETE /tasks/:id → Remove a task

    GET /insights → Returns AI-like summary insights (based on task stats)

### Logic highlights:

    Used async/await for clean and predictable flow.

    Simple validation on the backend ensures only valid fields are updated.

    Error handling returns proper HTTP status codes for frontend feedback.

## Frontend Architecture

Built with React (Create React App) + Tailwind CSS for quick UI iteration.

### Component Breakdown:

    TaskForm → Handles new task creation.

    TaskList → Displays tasks with editable status and priority.

    InsightsPanel → Shows dynamic summaries (e.g., completed task stats).

    api.js → Centralized API calls for clean separation between UI and logic.

### Design:

    React hooks (useState, useEffect) for simple state management.

    Modular components make maintenance easy.

    Tailwind ensures responsive, mobile-friendly UI with minimal CSS overhead.

## Improvements I’d Make Next

1. Authentication & User Accounts: Allow multiple users to manage their own tasks.
2. Implement pagination and filtering on the backend.
3. Add a “task timeline” chart using any open-source chart library.