import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <h1>test path</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
