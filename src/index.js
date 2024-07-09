// React elements
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Router
import router from "./router";

// Style
import "./index.css";

// Report Web Vitals
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
