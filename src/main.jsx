import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
  {
    path: "/login",
    element: <div>login page</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
