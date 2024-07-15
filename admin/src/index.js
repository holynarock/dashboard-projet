import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";

import Login from "./page/Login";
import Register from "./page/Register";
import Acceuil from "./components/Acceuil";
import Container from "./dashboard/page-dash/container";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Connexion",
    element: <Login />,
  },
  {
    path: "Inscription",
    element: <Register />,
  },
  {
    path: "Acceuil",
    element: <Acceuil />,
  },
  {
    path: "Dashboard",
    element: < Container />,
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

  < RouterProvider router={router} />

);