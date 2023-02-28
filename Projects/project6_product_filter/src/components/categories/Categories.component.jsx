import React from "react";
import "./Categories.css";

const capitalize = (word) => {
  return word.charAt(0).toUppercase() + word.slice(1);
};

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            className="btn --btn --btn-secondary"
            key={index}
            onClick={() => filterItems(item)}
          >
            {/* {capitalize(item)} */}
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
