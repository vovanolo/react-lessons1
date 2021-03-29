import React from "react";

export default function TaskEditor({ onAddTasks }) {
  return (
    <div>
      <button onClick={onAddTasks}>Add Task</button>
    </div>
  );
}
