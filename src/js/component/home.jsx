import React, { useState } from "react";
import ListInput from "./ListInput";
import ToDoList from "./ToDoList";

const Home = () => {
  // Tareas iniciales por defecto
  const predefinedTasks = [
    "Hacer los deberes",
    "Hacer la cama",
    "Lavarse las manos",
    "Pasear al perro",
    "Recoger la mesa",
  ];

  // Estado inicial con las tareas por defecto
  const [tasks, setTasks] = useState(predefinedTasks);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]); // Añadir una nueva tarea
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Eliminar tarea seleccionada
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && tasks.length === 0) {
      // No hacemos nada si el usuario presiona "Enter" después de borrar todas las tareas
      return;
    }
  };

  return (
    <div
      className="container mt-5"
      tabIndex={0} // Necesario para capturar eventos de teclado
      onKeyDown={handleKeyPress}
    >
      <h1 className="text-center mb-4">ToDoList</h1>
      <ListInput addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
















