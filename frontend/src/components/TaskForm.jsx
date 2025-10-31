import React, { useState } from "react";
import { createTask } from "../api";

function TaskForm({ onTaskCreated }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "Medium",
        due_date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask(form);
            setForm({ title: "", description: "", priority: "Medium", due_date: "" });
            onTaskCreated();
        } catch (err) {
            alert("Error creating task");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold mb-3">Create New Task</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                    className="p-2 border rounded"
                />
                <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="p-2 border rounded"
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    rows={2}
                    className="p-2 border rounded col-span-1 md:col-span-2"
                ></textarea>
                <input
                    type="date"
                    name="due_date"
                    value={form.due_date}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded col-span-1 md:col-span-2"
                />
            </div>
            <button
                type="submit"
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
                Add Task
            </button>
        </form>
    );
}

export default TaskForm