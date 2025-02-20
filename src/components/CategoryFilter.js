import React from "react";
function CategoryFilter({ CATEGORIES,setCategory}) {
  function renderCategory() {
    return CATEGORIES.map((category) => (
      <button key={category} onClick={() => setCategory(category)}>
        {category}
      </button>
    ));
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderCategory()}
    </div>
  );
}

export default CategoryFilter;
