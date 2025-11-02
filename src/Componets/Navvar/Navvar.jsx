import React, { useState } from "react";
import { Menu, X, House } from "lucide-react";
import { NavLink } from "react-router";
import { FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import manimg from "../../assets/user.png";

const Navvar = () => {
  const activeclass =
    "border-b-2 border-[#632ee3] bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-purple-700 font-bold";
  const [toggle, settoggle] = useState(true);

  // Dynamic Nav items
  const navItems = [
    { name: "Home", path: "/", icon: <House /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Career", path: "/carrer", icon: <MdWorkspacePremium /> },
  ];

  return (
    <nav className="p-5 bg-base-300 text-accent ">
      <div className="flex justify-between gap-5 items-center mt-3 text-xl font-bold ">
        {/* Start: Logo and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div className="md:hidden flex">
            <button onClick={() => settoggle(!toggle)}>
              {toggle ? <Menu /> : <X />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`flex flex-col md:hidden mt-1 ml-1 absolute bg-gray-300 font-light text-xl p-5 rounded-xl transition-all duration-300 ${
            toggle ? "top-80 -left-40" : "top-80 left-0 space-y-3"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? activeclass : "")}
            >
              <span className="flex gap-1 items-center">
                {item.icon}
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Desktop Menu */}
        <div className="md:flex items-center gap-5 hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? activeclass : "")}
            >
              <span className="flex gap-1 justify-center items-center">
                {item.icon}
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="flex items-center gap-5">
          <div>
            <img
              src={manimg}
              alt=""
              className="w-500px bg-base-200 rounded-2xl"
            />
          </div>
          <button className="btn btn-primary text-base-200  text-xl py-6 px-5 md:p-7 md:w-40  ">
            <NavLink
              className="flex items-center gap-2 text-base-200"
              to={"/auth/login"}
            >
              <FaSignInAlt /> Login
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navvar;
