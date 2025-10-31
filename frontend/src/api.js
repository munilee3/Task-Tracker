const API_BASE = "https://task-tracker-app-backend-0qwr.onrender.com";

export async function fetchTasks(filters = {}) {
    const params = new URLSearchParams(filters);
    const res = await fetch(`${API_BASE}/tasks?${params.toString()}`);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
}

export async function createTask(taskData) {
    const res = await fetch(`${API_BASE}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
    });
    if (!res.ok) throw new Error("Failed to create task");
    return await res.json();
}

export async function updateTask(id, updates) {
    const res = await fetch(`${API_BASE}/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
}

export async function fetchInsights() {
    const res = await fetch(`${API_BASE}/insights`);
    if (!res.ok) throw new Error("Failed to fetch insights");
    return await res.json();
}
