import React from "react";
import { NavLink } from "react-router";

const AllCategoryCard = ({ catergory }) => {
  return (
    <div className="grid grid-cols-1 mt-5 gap-5">
      <NavLink
        className={"btn border-0 bg-base-200 text-sm text-accent "}
        to={`/category/${catergory.id}`}
      >
        {catergory.name}
      </NavLink>
    </div>
  );
};

export default AllCategoryCard;
