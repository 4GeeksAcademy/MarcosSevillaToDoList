import React, { useState } from "react";
import ListInput from "./ListInput";
import ToDoList from "./ToDoList";

const Home = () => {
  const predefinedTasks = [
    "Hacer los deberes",
    "Hacer la cama",
    "Lavarse las manos",
    "Pasear al perro",
    "Recoger la mesa",
  ];

  // Inicializa con todas las tareas predefinidas
  const [tasks, setTasks] = useState(predefinedTasks);

  // Función para agregar todas las tareas predefinidas al presionar Enter
  const handleAddPredefinedTasks = () => {
    if (tasks.length === 0) {
      setTasks(predefinedTasks); // Restaura todas las tareas predefinidas
    }
  };

  // Función para agregar una nueva tarea personalizada
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para eliminar una tarea
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div
      className="container mt-5"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleAddPredefinedTasks();
        }
      }}
      tabIndex={0} // Necesario para capturar eventos de teclado en el div
    >
      <h1 className="text-center mb-4">ToDoList</h1>
      <ListInput addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;










