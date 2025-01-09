import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Products Categories";
  const categories = [
    
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <p className="text-md  text-gray-600 mb-2 ">{title}</p>
        <div className="flex overflow-scroll category-button">
        <CategoryButton categoryName="all" current= "true"/>
            
            {/* <CategoryButton name="jewelry" />
            <CategoryButton name="men's clothing" />
            <CategoryButton name="women's clothing" />   */}


          {categories.map((category) => (
            <CategoryButton key={category} categoryName = {category} 
            current={false}
            />
          ))}
        </div>
    </section>
  );
};

export default CategorySection;
