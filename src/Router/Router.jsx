import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layout/HomeLayOut.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import CategoryNews from "../Pages/CategoryNews.jsx";

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
    path: "/about",
    Component: About,
  },
  {
    path: "/carrer",
    Component: Carrer,
  },
]);

export default Router;
