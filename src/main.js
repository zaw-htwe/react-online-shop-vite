import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const categories = [
  "electronics",
  "jewelry",
  "men's clothing",
  "women's clothing",
];


const root = document.querySelector("#root");

// const app = createElement("div",
//     {id:"category-section",className:"p-5"},
//     createElement("p",{className:"text-2xl text-gray-600 mb-3"},"Product Categories"),
//     createElement("div",null,...categories.map(category => createElement("button",
//         {className:"bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-2"},
//     category)))    
// );


createRoot(root).render(App())