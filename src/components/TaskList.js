import React, {useState } from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";
import { CATEGORIES } from "../data";

function TaskList({ TASKS }) {
  const [deleted, setDeleted] = useState(TASKS);
  const [filter, setFilter] = useState("ALL");

  function handleCategoryClick(category) {
    if (category === "ALL") {
      setDeleted(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setDeleted(filteredTasks);
    }
    setFilter(category);
  }
  function handleDelete(taskText) {
    const updatedList = deleted.filter((task) => task.text !== taskText);
    setDeleted(updatedList);
  }

  function renderList() {
    return deleted.map((task) => (
      <li key={task.text}>
        <Task task={task} handleDelete={handleDelete} />
      </li>
    ));
  }

  return (
    <div className="tasks">
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        handleCategoryClick={handleCategoryClick}
        activeCategory={filter}
      />
      {/* display a list of tasks using Task component */}
      <ul>{renderList()}</ul>
      
    </div>
  );
}

export default TaskList;
