import React from "react";
import Navvar from "../Componets/Navvar/Navvar";
import { Outlet } from "react-router";

const AuthtencitactionLayout = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      <header className="w-11/12 mx-auto p-5">
        <Navvar></Navvar>
      </header>
      <main className="w-11/12 mx-auto p-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthtencitactionLayout;
