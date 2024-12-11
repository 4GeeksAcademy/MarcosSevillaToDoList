import React from "react";
import Task from "./List";

const ToDoList = ({ tasks, deleteTask }) => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div
        className="border rounded p-1 w-50"
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        {tasks.length === 0 ? (
          <p className="text-center text-muted">No hay tareas, añadir tareas</p>
        ) : (
          <ul className="list-group">
            {tasks.map((task, index) => (
              <Task key={index} task={task} index={index} deleteTask={deleteTask} />
            ))}
            <p className="text-muted p-3">Tareas pendientes: {tasks.length}</p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
