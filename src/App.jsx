import Header from "./components/Header"; // Kisi file ko use karne ke leay App main import kia 
import AddTask from "./components/AddTask"; //  same 
import ShowTask from "./components/ShowTask"; // same
import "./App.css"; 
import { useEffect, useState } from "react";

export default function App() {
  
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || [],
  );

  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />

      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        editId={editId}
        setEditId={setEditId}
      />

      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        setTask={setTask}
        setEditId={setEditId}
      />
    </div>
  );
}
