import React from "react";

function Task({ task, handleDelete }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(task.text)}>
        X
      </button>
    </div>
  );
}

export default Task;
