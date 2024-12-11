import React, { useState } from "react";

const ListInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      addTask(newTask); // Agregar la tarea usando el método proporcionado
      setNewTask(""); // Limpiar el input, valor vacio
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Añadir tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default ListInput;
