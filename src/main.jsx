import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar, Main } from "./components/home";
import { Products } from "./components/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Main />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <NavBar />
        <Products />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
