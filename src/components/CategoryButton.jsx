import React from "react";

const CategoryButton = ({ categoryName, current}) => {
    // console.log(categoryName);
  return (
    <button
      
      className={`${
        current === "true" && "bg-black text-white" 
      } border border-black hover:bg-gray-400 hover:text-white text-nowrap text-gray-800 font-bold py-2 px-4 rounded m-2 category-button`}
      type="button"
    >
      { categoryName}
    </button>
  );
};

export default CategoryButton;
