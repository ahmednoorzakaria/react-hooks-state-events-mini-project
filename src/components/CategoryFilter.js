import React from "react";
function CategoryFilter({ CATEGORIES, handleCategoryClick }) {
  function renderCategory() {
    return CATEGORIES.map((category) => (
      <button key={category} onClick={() => handleCategoryClick(category)}>
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
