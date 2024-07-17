import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import SkincarePage from "./pages/SkincarePage";
import HaircarePage from "./pages/HaircarePage";
import SkincareDetailPage from "./pages/skincareDetailPage";
import QuizPage from "./pages/QuizPage";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/skincare",
        element: <SkincarePage/>,
      },
      {
        path: "/skincare/:id",
        element: <SkincareDetailPage />,
      },
      {
        path: "/haircare",
        element: <HaircarePage/>,
      },
      {
        path: "/quiz",
        element: <QuizPage/>,
      },
      
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
