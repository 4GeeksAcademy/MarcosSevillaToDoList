import React, { useState } from "react";
import ListInput from "./ListInput";
import ToDoList from "./ToDoList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskIndex, setTaskIndex] = useState(0);

  const predefinedTasks = [
    "Hacer los deberes",
    "Hacer la cama",
    "Lavarse las manos",
    "Pasear al perro",
    "Recoger la mesa",
  ];

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Reinicia el índice si todas las tareas son eliminadas
    if (updatedTasks.length === 0) {
      setTaskIndex(0);
    }
  };

  const handleKeyPress = () => {
    if (taskIndex < predefinedTasks.length) {
      setTasks([...tasks, predefinedTasks[taskIndex]]);
      setTaskIndex(taskIndex + 1);
    }
  };

  return (
    <div
      className="container mt-5"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <h1 className="text-center mb-4">ToDoList</h1>
      <ListInput addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;





