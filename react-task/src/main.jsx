import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FunctionalComponent from "./component/FunctionalComponent.jsx";

const firstNames = ["Tayyab", "Shoaib", "Haris", "Usama", "Junaid"];
const lastNames = ["Khan", "Chaudhry", "Jutt", "Niazi", "Ali"]; //

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {firstNames.map((first, index) => (
      <FunctionalComponent
        key={index}
        name={first}
        secondName={lastNames[index]}
      />
    ))}
  </StrictMode>
);
