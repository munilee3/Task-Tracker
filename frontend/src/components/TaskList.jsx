import React from "react";
import { updateTask } from "../api";

function TaskList({ tasks, refresh }) {
    const handleStatusChange = async (id, newStatus) => {
        await updateTask(id, { status: newStatus });
        refresh();
    };

    const handlePriorityChange = async (id, newPriority) => {
        await updateTask(id, { priority: newPriority });
        refresh();
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold mb-3">Task List</h2>
            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border text-sm sm:text-base">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">Title</th>
                                <th className="p-2 border">Priority</th>
                                <th className="p-2 border">Status</th>
                                <th className="p-2 border">Due Date</th>
                                <th className="p-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((t) => (
                                <tr key={t.id} className="text-center">
                                    <td className="border p-2">{t.title}</td>
                                    <td className="border p-2">
                                        <select
                                            value={t.priority}
                                            onChange={(e) => handlePriorityChange(t.id, e.target.value)}
                                            className="border px-1 rounded"
                                        >
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </td>
                                    <td className="border p-2">
                                        <select
                                            value={t.status}
                                            onChange={(e) => handleStatusChange(t.id, e.target.value)}
                                            className="border p-1 rounded"
                                        >
                                            <option>Open</option>
                                            <option>In Progress</option>
                                            <option>Done</option>
                                        </select>
                                    </td>
                                    <td className="border p-2 w-[110px]">{t.due_date}</td>
                                    <td className="border p-2">{t.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default TaskList