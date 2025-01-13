
import "./index.css";

import {createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/router";


const categories = [
  "electronics",
  "jewelry",
  "men's clothing",
  "women's clothing",
];


const root = document.querySelector("#root");


createRoot(root).render(<RouterProvider router={router} />) 

// createRoot(root).render(<App />);