import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layout/HomeLayOut.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import CategoryNews from "../Pages/CategoryNews.jsx";
import AuthtencitactionLayout from "../layout/AuthtencitactionLayout.jsx";
import LogIn from "../Pages/LogIn.jsx";
import Register from "../Pages/Register.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "",
    Component: Home,
  },
  {
    path: "/auth",
    Component: AuthtencitactionLayout,
    children: [
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/carrer",
    Component: Carrer,
  },
]);

export default Router;
