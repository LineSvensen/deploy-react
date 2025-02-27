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
    element: <h1>Test Page</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ✅ Wrap the app inside RouterProvider */}
    <RouterProvider router={router} />
  </StrictMode>
);
