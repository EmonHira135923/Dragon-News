import React, { Suspense } from "react";
import Category from "../Categoryes/Category";

const LeftAside = () => {
  return (
    <div>
      <aside>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Category></Category>
        </Suspense>
      </aside>
    </div>
  );
};

export default LeftAside;
