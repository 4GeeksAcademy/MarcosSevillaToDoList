import React from "react";

const Task = ({ task, index, deleteTask }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
    >
      {task}
      <i
        className="fas fa-times text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => deleteTask(index)}
      ></i>
    </li>
  );
};

export default Task;
