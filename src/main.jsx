import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Root from "./Component/Layout/Root";
import AuthProvider from "./Component/Provider/AuthProvider";

import Home from "./Component/Home/Home";
import ErrorPage from "./Component/ErrorPage/Errorpage";
import Features from "./Component/Home/Features/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:"features",
        element:<Features></Features>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);