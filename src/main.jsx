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
import CreateAssignments from "./Component/CreateAssignmets/CreateAssignments";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Assignments from "./Component/Assignments/Assignments";
import UpdateAssignment from "./Component/Update/UpdateAssignment";
import Details from "./Component/Details/Details";
import Sub_Assignment from "./Component/SubmittedAssignment/Sub_Assignment";
import GiveMark from "./Component/SubmittedAssignment/GiveMark/GiveMark";
import MyAssignment from "./Component/MyAssignmentPage/MyAssignment";

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
      },
      {
        path:"assignments",
        element:<Assignments></Assignments>,
      },
      {
        path:"myAssignments",
        element:
        <PrivateRoute>
          <MyAssignment></MyAssignment>
        </PrivateRoute>
      },
      {
        path: "updateAssignment/:id",
        element: 
        <PrivateRoute>
          <UpdateAssignment></UpdateAssignment>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-side-category-0001.vercel.app/assignment/${params.id}`)
      },
      {
        path: "viewAssignment/:id",
        element: 
        <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-side-category-0001.vercel.app/assignment/${params.id}`)
      },
      {
        path: "submitted",
        element: 
        <PrivateRoute>
          <Sub_Assignment></Sub_Assignment>
        </PrivateRoute>,
      },
      {
        path: "giveMark/:id",
        element: 
        <PrivateRoute>
          <GiveMark></GiveMark>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-side-category-0001.vercel.app/submittedAssignments/${params.id}`)
      },
      {
        path:"createAssignments",
        element:
        <PrivateRoute>
          <CreateAssignments></CreateAssignments>
        </PrivateRoute> 
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
