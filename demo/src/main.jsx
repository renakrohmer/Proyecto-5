import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./router";
import Error from "./Error.jsx";  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Error>
      <RouterProvider router={router} />
    </Error>
  </React.StrictMode>
);
