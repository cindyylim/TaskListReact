import React, { useState, useEffect } from "react";
import Header from "./Header";
import Task from "./Task";
import CreateArea from "./CreateArea";

function App() {
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    const response = await fetch("http://localhost:3001/tasks");
    const data = await response.text();
    setTasks(eval(data));
  }

  async function addTask(newTask) {
    const task = JSON.stringify(newTask);
    const response = await fetch("http://localhost:3001/newTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: task,
    });
    await response.text();
    getTasks();
  }

  async function deleteTask(id) {
    const response = await fetch(`http://localhost:3001/task/${id}`, {
      method: "DELETE",
    });
    await response.text();
    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTask} />
      {tasks.map((t) => (
        <Task
          key={t.id}
          id={t.id}
          content={t.task}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
