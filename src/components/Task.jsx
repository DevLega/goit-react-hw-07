import React from "react";
import "./Task.css";

export default function Task({ task, onDelete }) {
  return (
    <li className="task">
      <p>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>Видалити</button>
    </li>
  );
}
