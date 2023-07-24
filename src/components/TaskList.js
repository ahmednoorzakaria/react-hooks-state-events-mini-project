import React, { useState } from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";
import { CATEGORIES } from "../data";

function TaskList({ TASKS }) {
  const [deleted, setDeleted] = useState(TASKS);
  const [category, setCategory] = useState("All");
  function handleCategoryClick(category) {
    if (category === "All") {
      return "All";
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setDeleted(filteredTasks);
    }
    setCategory(category);
  }
  function handleDelete(taskText) {
    const updatedList = deleted.category((task) => task.text !== taskText);
    setDeleted(updatedList);
  }
  const displayTasks = deleted.filter((task) => category === "All" || task.category === category)
  function renderList() {
    return displayTasks.map((task) => (
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
        activeCategory={category}
        setCategory ={setCategory}
      />
      {/* display a list of tasks using Task component */}
      <ul>{renderList()}</ul>
    </div>
  );
}

export default TaskList;
