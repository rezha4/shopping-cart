import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar, Main } from "./components/home";
import { Products, Cart } from "./components/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Cart />
        <Main />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Cart />
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
