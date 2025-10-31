import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import InsightsPanel from "./components/InsightsPanel";
import { fetchTasks } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Task Tracker</h1>
      <TaskForm onTaskCreated={loadTasks} />
      <TaskList tasks={tasks} refresh={loadTasks} />
      <InsightsPanel />
    </div>
  );
}

export default App 