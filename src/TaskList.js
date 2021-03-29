import React from "react";

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h1>{task.id}</h1>
            <p>{task.text}</p>
            <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
