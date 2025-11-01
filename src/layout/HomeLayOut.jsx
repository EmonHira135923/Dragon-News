import React from "react";
import Header from "../Componets/Header/Header";
import { Outlet } from "react-router";
import LeftAside from "../Componets/LeftAside/LeftAside";
import RightAside from "../Componets/RightAside/RightAside";

const HomeLayOut = () => {
  return (
    <div>
      <Header>
        <Header></Header>
      </Header>
      <main className="mx-auto w-11/12 my-3 grid grid-cols-12 gap-5">
        {/* Left Navvar  */}
        <section className="col-span-3">
          <LeftAside></LeftAside>
        </section>
        {/* Outlet Section */}
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        {/* Right Navvar */}
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayOut;
