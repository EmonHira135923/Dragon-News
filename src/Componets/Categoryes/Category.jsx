import React, { use } from "react";
import AllCategoryCard from "./AllCategoryCard";

const categorypromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categoriesdata = use(categorypromise);
  //   console.log(categoriesdata);
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">All Categories</h2>
      <div>
        {categoriesdata.map((catergory) => (
          <AllCategoryCard
            key={catergory.id}
            catergory={catergory}
          ></AllCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
