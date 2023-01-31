import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import UserList from "./routes/UserList";
import User from "./routes/User";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);